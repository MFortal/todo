import { Formik, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import pathClose from "../../../icons/closeModal.svg";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { FLAG } from "../../../js/common";

export const ModalEdit = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const card = location.state.card;
  const flag = location.state.flag;

  const currentDate = dayjs().format("YYYY-MM-DD");

  const updateCard = async (values) => {
    await updateDoc(doc(db, "todos", values.id), {
      id: values.id,
      name: values.name,
      description: values.description,
      deadline: values.deadline,
      dateCompletion: values.dateCompletion,
    });
  };

  return (
    <>
      <div className="modal">
        <div className="modal_content">
          <button
            className="modal_close"
            onClick={() => {
              navigate("/Todo");
            }}>
            <img src={pathClose} alt="" />
          </button>
          <h3 className="modal_header">Редактировать</h3>
          <Formik
            initialValues={{
              id: card.id,
              name: card.name,
              description: card.description,
              deadline: dayjs(card.deadline.seconds * 1000).format(
                "YYYY-MM-DD"
              ),
              toggle: flag === FLAG.COMPLETED ? true : false,
            }}
            onSubmit={(values) => {
              values.deadline = Timestamp.fromDate(new Date(values.deadline));
              values.dateCompletion = values.toggle
                ? Timestamp.fromDate(new Date(currentDate + " 00:00:00+03:00"))
                : Timestamp.fromDate(new Date("2040-01-01 00:00:00+03:00"));

              updateCard(values);
              navigate("/Todo");
            }}>
            {(props) => (
              <Form className="modal_main">
                <Input
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
                    min={currentDate}
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
                  <span className="toggle-track">
                    <span className="toggle-indicator"></span>
                  </span>
                  <span className="toggle-text">Задача выполнена</span>
                </label>
                <Button value={"Сохранить"} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
