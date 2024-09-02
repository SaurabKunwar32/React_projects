export default function price({ oldPrice, newPrice }) {
  let oldStyle = {
    textDecorationLine: "line-through",
  };

  let newStyle = { fontWeight: "bold" };

  let styles={
    backgroundColor:"gold",
    borderBottomLeftRadius:"14px",
    borderBottomRightRadius:"14px",
    height:"30px",
    position:"absolute",
    bottom:"0",
    width:"100%"
  }

  return (
    <div style={styles}>
      <span style={oldStyle}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  );
}
