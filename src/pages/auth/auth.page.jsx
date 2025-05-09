import { useState } from "react";

import { createUser, logIn } from "../../firebase/firebase.utils";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.email || !formState.password) {
      alert("fill the inputs");
    } else {
      logIn(formState.email, formState.password);

      setFormState({
        email: "",
        password: "",
      });
    }
  };

  return (
    <AuthContainer>
      <div>
        <FormContainer onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <FormInput
            type='email'
            name='email'
            id='email'
            labelName='Enter your Email'
            value={formState.email}
            onChange={handleChange}
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            labelName='Enter your password'
            value={formState.password}
            onChange={handleChange}
          />
          <AuthButton type='submit'>Sign In</AuthButton>
        </FormContainer>
        <h2>
          New to Netflix? <CustomLink to={"/sign-up"}>Sign up now</CustomLink>
        </h2>
      </div>
    </AuthContainer>
  );
};

export const SignUp = () => {
  const [formState, setFormState] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formState.email ||
      !formState.password ||
      !formState["re-enter-pass"]
    ) {
      alert("fill the inputs");
    } else if (formState.password !== formState["re-enter-pass"]) {
      alert("passwords don't match");
    } else {
      createUser(formState.email, formState.password);

      setFormState({
        email: "",
        password: "",
        "re-enter-pass": "",
      });
    }
  };

  return (
    <AuthContainer>
      <div>
        <FormContainer onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <FormInput
            type='email'
            name='email'
            id='email'
            labelName='Enter your Email'
            value={formState.email}
            onChange={handleChange}
          />
          <FormInput
            type='password'
            name='re-enter-pass'
            id='re-enter-pass'
            labelName='Enter your password'
            value={formState["re-enter-pass"]}
            onChange={handleChange}
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            labelName='Re-enter your password'
            value={formState.password}
            onChange={handleChange}
          />
          <AuthButton type='submit'>Sign Up</AuthButton>
        </FormContainer>
        <h2>
          Already a member? <CustomLink to={"/sign-in"}>Sign in</CustomLink>
        </h2>
      </div>
    </AuthContainer>
  );
};
