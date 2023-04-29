import { InputContainer, InputLabel } from "./form-input.styles";

const FormInput = ({ labelName, value, ...props }) => {
  return (
    <InputContainer>
      <input {...props} />
      <InputLabel isEmpty={value}>{labelName}</InputLabel>
    </InputContainer>
  );
};

export default FormInput;
