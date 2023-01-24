import React,{useRef} from "react"; //, useContext 
import {REGULAR_EXPRESSIONS , STYLE_ERRORS} from "../common/constants";
//import { CardNumberContext } from "./CardNumberContext";

function CardFormComponent(props){
    //const [cardNumberValue, setCardNumberValue] = useContext(CardNumberContext);
    //const {actionButton} = props;
    const cardholderName = useRef(null);
    const cardNumber = useRef(null);
    const expDateMM = useRef(null);
    const expDateYY = useRef(null);
    const cvc = useRef(null);
    const dataForm = useRef(null);
    let styleError = {
        cardholderName: STYLE_ERRORS.DEFAULT_ERROR,
        cardNumber: STYLE_ERRORS.DEFAULT_ERROR,
        expDate: STYLE_ERRORS.DEFAULT_ERROR,
        cvc: STYLE_ERRORS.DEFAULT_ERROR
    }

    const validText = function(e){

        let inputValue = e.target.name;
        let textValue = e.target.value;
        let value = false;
        e.target.value = textValue.replace(/[0-9]/g, '');

        if(inputValue === "cardholderName"){
            REGULAR_EXPRESSIONS.CARDHOLDERNAME.test(e.target.value) ? value = true : value = false;
            value ? styleError.cardholderName = STYLE_ERRORS.PRESENTATION_ERROR : styleError.cardholderName = STYLE_ERRORS.DEFAULT_ERROR;
            console.log(`valor: ${styleError.cardholderName}- ${value}`)
            props.UpdateCardName(e.target.value,value);
        }
    }

    const validNumber = function(e){
        let textValue = e.target.value;
        let inputValue = e.target.name;
        let value = false;
        e.target.value = textValue.replace(/[\s\D]/g, '');

        switch (inputValue) {
            case "expDateMM":
                REGULAR_EXPRESSIONS.EXPDATEMM.test(e.target.value) ? value = true : value = false;
                props.UpdateExpDateMM(e.target.value,value);
                break;
            case "expDateYY":
                REGULAR_EXPRESSIONS.EXPDATEYY.test(e.target.value) ? value = true : value = false;
                props.UpdateExpDateYY(e.target.value,value);
                break;
            case "cvc":
                REGULAR_EXPRESSIONS.CVC.test(e.target.value) ? value = true : value = false;
                props.UpdateCvc(e.target.value,value);
                break;
            default:
                break;
        }
    }

    const validCard = function(e){
        let cardValue = e.target.value;
        let value = false;
        
        e.target.value = cardValue 
            .replace(/\s/g, '')
            .replace(/\D/g, '')
            .replace(/([0-9]{4})/g, '$1 ')
            .trim();
        
        REGULAR_EXPRESSIONS.CARDNUMBER.test(e.target.value) ? value = true : value = false;
        props.UpdateCardNumber(e.target.value,value);
    };

    const formValidation = function(e){
        e.preventDefault();
        console.log(dataForm.current);
        Object.values(dataForm.current).forEach((element,index) => {

            console.log(`Texto ${index}: ${element.value}`);
            

            
            /*console.log(element.type, " - ", element.value);
           if (element.type === 'text' && (element.value === null || element.value === "" ) ) {
            console.log(element.parentNode.children[0]);
            element.setAttribute('required', '');
            element.parentNode.children[0].setAttribute('required', '');
           }*/

        });
        
    };

    const handleSubmit = function(event){
        alert('A name was submitted: ');
        event.preventDefault();
    }

    return (
        <div className="cardForm">
            <form ref={dataForm} onSubmit={handleSubmit} >
                <span>cardholder name</span><br/>
                <input type="text" name="cardholderName" ref={cardholderName} 
                    placeholder="e.g. Jane Appleseed" 
                    onKeyUp={validText}
                    maxLength="25"
                    minLength="10"/>
                <span htmlFor ="cardholderName" className = {styleError.cardholderName}>A</span><br/>
                <span>card number</span><br/>
                <input type="text" name="cardNumber" ref={cardNumber}
                    placeholder="e.g. 1234 5678 9123 0000" 
                    maxLength="19"
                    onKeyUp={validCard}/>
                <span htmlFor ="cardNumber" className = {styleError.cardNumber}>B</span>
                <div>
                    <div>
                        <div>
                            <span>exp.date(mm/yy)</span>
                            <input type="text" name="expDateMM" ref={expDateMM} 
                                placeholder="MM" onKeyUp={validNumber}
                                maxLength="2" pattern="^0{1}[1-9]|^1+[0-2]"/><br/>
                        </div>
                        <div>
                            <input type="text" name="expDateYY" ref={expDateYY} 
                                placeholder="YY" onKeyUp={validNumber} 
                                maxLength="2"/><br/>
                        </div>
                        <span htmlFor ="expDate" className = {styleError.expDate}>D</span>
                    </div>
                     
                    <div className="cvcStyle">
                        <span>cvc</span>
                        <input type="text" name="cvc" ref={cvc} placeholder="e.g. 123" 
                            onKeyUp={validNumber} maxLength="3"/><br/>
                            <span htmlFor ="cvc" className = {styleError.cvc}>E</span>
                    </div>
                </div>
                <button>Confirm</button>
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
