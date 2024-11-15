import './App.css';
import Item from './component/Item';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <div className="App">
        <Item name="Macbook" price={123400} />
        <Item name="Pendrive" price={400} />
        <Item name="Mobile" price={3400} />
        <div className="totalcart">
        <Cart/>
        </div>
      </div>
    </>
  );
}

export default App;
