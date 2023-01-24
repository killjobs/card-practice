import React, {useState} from 'react'; //useContext
//import logo from './logo.svg';
import './App.css';
import CardComponent from './component/CardComponent';
import CardFormComponent from './component/CardFormComponent';
import BackCardComponent from './component/BackCardComponent';
import CardNumberProvider from './component/CardNumberContext'; //{CardNumberContext}
import { DEFAULT_VALUES } from './common/constants';
function App() {

  //const [cardNumberValue, setCardNumberValue] = useContext(CardNumberContext);
  const [cardNumberValue, setCardNumberValue] = useState({cardNumber:DEFAULT_VALUES.dafaultCardNumber, valido:null});
  const [clientNameValue, setClientNameValue] = useState({clientName:DEFAULT_VALUES.defaultCardName, valido:null});
  const [expDateYYValue, setExpDateYYValue] = useState({dateYY:DEFAULT_VALUES.defaultDateYY, valido:null});
  const [expDateMMValue,setExpDateMMValue] = useState({dateMM:DEFAULT_VALUES.defaultDateMM, valido:null});
  const [cvcValue,setCvcValue] = useState({cvc:DEFAULT_VALUES.defaultCvc, valido:null});
  
  const UpdateClientNameValue = (_field,_expression) =>{
    _field.length === 0 ? setClientNameValue({clientName:DEFAULT_VALUES.defaultCardName, valido:null}) : setClientNameValue({clientName:_field,valido:_expression});

  }
  
  const datosFormulario = (formulario) =>{
    alert("funcion: "+ formulario);
  };

  const UpdateCardNumberValue = (_field,_expression) =>{
    _field.length === 0 ? setCardNumberValue({cardNumber:DEFAULT_VALUES.dafaultCardNumber, valido:null}) : setCardNumberValue({cardNumber:_field,valido:_expression});
  }

  const UpdateExpDateYYValue = (_field,_expression) =>{
    _field.length === 0 ? setExpDateYYValue({dateYY:DEFAULT_VALUES.defaultDateYY, valido:null}) : setExpDateYYValue({dateYY:_field,valido:_expression});
  }

  const UpdateExpDateMMValue = (_field,_expression) =>{
    _field.length === 0 ? setExpDateMMValue({dateMM:DEFAULT_VALUES.defaultDateMM, valido:null}) : setExpDateMMValue({dateMM:_field,valido:_expression});
  }

  const UpdateCvcValue = (_field,_expression) =>{
    _field.length === 0 ? setCvcValue({cvc:DEFAULT_VALUES.defaultCvc, valido:null}) : setCvcValue({cvc:_field,valido:_expression});
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
