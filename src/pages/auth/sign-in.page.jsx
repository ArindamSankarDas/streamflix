import { useState } from "react";
import { SignInContainer, FormContainer, CustomLink } from "./sign-in.styles";

import FormInput from "../../components/form-input/form-input.component";
import AuthButton from "../../components/auth-button/auth-button.component";

const SignIn = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  return (
    <SignInContainer>
      <div>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          <FormInput
            type="email"
            name="email"
            id="email"
            labelName="Enter your Email"
            value={value.email}
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            labelName="Enter your password"
            value={value.password}
            onChange={handleChange}
          />
          <AuthButton type="submit">Sign In</AuthButton>
        </FormContainer>
        <h2>New to Netflix? <CustomLink to={"/sign-up"}>Sign up now</CustomLink></h2>
      </div>
    </SignInContainer>
  );
};

export default SignIn;
