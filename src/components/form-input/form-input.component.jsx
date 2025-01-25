import { InputContainer, InputLabel } from "./form-input.styles";

const FormInput = ({ labelName, value, ...props }) => {
  return (
    <InputContainer>
      <input value={value} {...props} />
      <InputLabel isempty={value}>{labelName}</InputLabel>
    </InputContainer>
  );
};

export default FormInput;
