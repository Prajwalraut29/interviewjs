import React, { useState } from "react";
import "./style.css";
const Calcy = () => {
    const [input , setinput] = useState('');
        
    const calculateres = (input) =>{

        try{
        let operators=['+','-','*','/'];
        let operator = null;

        for(let i = 0; i<input.length; i++){
            if(operators.includes(input[i])){
                operator = input[i];
                break;
            }
            }
            if(!operator){
                setinput(parseFloat(input).toString())
                return;
            }
        
        const[ope1 , ope2] = input.split(operator).map(parseFloat);
        let result ;
        switch(operator){
            case '+':
                result = ope1 + ope2;
                break;
                case '-':
                result = ope1 - ope2;
                break;
                case '*':
                result = ope1 * ope2;
                break;
                case '/':
                result = ope1 / ope2;
                break;
                default:
                    throw new Error('invalid oper..')
        }
setinput(result.toString());
    }catch(error){
        setinput('error')
    }
    }

    const handlebtn =(value) =>{
        if(value === "C"){
            setinput('');
        }
        else if(value === "<"){
            setinput(input.slice(0,-1))
        }
        else if(value === "="){
           calculateres(input);
        }
        else{
            setinput((prev) => prev+=value);
        }

    }
  return (
    <div className="main">
      <h1 className="title">Calculator </h1>
      <div className="box">
       <h1 className="input"> {input}</h1>
       <hr/>
        <div>
          <button className="btn" onClick={() => handlebtn('C')}>C</button>
          <button className="btn" onClick={()=> handlebtn('<')}> &lt; </button>

          <button className="btn" onClick={()=>handlebtn('%')}>%</button>

          <button className="btn" onClick={()=>handlebtn('/')}>/</button>


          <button className="btn" onClick={()=>handlebtn('7')}>7</button>

          <button className="btn" onClick={()=>handlebtn('8')}>8</button>

          <button className="btn" onClick={()=>handlebtn('9')}>9</button>

          <button className="btn" onClick={()=>handlebtn('*')}>*</button>


          <button className="btn" onClick={()=> handlebtn('4')}>4</button>

          <button className="btn" onClick={()=>handlebtn('5')}>5</button>

          <button className="btn" onClick={()=>handlebtn('6')}>6</button>

          <button className="btn" onClick={()=>handlebtn('-')}>-</button>
          
          <button className="btn" onClick={()=>handlebtn('1')}>1</button>

          <button className="btn" onClick={()=>handlebtn('2')}>2</button>

          <button className="btn" onClick={()=>handlebtn('3')}>3</button>

          <button className="btn" onClick={()=>handlebtn("=")}>=</button>


        </div>
      </div>
    </div>
  );
};

export default Calcy;
