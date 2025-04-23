import { cart, products } from "../../assets/icons"
import Button from "../../components/Button/Button"
import InputText from "../../components/InputText/InputText"
import Toolbar from "../../components/Toolbar/Toolbar"
import Typography from "../../components/Typography/Typography"
import Sidebar from "../../layouts/Sidebar/Sidebar"



import './liste_produits.css'

const ListeProduits = () => {
    const products = [
        {
            id: 1,
            photo: cart,
            name: 'Produit 1',
            category: 'Categorie 1',
            price: '20 000 FCFA',
            stockQuantity: 20,
            dateAdded: '19/03/2025'
        },
        {
            id: 2,
            photo: cart,
            name: 'Produit 2',
            category: 'Categorie 2',
            price: '20 000 FCFA',
            stockQuantity: 20,
            dateAdded: '29/03/2025'
        },
        {
            id: 3,
            photo: cart,
            name: 'Produit 3',
            category: 'Categorie 3',
            price: '20 000 FCFA',
            stockQuantity: 20,
            dateAdded: '19/03/2025'
        }
    ]
    return (

        <main className="liste-produits">
            <Sidebar />
            <form className="content">
                <Toolbar />
                <section>
                    <Typography text={'Liste des produits'} fontWeight={700} fontSize={'22px'} color={'black'} textAlign={'start'} />

                    <table>
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock Quantity</th>
                                <th>Date added</th>
                            </tr>
                        </thead>
                        <tbody>


                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>
                                        <img src={product.photo} alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stockQuantity}</td>
                                    <td>{product.dateAdded}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button label={'Ajouter un produit'} width={'auto'} isRounded customBg={'#3A4980'} margin={'auto'} />
                </section>
            </form>
        </main>
    )
}

export default ListeProduits