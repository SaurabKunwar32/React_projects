// we are creating this  file to combine the multiple peoduct files and
// return them in a single component.

import Product from "./product.jsx";

function productTab() {
  let object = ["fast", "durable", "good"];

  // rendering arrays...................
  // let object = [<li>"fast"</li>, <li>"durable"</li> , <li>"good"</li>];
  // let passarray=["fast", "durable", "good"];


  // another way to pass the array
  // let object1 = { a: "fast", b: "slow", c: "durable" };


  return (
    <>
      <Product
        title="Mobile"
        price={50000}
        features={object}
        // features1={object1}
      />
      <Product title="laptop" price="780000" />
      <Product title="copy" />
    </>
  );
}

export default productTab;
