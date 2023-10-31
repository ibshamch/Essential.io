import HeaderNavigation from "./routes/header-navigation/header-navigation.component";
import "./App.scss";
import MainBody from "./Components/main-body/mainbody.component";
import { Route, Routes } from "react-router-dom";
import Product from "./routes/products/product.component";
const App = () => {
  const navLinks = [
    { name: "Product", link: "/product" },
    { name: "Resources", link: "/resources" },
    { name: "Our Work", link: "/work" },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderNavigation navLinks={navLinks} />}>
          <Route index element={<MainBody />} />
        </Route>
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
