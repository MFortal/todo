import { Formik, Form } from "formik";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

import pathClose from "../../../icons/closeModal.svg";

export const ModalCreate = () => {
  const navigate = useNavigate();

  const currentDate = dayjs().format("YYYY-MM-DD");

  const addNewCard = async (values) => {
    const id = v4();
    await setDoc(doc(db, "todos", id), values);
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
          <h3 className="modal_header">Создать</h3>
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
              <Form className="modal_main">
                <Input
                  placeholderInput="Название"
                  placeholderText="Описание"
                  nameInput="name"
                  nameText="description"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <input
                  className="input-date"
                  type="date"
                  name="deadline"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  min={currentDate}
                  required
                />

                <Button value={"Сохранить"} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalCreate;
