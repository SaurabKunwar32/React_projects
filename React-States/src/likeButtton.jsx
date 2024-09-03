import { useState } from "react";

export default function like() {
  let [isliked, setIsliked] = useState(false);  //initilization

  let [iscount, setIscount] = useState(0);
  // console.log(`new count= ${iscount}`);

  let toggleLike = () => {
    // console.log(`old count=${iscount}`);
    setIsliked(!isliked);
    setIscount(iscount + 1);


    // setIscount((currCount)=>{   //callback update n=in function that works syncronously
    //    return currCount+2;
    // })
    
  };

  let fontsize ={
    fontSize:"2rem"
  }
  let likeColor = {
    color: "red",
  };

  return (
    <div>
      <h2>Count like = {iscount}</h2>
      <p onClick={toggleLike} style={fontsize}>
        {isliked ? (
          <i className="fa-solid fa-heart" style={likeColor}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
