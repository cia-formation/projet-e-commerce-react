import { dashboard, logout, products, save, update } from "../../assets/icons"
import { shop } from "../../assets/images"
import Heading from "../../components/Heading/Heading"
import IconLink from "../../components/IconLink/IconLink"
import Typography from "../../components/Typography/Typography"
import "./sidebar.css"

const Sidebar = () => {

    return (
        <div className="sidebar">
            <aside>
            <Heading label={'MA BOUTIQUE'} />
                <div className="profile">
                    <img src={shop} alt="Shop" />
                    <Typography text={'Welcome'} fontWeight={700} fontSize={'17px'} color={'black'} />
                    <Typography text={'admin@email.com'} fontWeight={500} fontSize={'14px'} color={'#FEAF00'} />
                </div>

                <div className="links">
                    <IconLink path={'#'} label={'Produits'} icon={dashboard} isActive />
                    <IconLink path={'#'} label={'Liste des produits'} icon={products} />
                    <IconLink path={'#'} label={'Enregistrer'} icon={save} />
                    <IconLink path={'#'} label={'Mettre a jour'} icon={update} />
                </div>

            </aside>
            <IconLink path={'#'} label={'Logout'} icon={logout} isReversed />
        </div>
    )
}

export default Sidebar