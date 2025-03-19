import './App.css'
import Button from './components/Button/Button'
import InputText from './components/InputText/InputText'
import Logo from './components/Heading/Heading'
import Heading from './components/Heading/Heading'
import IconLink from './components/IconLink/IconLink'
import { comment, dashboard, logout, products, starAlt } from './assets/icons'
import Typography from './components/Typography/Typography'
import Stars from './components/Stars/Stars'
import Select from './components/Select/Select'
import Cart from './components/Cart/Cart'
import User from './components/User/User'
import Notification from './components/Notification/Notification'
import Product from './components/Product/Product'
import { shoes } from './assets/images'
import Tag from './components/Tag/Tag'
import Pagination from './components/Pagination/Pagination'
import Hero from './components/Hero/Hero'
import Sidebar from './layouts/Sidebar/Sidebar'

function App() {

  return (
    <main className='app'>
      {/* <InputText label="Nom" placeholder="John Doe" name="name" type="text" />
      <InputText label="Email" placeholder="john@doe.com" name="email" type="email" labelInlined/>
      <InputText label="Message" placeholder="john@doe.com" name="message" type="textarea" />
      <Button label={'Submit'} />
      <Button label={'Ajouter au panier'} customBg={'#3A4980'} isRounded/>

      <Heading label={'AJOUTER'} customColor={'#EA4637'} />
      <Heading label={'SUPPRESSION'}  />

      <IconLink path={'#'} label={'Dashboard'} icon={dashboard} isActive/>
      <IconLink path={'#'} label={'Produits'} icon={products}/>
      <IconLink path={'#'} label={'Logout'} icon={logout} isReversed/>
      <Typography text={'Hello world !'} />
      <Typography text={'This is a checked text'} isChecked />
      <Stars rate={4} number={4.5} />
      <Select label={'Select'} />
      <Cart indicator={3} />
      <User userName={'John Doe'} />
      <Notification hasNew />
      <Product image={shoes}/>
      <Tag icon={starAlt} value={'4.8'} color={'#D48D3B'} />
      <Tag icon={comment} value={'67 Reviews'} color={'#3A4980'} />
      <Pagination pages={7} activePage={1}/>
      <Hero /> */}
      <Sidebar />
    </main>
  )
}

export default App
