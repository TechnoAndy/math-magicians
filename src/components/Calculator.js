import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0 });
  function btnClick(e) {
    setState((state) => calculate(state, e.target.innerText));
  }

  const { total, next, operation } = state;
  return (
    <div className="App">
      <div className="calc-container">
        <div className="display">
          <span />
          {' '}
          { total }
          { operation }
          { next }
        </div>

        <div className="digits">
          <button type="button" className="press-btn" onClick={btnClick}>AC</button>
          <button type="button" className="press-btn" onClick={btnClick}>+/-</button>
          <button type="button" className="press-btn" onClick={btnClick}>%</button>
          <button type="button" className="press-btn amber" onClick={btnClick}>÷</button>

          <button type="button" className="press-btn-1" onClick={btnClick}>7</button>
          <button type="button" className="press-btn-1" onClick={btnClick}>8</button>
          <button type="button" className="press-btn-1" onClick={btnClick}>9</button>
          <button type="button" className="press-btn amber" onClick={btnClick}>x</button>

          <button type="button" className="press-btn" onClick={btnClick}>4</button>
          <button type="button" className="press-btn" onClick={btnClick}>5</button>
          <button type="button" className="press-btn" onClick={btnClick}>6</button>
          <button type="button" className="press-btn amber" onClick={btnClick}>-</button>

          <button type="button" className="press-btn" onClick={btnClick}>1</button>
          <button type="button" className="press-btn" onClick={btnClick}>2</button>
          <button type="button" className="press-btn" onClick={btnClick}>3</button>
          <button type="button" className="press-btn amber" onClick={btnClick}>+</button>

          <button type="button" className="press-btn-2" onClick={btnClick}>0</button>
          <button type="button" className="press-btn" onClick={btnClick}>.</button>
          <button type="button" className="press-btn amber" onClick={btnClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
