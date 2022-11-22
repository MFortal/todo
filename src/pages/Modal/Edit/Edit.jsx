import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import pathClose from "../../../icons/closeModal.svg";

export const ModalEdit = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (values.description?.length > 0 && values.description?.length < 10) {
      errors.description = "Описание задачки должно быть больше 10 символов";
    }
    if (values.name?.length < 5) {
      errors.name = "Наименование задачки должно быть больше 5 символов";
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
          <h3 className="modal_header">Редактировать</h3>
          <Formik
            // initialValues={{
            //   id: card.id,
            //   name: card.name,
            //   description: card.description,
            //   tags: card.tags,
            //   comments: card.comments,
            //   boardId: card.boardId,
            // }}
            validate={validate}
            onSubmit={(values) => {
              navigate("/Todo");
            }}>
            {(props) => (
              <Form className="modal_main">
                <Input
                  placeholderInput="Название"
                  placeholderText="Описание"
                  //valueInput={props.values.name}
                  nameInput="name"
                  //valueText={props.values.description}
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
