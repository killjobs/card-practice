import logo from './logo.svg';
import './App.css';
import CardComponent from './component/CardComponent';
import CardFormComponent from './component/CardFormComponent';
import BackCardComponent from './component/BackCardComponent';
import cardFront from './assets/images/bg-card-front.png';
import cardBack from './assets/images/bg-card-back.png';
function App() {
  const cardNumber = 1234;   
  const clientName = "Julian David";
  const datosFormulario = (formulario) =>{
    alert("funcion: "+ formulario);
  };

  return (
    <div className="App">
      <div className='App__image'>&nbsp;AAAAA</div>
      <div className='App__form'>
          <CardComponent cardNumber = {cardNumber} clientName = {clientName}/>
          <BackCardComponent/>
        <CardFormComponent actionButton = {datosFormulario}/>
      </div>
        
    </div>
  );
}

export default App;
