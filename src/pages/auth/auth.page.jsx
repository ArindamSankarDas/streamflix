import { useState } from "react";
import { AuthContainer, FormContainer, CustomLink } from "./auth.styles";

import FormInput from "../../components/form-input/form-input.component";
import AuthButton from "../../components/auth-button/auth-button.component";

export const SignIn = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  return (
    <AuthContainer>
      <div>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          <FormInput
            type="email"
            name="email"
            id="email"
            labelName="Enter your Email"
            value={formState.email}
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            labelName="Enter your password"
            value={formState.password}
            onChange={handleChange}
          />
          <AuthButton type="submit">Sign In</AuthButton>
        </FormContainer>
        <h2>
          New to Netflix? <CustomLink to={"/sign-up"}>Sign up now</CustomLink>
        </h2>
      </div>
    </AuthContainer>
  );
};

export const SignUp = () => {
  const [fromState, setFormState] = useState({
    email: "",
    password: "",
    "re-enter-pass": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <AuthContainer>
      <div>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
          <h1>Sign Up</h1>
          <FormInput
            type="email"
            name="email"
            id="email"
            labelName="Enter your Email"
            value={fromState.email}
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="re-enter-pass"
            id="re-enter-pass"
            labelName="Enter your password"
            value={fromState["re-enter-pass"]}
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            labelName="Re-enter your password"
            value={fromState.password}
            onChange={handleChange}
          />
          <AuthButton type="submit">Sign Up</AuthButton>
        </FormContainer>
        <h2>
          Already a member? <CustomLink to={"/sign-in"}>Sign in</CustomLink>
        </h2>
      </div>
    </AuthContainer>
  );
};
