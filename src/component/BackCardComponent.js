import React from "react";

const BackCardComponent = (props) =>
    <div className="cardBack dimension--tarjeta">
        <div className="lectora"></div>
        <div className="cvc-container">
            <span>{props.cvc.cvc}</span>
        </div>
        <div className="linea-adicional">
            ______ __ __ _<br/>
              __ ____ __ _<br/>
            _ __ _ _______<br/>
        </div>
    </div>;

export default BackCardComponent;