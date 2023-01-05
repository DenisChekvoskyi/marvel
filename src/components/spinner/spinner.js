import spinner from "./Fidget-spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Hourglas"
      className="randomchar__imgLoadeg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "centere",
      }}
    />
  );
};

export default Spinner;
