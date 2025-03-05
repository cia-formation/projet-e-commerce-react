import './App.css'
import Button from './components/Button/Button'
import InputText from './components/InputText/InputText'
import Logo from './components/Heading/Heading'
import Heading from './components/Heading/Heading'
import IconLink from './components/IconLink/IconLink'
import { dashboard, logout, products } from './assets/icons'

function App() {

  return (
    <main className='app'>
      <InputText label="Nom" placeholder="John Doe" name="name" type="text" />
      <InputText label="Email" placeholder="john@doe.com" name="email" type="email" labelInlined/>
      <InputText label="Message" placeholder="john@doe.com" name="message" type="textarea" />
      <Button label={'Submit'} />
      <Button label={'Ajouter au panier'} customBg={'#3A4980'} isRounded/>
      <Heading label={'SUPPRESSION'} customColor={'#EA4637'} />
      <Heading label={'SUPPRESSION'}  />
      <IconLink path={'#'} label={'Dashboard'} icon={dashboard} isActive/>
      <IconLink path={'#'} label={'Produits'} icon={products}/>
      <IconLink path={'#'} label={'Logout'} icon={logout} isReversed/>
    </main>
  )
}

export default App
