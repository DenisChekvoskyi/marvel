import error from "./error.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{ display: "block", margin: "0 auto" }}
      src={error}
      alt="error"
      className="randomchar__imgError"
    />
  );
};

export default ErrorMessage;
