import "./product.css";

function product({ title, price = 50, features, features1 }) {
  // mapping the feautures in the lists
  // const list = features.map((feature) => <li>{feature}</li>);

  // making condition for discount prices
  // let isdiscount=price > 600000 ? " 5%" : null

  // using dynamic styling
  let styles = { backgroundColor: price > 600000 ? "lightgrey" : null };

  return (
    <div className="product" style={styles}>
      <h1>{title}</h1>
      <h4>price:{price}</h4>
      {price > 60000 ? <p>Discount price 5%</p> : null}
      {/* <p>{features}</p> */}
      {/* <p>{features1.a}</p> */}
      {/* <p>
        {features.map((features) => (
          <li>{features}</li>))
        }
      </p> */}
    </div>
  );
}

export default product;
