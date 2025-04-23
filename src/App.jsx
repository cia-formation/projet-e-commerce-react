import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignIn from './pages/SignIn/SignIn'
import EnregistrementProduit from './pages/EnregistrementProduit/EnregistrementProduit'
import ListeProduits from './pages/ListeProduits/ListeProduits'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />}/>
        <Route path='/enregistrement-produit' element={<EnregistrementProduit />}/> 
        <Route path='/liste-produits' element={<ListeProduits/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
