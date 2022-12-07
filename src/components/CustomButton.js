function CustomButton(props) {
  const { color, borderColor, onClick, txt } = props; // 구조분해할당
  const btnStyle = {
    backgroundColor: "white",
    color: color,
    fontWeight: "500",
    border: `1.5px solid ${borderColor}`,
    borderRadius: "8px",
    cursor: "pointer",
    height: "40px",
    width: "140px",
  };
  return (
    <button className="cusTomBtnStyle" style={btnStyle} onClick={onClick}>
      {txt}
    </button>
  );
}

export default CustomButton;
