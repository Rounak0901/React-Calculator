import react from "react";
import "./Button.css";

const isOperator = val => {
    return !isNaN(val) || val === '.' || val ==='=';
};

const Button = props => (
    <div 
        className = { (isOperator(props.children)==false ? "button-wrapper operator":"button-wrapper") }
        onClick = {()=> props.handleClick(props.children)} 
    >
        {props.children}
    </div>
    
)
export default Button;
