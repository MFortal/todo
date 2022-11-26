import { Formik, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

import InputsContainer from "../../../components/InputsContainer/InputsContainer";
import Button from "../../../components/Button/Button";
import Modal from "../Modal";

import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import {
  FLAG,
  currentDateFormat,
  defaultDate,
  format,
  formatTStoDate,
  defaultTime,
} from "../../../js/common";

import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import pathClose from "../../../icons/open.svg";

export const ModalEdit = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const card = location.state.card;
  const flag = location.state.flag;

  const promises = [];
  const newFiles = [];

  for (let i = 0; i < card.files?.length; i++) {
    card.files[i].checked = true;
  }

  const updateCard = async (values) => {
    values.files = [];

    for (let i = 0; i < card.files?.length; i++) {
      if (card.files[i].checked === true) {
        delete card.files[i].checked;
        values.files.push(card.files[i]);
      }

      console.log(values.files[i]);
    }

    for (let i = 0; i < newFiles?.length; i++) {
      values.files.push(newFiles[i]);
    }

    console.log(values.files);

    await updateDoc(doc(db, "todos", values.id), {
      id: values.id,
      name: values.name,
      description: values.description,
      deadline: values.deadline,
      dateCompletion: values.dateCompletion,
      files: values.files,
    });
  };

  const handleCheckbox = (index, file) => {
    const item = document.querySelector(`#a${index}`);
    item.checked = item.checked ? false : true;
    file.checked = file.checked ? false : true;
  };

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      promises.push(uploadImageAsPromise(newImage));
    }
  };

  const uploadImageAsPromise = (file) => {
    return new Promise(function (resolve, reject) {
      const storageRef = ref(storage, `${card.id}/${file.name}`);
      const task = uploadBytesResumable(storageRef, file);

      task.on(
        "state_changed",
        (snapshot) => {},
        (err) => {},
        () => {
          getDownloadURL(task.snapshot.ref).then((downloadURL) => {
            newFiles.push({
              name: file.name,
              url: downloadURL,
            });
          });
        }
      );
    });
  };

  const children = (
    <>
      <h3 className="modal__header">Редактировать</h3>
      <Formik
        initialValues={{
          id: card.id,
          name: card.name,
          description: card.description,
          deadline: format(formatTStoDate(card.deadline.seconds), "YYYY-MM-DD"),
          toggle: flag === FLAG.COMPLETED ? true : false,
        }}
        onSubmit={(values) => {
          values.deadline = Timestamp.fromDate(new Date(values.deadline));
          values.dateCompletion = values.toggle
            ? Timestamp.fromDate(new Date(currentDateFormat + defaultTime))
            : Timestamp.fromDate(new Date(defaultDate));

          updateCard(values);
          navigate("/Todo");
        }}>
        {(props) => (
          <Form className="modal__main">
            <InputsContainer
              placeholderInput="Название"
              placeholderText="Описание"
              valueInput={props.values.name}
              nameInput="name"
              valueText={props.values.description}
              nameText="description"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <label className="deadline">
              Дедлайн
              <input
                className="input-date"
                type="date"
                name="deadline"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.deadline}
              />
            </label>
            <div className="files">
              {card.files?.map((file, index) => (
                <div className="file">
                  <label
                    htmlFor={index}
                    onClick={() => handleCheckbox(index, file)}>
                    <input
                      type="checkbox"
                      id={"a" + index}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="checkbox"
                      checked={file.checked ? true : false}
                    />
                    {file.name}
                  </label>
                  <a
                    className="file__url"
                    href={file.url}
                    download
                    key={file.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={pathClose} alt="" />
                  </a>
                </div>
              ))}
            </div>
            <input type="file" multiple onChange={handleChange} />
            <label className="toggle" htmlFor="toggle">
              <input
                type="checkbox"
                className="toggle__input"
                id="toggle"
                name="toggle"
                checked={props.values.toggle ? true : false}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />

              <span className="toggle__track">
                <span className="toggle__track_indicator"></span>
              </span>
              <span className="toggle__text">Задача выполнена</span>
            </label>
            <Button value={"Сохранить"} />
          </Form>
        )}
      </Formik>
    </>
  );

  return <Modal children={children} />;
};

export default ModalEdit;
