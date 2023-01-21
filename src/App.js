import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './component/CardComponent';
import CardFormComponent from './component/CardFormComponent';
import BackCardComponent from './component/BackCardComponent';
import cardFront from './assets/images/bg-card-front.png';
import CardNumberProvider,{CardNumberContext} from './component/CardNumberContext';

function App() {
  const defaultCardName = "0000 0000 0000 0000";
  const dafaultCardNumber = "jaime applessed";
  const defaultDateYY = "YY";
  const defaultDateMM = "MM";
  const defaultCvc = "000";
  //const [cardNumberValue, setCardNumberValue] = useContext(CardNumberContext);
  const [cardNumberValue, setCardNumberValue] = useState({cardNumber:dafaultCardNumber});
  const [clientNameValue, setClientNameValue] = useState({clientName:defaultCardName});
  const [expDateYYValue, setExpDateYYValue] = useState({dateYY:defaultDateYY});
  const [expDateMMValue,setExpDateMMValue] = useState({dateMM:defaultDateMM});
  const [cvcValue,setCvcValue] = useState({cvc:defaultCvc});
  const datosFormulario = (formulario) =>{
    alert("funcion: "+ formulario);
  };
  
  const UpdateClientNameValue = (e) =>{
    e.length == 0 ? setClientNameValue({clientName:defaultCardName}) : setClientNameValue({clientName:e});
  }

  const UpdateCardNumberValue = (e) =>{
    e.length == 0 ? setCardNumberValue({cardNumber:dafaultCardNumber}) : setCardNumberValue({cardNumber:e});
  }

  const UpdateExpDateYYValue = (e) =>{
    e.length == 0 ? setExpDateYYValue({dateYY:defaultDateYY}) : setExpDateYYValue({dateYY:e});
  }

  const UpdateExpDateMMValue = (e) =>{
    e.length == 0 ? setExpDateMMValue({dateMM:defaultDateMM}) : setExpDateMMValue({dateMM:e});
  }

  const UpdateCvcValue = (e) =>{
    e.length == 0 ? setCvcValue({cvc:defaultCvc}) : setCvcValue({cvc:e});
  }

  return (
    <CardNumberProvider>
      <div className="App">
        <div className='App__image'>&nbsp;AAAAA</div>
        <div className='App__form'>
          <CardComponent 
            cardNumber = {cardNumberValue}
            clientName = {clientNameValue}
            dateYY = {expDateYYValue}
            dateMM = {expDateMMValue}/>
          <BackCardComponent
            cvc = {cvcValue}/>
          <CardFormComponent 
            cardNumber = {cardNumberValue} 
            UpdateCardNumber = {UpdateCardNumberValue} 
            UpdateCardName = {UpdateClientNameValue}
            UpdateExpDateYY = {UpdateExpDateYYValue}
            UpdateExpDateMM = {UpdateExpDateMMValue} 
            UpdateCvc = {UpdateCvcValue}
            actionButton = {datosFormulario}/>
        </div>              
      </div>
    </CardNumberProvider>
  );
}

export default App;
