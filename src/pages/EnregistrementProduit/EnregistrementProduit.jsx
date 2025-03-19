import Button from "../../components/Button/Button"
import InputText from "../../components/InputText/InputText"
import Toolbar from "../../components/Toolbar/Toolbar"
import Typography from "../../components/Typography/Typography"
import Sidebar from "../../layouts/Sidebar/Sidebar"

import './enregistrement_produit.css'

const EnregistrementProduit = () => {
    return (
        <main className="enregistrement-produit">
            <Sidebar />
            <form className="content">
                <Toolbar />
                <section>
                    <Typography text={'Enregistrement d’un produit'} fontWeight={700} fontSize={'22px'} color={'black'} textAlign={'start'} />
                    <div className="names">
                        <InputText label="Nom" placeholder="Nom du produit" name="productName" type="text" />
                        <InputText label="Categorie" placeholder="Categorie" name="cotegory" type="text" />
                    </div>
                    <div className="prices">
                        <InputText label="Prix" placeholder="125 750" name="price" type="number" />
                        <InputText label="Prix promo" placeholder="118 000" name="promoPrice" type="number" />
                    </div>
                    <div className="stats">
                        <div className="numbers">
                            <InputText label="Nombre de notes" placeholder="22" name="notes" type="number" />
                            <InputText label="Moyenne sur 5" placeholder="4" name="average" type="number" />
                        </div>
                        <InputText label="Quantite en stock" placeholder="120" name="quantity" type="number" />
                    </div>
                    <InputText label="Description courte" placeholder="Description courte du produit" name="shortDescription" type="text" />
                    <InputText label="Photo" placeholder="photo/du/produit.jpg" name="image" type="file" />
                    <InputText label="Description" placeholder="Description longue du produit pouvant tenir sur plusieurs lignes" name="description" type="textarea" />
                    <Button label={'Enregistrer'} width={'305px'} margin={'auto'} />
                </section>
            </form>
        </main>
    )
}

export default EnregistrementProduit