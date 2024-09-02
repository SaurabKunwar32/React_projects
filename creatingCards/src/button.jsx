// handling the click and non click  events in the react 

// it is for the click events like button
function doSomething(){
    console.log("Wass up riri!!");
}


// it is for the non-click events like paragraph
function mouseHover(){
    console.log("MOuse hover !!");
}


export default function Button() {
    let styles={
        marginTop:"2rem",
    }
  return (
    <div>
      <button onClick={doSomething} style={styles}>Click me</button>
      <p onMouseOver={mouseHover}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iste amet odio, earum necessitatibus soluta molestias, quaerat obcaecati voluptate itaque, explicabo illo distinctio ea rem deleniti ducimus impedit? Atque, nulla.</p>
    </div>
  );
}
