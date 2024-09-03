import "./App.css";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Moreinformation from "./Moreinformation"
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/products/:id" element={<Moreinformation />}></Route>
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
