import "./App.css";
import Title from "./title.jsx";
import ProductTab from "./productTab.jsx";
import MsgBox from './msg.jsx';

function Description() {
  return <h3>This is description</h3>;
}

function App() {
  return (
    <>
      <MsgBox userName="Saurab" textColor="red"/> 
      <MsgBox userName="Kunwar" textColor="green"/>
      <ProductTab />
    </>
  );
}

export default App;
