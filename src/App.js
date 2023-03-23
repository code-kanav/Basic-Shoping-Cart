import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart/Cart';
import { useState , useEffect} from 'react';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=12`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => setData(actualData.products))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product?.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product?.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product?.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product?.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={data} onAdd={onAdd}></Main>
        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
