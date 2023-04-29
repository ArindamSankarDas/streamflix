import { AuthButtonContainer } from "./auth-button.styles";

const AuthButton = ({ children, ...props }) => {
  return <AuthButtonContainer {...props}>{children}</AuthButtonContainer>;
};

export default AuthButton;
