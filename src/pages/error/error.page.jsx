import { useRouteError } from "react-router-dom";
import { ErrorContainer } from "./error.styles";

function ErrorPage() {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <h1>Oops! {error.status}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.error.message}</i>
      </p>
    </ErrorContainer>
  );
}

export default ErrorPage;
