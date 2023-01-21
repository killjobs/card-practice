import React,{ useRef, useContext,useState } from "react";
import { CardNumberContext } from "./CardNumberContext";

function CardFormComponent(props){
    //const [cardNumberValue, setCardNumberValue] = useContext(CardNumberContext);
    //const {actionButton} = props;
    const cardholderName = useRef(null);
    const cardNumber = useRef(null);
    const expDateMM = useRef(null);
    const expDateYY = useRef(null);
    const cvc = useRef(null);
    const dataForm = useRef(null);
    const createCard = function(){
        console.log("datos formulario: "+ dataForm);        
    }

    const validText = function(e){
        let inputValue = e.target.name;
        let textValue = e.nativeEvent.target.value;
        e.nativeEvent.target.value = textValue.replace(/[0-9]/g, '');

        if(inputValue=="cardholderName"){
            props.UpdateCardNumber(e.nativeEvent.target.value);
        }
    }

    const validNumber = function(e){
        let textValue = e.nativeEvent.target.value;
        let inputValue = e.target.name;
        e.nativeEvent.target.value = textValue.replace(/[\s\D]/g, '');

        switch (inputValue) {
            case "expDateMM":
                props.UpdateExpDateMM(e.nativeEvent.target.value);
                break;
            case "expDateYY":
                props.UpdateExpDateYY(e.nativeEvent.target.value);
                break;
            case "cvc":
                props.UpdateCvc(e.nativeEvent.target.value);
                break;
            default:
                break;
        }
    }

    const validCard = function(e){
        let cardValue = e.nativeEvent.target.value;
        e.nativeEvent.target.value = cardValue 
            .replace(/\s/g, '')
            .replace(/\D/g, '')
            .replace(/([0-9]{4})/g, '$1 ')
            .trim();

        props.UpdateCardNumber(e.nativeEvent.target.value);
    };

    const formValidation = function(e){
        e.preventDefault();
        console.log(dataForm);
        Object.values(dataForm.current).forEach((element) => {

            console.log("Texto: " + element.value + " - " + element.validity.valid);
            

            
            console.log(element.type, " - ", element.value);
           if (element.type === 'text' && (element.value === null || element.value === "" ) ) {
            console.log(element.parentNode.children[0]);
            element.setAttribute('required', '');
            element.parentNode.children[0].setAttribute('required', '');
           }

        });
        
    };

    return (
        <div className="cardForm">
            <form ref={dataForm} onSubmit={formValidation} >
                <span>cardholder name</span><br/>
                <input type="text" name="cardholderName" ref={cardholderName} 
                    placeholder="e.g. Jane Appleseed" 
                    onKeyUp={validText}
                    maxLength="25"
                    minLength="10"/>
                <span htmlFor ="cardholderName">A</span><br/>
                <span>card number</span><br/>
                <input type="text" name="cardNumber" ref={cardNumber}
                    placeholder="e.g. 1234 5678 9123 0000" 
                    maxLength="19"
                    onKeyUp={validCard}/>
                <span htmlFor ="cardNumber">B</span>
                <div>
                    <div>
                        <div>
                            <span>exp.date(mm/yy)</span>
                            <input type="text" name="expDateMM" ref={expDateMM} 
                                placeholder="MM" onKeyUp={validNumber}
                                maxLength="2" pattern="^0{1}[1-9]|^1+[0-2]"/><br/>
                            <span htmlFor ="expDateMM">C</span>
                        </div>
                        <div>
                            <input type="text" name="expDateYY" ref={expDateYY} 
                                placeholder="YY" onKeyUp={validNumber} 
                                maxLength="2"/><br/>
                            <span htmlFor ="expDateYY">D</span>
                        </div>
                    </div>
                     
                    <div className="cvcStyle">
                        <span>cvc</span>
                        <input type="text" name="cvc" ref={cvc} placeholder="e.g. 123" 
                            onKeyUp={validNumber} maxLength="3"/><br/>
                        <span htmlFor ="cvc">E</span>
                    </div>
                </div>
                <button onSubmit={createCard}>Confirm</button>
                {
                /**
                     <button onClick= { () => actionButton(`
                        cardholderName = ${cardholderName.current.value}
                        cardNumber = ${cardNumber.current.value}
                        expDate = ${expDateMM.current.value} ${expDateYY.current.value}
                        cvc = ${cvc.current.value}`)}>Confirm</button>
                */}
            </form>
        </div>
    );
} 

export default CardFormComponent;
