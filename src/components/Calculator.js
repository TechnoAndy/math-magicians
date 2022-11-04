import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calc() {
  const [state, setState] = useState({ total: 0 });
  function clkBtn(e) {
    setState((state) => calculate(state, e.target.innerText));
  }

  const { total, next, operation } = state;
  return (
    <div className="App">
      <div className="ccontainer">
        <div className="display">
          <span />
          {' '}
          { total }
          { operation }
          { next }
        </div>

        <div className="digits">
          <button type="button" className="press-btn" onClick={clkBtn}>AC</button>
          <button type="button" className="press-btn" onClick={clkBtn}>+/-</button>
          <button type="button" className="press-btn" onClick={clkBtn}>%</button>
          
          <button type="button" className="press-btn amber" onClick={clkBtn}>÷</button>

          <button type="button" className="press-btn-1" onClick={clkBtn}>7</button>
          <button type="button" className="press-btn-1" onClick={clkBtn}>8</button>
          <button type="button" className="press-btn-1" onClick={clkBtn}>9</button>
          
          <button type="button" className="press-btn amber" onClick={clkBtn}>x</button>

          <button type="button" className="press-btn" onClick={clkBtn}>4</button>
          <button type="button" className="press-btn" onClick={clkBtn}>5</button>
          <button type="button" className="press-btn" onClick={clkBtn}>6</button>
          
          <button type="button" className="press-btn amber" onClick={clkBtn}>-</button>

          <button type="button" className="press-btn" onClick={clkBtn}>1</button>
          <button type="button" className="press-btn" onClick={clkBtn}>2</button>
          <button type="button" className="press-btn" onClick={clkBtn}>3</button>
          
          <button type="button" className="press-btn amber" onClick={clkBtn}>+</button>

          <button type="button" className="press-btn-2" onClick={clkBtn}>0</button>
          <button type="button" className="press-btn" onClick={clkBtn}>.</button>
          
          <button type="button" className="press-btn amber" onClick={clkBtn}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
