import { products } from "../../assets/icons"
import Button from "../../components/Button/Button"
import InputText from "../../components/InputText/InputText"
import Toolbar from "../../components/Toolbar/Toolbar"
import Typography from "../../components/Typography/Typography"
import Sidebar from "../../layouts/Sidebar/Sidebar"



import '/listeproduits.css'

const ListeProduits = () => {
    return (

        <main className="listeproduits">
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