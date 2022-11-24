import { Formik, Form } from "formik";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { currentDateFormat } from "../../../js/common";

import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";

import Button from "../../../components/Button/Button";
import InputsContainer from "../../../components/InputsContainer/InputsContainer";
import Modal from "../Modal";

export const ModalCreate = () => {
  const navigate = useNavigate();

  const addNewCard = async (values) => {
    await setDoc(doc(db, "todos", values.id), {
      id: values.id,
      name: values.name,
      description: values.description,
      deadline: values.deadline,
      dateCompletion: values.dateCompletion,
    });
  };

  const children = (
    <>
      <h3 className="modal__header">Создать</h3>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          values.id = v4();
          values.deadline = Timestamp.fromDate(new Date(values.deadline));
          values.dateCompletion = Timestamp.fromDate(
            new Date("2040-01-01 00:00:00+03:00")
          );

          addNewCard(values);
          navigate("/Todo");
        }}>
        {(props) => (
          <Form className="modal__main">
            <InputsContainer
              placeholderInput="Название"
              placeholderText="Описание"
              nameInput="name"
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
                min={currentDateFormat}
                required
              />
            </label>
            <Button value={"Сохранить"} />
          </Form>
        )}
      </Formik>
    </>
  );

  return <Modal children={children} />;
};

export default ModalCreate;
