import React, { useState } from "react";
import './cal.css'

function Cal() {
    const [value,setvalue]=useState('');
    function appendToDisplay(ope){
       
        console.log(ope);
        


       

        if(ope=="/" || ope=="*"){
            return setvalue(value+ope)
        }if(ope){
            return setvalue(value+ope)

        }
    }
    function clearDisplay(){
        setvalue(0);
    }
    function calculateResult(){
        let v=value.charAt(value.length - 1);;
        console.log(v);
       
        if(v=="/" || v=="*" || v=="%" || v=="." || v=="-" || v=="+"){
            return alert("not allowed last index element should not be operator ?? TRY AGAIN");
            
        }else{
            return setvalue(eval(value))
        }

        
    }
  return (
    <div className="calculator">
       
      <div className="display" id="display">
        
        <input type="text" placeholder="0" value={value}  style={{}} />
      </div>
      
      <div className="buttons">
        <button className="btn" onClick={() => clearDisplay()}>
          C
        </button>
        <button className="btn" onClick={() => appendToDisplay("/")}>
          /
        </button>
        <button className="btn" onClick={() => appendToDisplay("*")}>
          *
        </button>
        <button className="btn" onClick={() => appendToDisplay("-")}>
          -
        </button>
        <button className="btn" onClick={() => appendToDisplay("7")}>
          7
        </button>
        <button className="btn" onClick={() => appendToDisplay("8")}>
          8
        </button>
        <button className="btn" onClick={() => appendToDisplay("9")}>
          9
        </button>
        <button className="btn" onClick={() => appendToDisplay("+")}>
          +
        </button>
        <button className="btn" onClick={() => appendToDisplay("4")}>
          4
        </button>
        <button className="btn" onClick={() => appendToDisplay("5")}>
          5
        </button>
        <button className="btn" onClick={() => appendToDisplay("6")}>
          6
        </button>
        <button className="btn" onClick={() => appendToDisplay("1")}>
          1
        </button>
        <button className="btn" onClick={() => appendToDisplay("2")}>
          2
        </button>
        <button className="btn" onClick={() => appendToDisplay("3")}>
          3
        </button>
        <button className="btn" onClick={() => calculateResult()}>
          =
        </button>
        <button className="btn" onClick={() => appendToDisplay("0")}>
          0
        </button>
        <button className="btn" onClick={() => appendToDisplay(".")}>
          .
        </button>
      </div>
    </div>
  );
}

export default Cal;
