import React from "react";
import NewCounter from "./NewCounter";
import OldCounter from "./OLdCounter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default function Home() {
  return (
    <div className="px-4  py-4  md:px-8 text-xl">
      <h1>Welcome to our home</h1>
      <NewCounter name={"New Counter"}/>
      <hr className="mt-6 "/>
      <OldCounter name={"Old Counter"} />
      <hr className="mt-6 "/>
      <ClickCounter name='Click Counter' />
      <hr className="mt-6 "/>
      <HoverCounter name='Hover Counter' />
    </div>  
  );
}
