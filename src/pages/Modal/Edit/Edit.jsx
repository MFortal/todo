import { Formik, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

import InputsContainer from "../../../components/InputsContainer/InputsContainer";
import Button from "../../../components/Button/Button";
import Modal from "../Modal";

import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  FLAG,
  currentDateFormat,
  defaultDate,
  format,
  formatTStoDate,
  defaultTime,
} from "../../../js/common";

export const ModalEdit = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const card = location.state.card;
  const flag = location.state.flag;

  const updateCard = async (values) => {
    await updateDoc(doc(db, "todos", values.id), {
      id: values.id,
      name: values.name,
      description: values.description,
      deadline: values.deadline,
      dateCompletion: values.dateCompletion,
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
                min={currentDateFormat}
                value={props.values.deadline}
              />
            </label>
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
