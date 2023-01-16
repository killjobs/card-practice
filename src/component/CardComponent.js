import React from "react";

function CardComponent(props){
    const cardNumber = <span>numero de tarjeta: {props.cardNumber}</span>;
    const clientName = <span>cliente: {props.clientName}</span>;
    return(
        <div className="cardFront dimension--tarjeta">
            <div>
                
            </div>
            <div>
                <span>0000 0000 0000 0000</span><br/>
                <span>jaime applessed</span><span>00/00</span>
            </div>
        </div>
    );
} 
export default CardComponent;