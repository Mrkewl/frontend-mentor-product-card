import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="featurephoto"></div>
        <div className="description-box">
          <div className="description-box--header1">Perfume</div>
          <div className="description-box--header2">
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="description-box--paragraph">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          
          </div>
          <div className="description-box--price">
            <div className="description-box--price-1">$149.99</div>
            <div className="description-box--price-2"> $169.99</div>
          </div>
          <div className="description-box--button">
            <button>
            <img class="cart" src="icon-cart.svg" alt=""/>
              <p>Add to Cart</p> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
