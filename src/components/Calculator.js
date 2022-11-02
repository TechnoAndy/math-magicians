/* eslint-disable no-plusplus */
/* eslint-disable space-infix-ops */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
function App() {
  return (
    <div className="App">
      <div className="calc-container">
        <div className="display">
          <span></span> 0
        </div>

        <div className="digits">
          <button className="press-btn">AC</button>
          <button className="press-btn">+/-</button>
          <button className="press-btn">%</button>
          <button className="press-btn amber">÷</button>

          <button className="press-btn-1">7</button>
          <button className="press-btn-1">8</button>
          <button className="press-btn-1">9</button>
          <button className="press-btn amber">X</button>

          <button className="press-btn">4</button>
          <button className="press-btn">5</button>
          <button className="press-btn">6</button>
          <button className="press-btn amber">-</button>

          <button className="press-btn">1</button>
          <button className="press-btn">2</button>
          <button className="press-btn">3</button>
          <button className="press-btn amber">+</button>

          <button className="press-btn-2">0</button>
          <button className="press-btn">.</button>
          <button className="press-btn amber">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
