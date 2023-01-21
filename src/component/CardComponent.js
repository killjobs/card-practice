import React from "react";

function CardComponent(props){
    /*const cardNumber = <span>numero de tarjeta: {props.cardNumberValue}</span>;
    const clientName = <span>cliente: {props.clientName}</span>;*/
    return(
        <div className="cardFront dimension--tarjeta">
            <div>
                
            </div>
            <div>
                <span>{props.cardNumber.cardNumber}</span><br/>
                <span>{props.clientName.clientName}</span><span>{props.dateYY.dateYY}/{props.dateMM.dateMM}</span>
            </div>
        </div>
    );
} 
export default CardComponent;