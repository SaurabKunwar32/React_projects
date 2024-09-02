import Box from "./box.jsx";


function boxTab() {
  let styles={
      display: "flex",
      flexWrap: "wrap",
      justfyContent:"center",
      alignItems:"center"
  };


  return (
    <div className="stylediv" style={styles}>
      <Box title="MackBook" idx={0} />
      <Box title="Acer Laptop" idx={1} />
      <Box title="Lenovo Laptop" idx={2} />
      <Box title="Personal PC" idx={3} />
    </div>
  );
}

export default boxTab;
