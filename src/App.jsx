import './App.css'
import InputText from './components/InputText/InputText'

function App() {

  return (
    <main className='app'>
      <InputText label="Nom" placeholder="John Doe" name="name" type="text" />
      <InputText label="Email" placeholder="john@doe.com" name="email" type="email" labelInlined/>
      <InputText label="Message" placeholder="john@doe.com" name="message" type="textarea" />
    </main>
  )
}

export default App
