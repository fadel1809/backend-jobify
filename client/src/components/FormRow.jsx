/* eslint-disable react/prop-types */
const FormRow = ({
  type,
  name,
  labelText,
  placeHolder,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRow;
