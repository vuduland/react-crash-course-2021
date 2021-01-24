import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  //   const onClick = (e) => {
  //pass in event object and log it when clicked
  //console.log(e);
  //or just log 'click' when clicked
  //console.log("click");
  //   };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// falls back to these defaults if not specified inline when invoked

Button.defaultProps = {
  color: "steelblue ",
  text: "Add",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
