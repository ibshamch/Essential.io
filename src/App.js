import HeaderNavigation from "./routes/header-navigation/header-navigation.component";
import "./App.scss";
import MainBody from "./Components/main-body/mainbody.component";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const navLinks = ["Product", "Resource", "Our Work"];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderNavigation navLinks={navLinks} />}>
          <Route index element={<MainBody />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
