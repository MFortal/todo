import { Field } from "formik";
import classNames from "classnames";

import { Tag } from "../Tag/Tag";
import styles from "./Checkbox.module.css";

const onChange = (form, value, props) => {
  let nextValue;
  if (value?.includes(props.value)) {
    nextValue = value.filter((value) => value !== props.value);
  } else {
    nextValue = value.concat(props.value);
  }
  form.setFieldValue(props.name, nextValue);
};

export const Checkbox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label className={classNames(styles.container)}>
          <div className={classNames(styles.tag)}>
            <Tag flagColor={props.tag} />
          </div>
          <input
            className={classNames(styles.input)}
            type="checkbox"
            {...props}
            checked={field.value?.includes(props.value)}
            onChange={() => onChange(form, field.value, props)}
          />
          <span className={classNames(styles.flag)}></span>
        </label>
      )}
    </Field>
  );
};

export default Checkbox;
