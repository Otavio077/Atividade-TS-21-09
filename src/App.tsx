import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {

  return (
    <>
      <p>
        Formulario
      </p>
      <hr></hr>
      <InputFatec label='Nome'></InputFatec>
      <br></br>
      <InputFatec label='Email'></InputFatec>
      <br></br>
      <InputFatec label='Telefone'></InputFatec>
      <br></br><hr></hr>
      <ButtonFatec type='submit' label='Enviar Form'></ButtonFatec>
    </>
  )
}

export default App
