const App = () => {
  const navLinks = ["Product", "Resource", "Our Work"];
  return (
    <div className="App">
      <header className="header">
        <div className="favicon">
          <div>Favicon</div>
          <h3>/hello@essential</h3>
        </div>
        <div className="navigation-list">
          {navLinks.map((link) => {
            return <div>{link}</div>;
          })}
        </div>
        <div className="header-buttons">
          <h3>FAQ</h3>
          <button className="header-btn-download">Download API</button>
          <div>Menu Bar</div>
        </div>
      </header>
    </div>
  );
};

export default App;
