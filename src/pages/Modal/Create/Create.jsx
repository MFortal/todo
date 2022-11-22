import { Formik, Form } from "formik";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

import pathClose from "../../../icons/closeModal.svg";

export const ModalCreate = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (values.description?.length > 0 && values.description?.length < 10) {
      errors.description = "Описание задачки должно быть больше 10 символов";
    }
    if (values.name?.length < 5) {
      errors.name = "Наименование задачки должно быть больше 5 символов";
    }
    if (!values.tags?.length) {
      errors.tags = "Выберите хотя бы 1 тег";
    }

    return errors;
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
            initialValues={{
              tags: [],
            }}
            validate={validate}
            onSubmit={(values) => {
              values.id = v4();
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
                {props.errors.description && (
                  <div className="feedback">{props.errors.description}</div>
                )}
                {props.errors.name && (
                  <div className="feedback">{props.errors.name}</div>
                )}
                {props.errors.tags && (
                  <div className="feedback">{props.errors.tags}</div>
                )}
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
