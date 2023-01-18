import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "larger",
          color: "red",
        }}
      >
        Page not found
      </p>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          color: "blue",
          marginTop: "10px",
        }}
        to="/"
      >
        Return to the homepage
      </Link>
    </div>
  );
};

export default Page404;
