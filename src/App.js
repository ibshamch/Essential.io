import Header from "./Components/header/header.component";
import "./App.scss";
const App = () => {
  const navLinks = ["Product", "Resource", "Our Work"];
  return (
    <div className="App">
      <Header navLinks={navLinks} />
    </div>
  );
};

export default App;
