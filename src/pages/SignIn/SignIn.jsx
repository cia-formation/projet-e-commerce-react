import Button from "../../components/Button/Button"
import InputText from "../../components/InputText/InputText"
import Toolbar from "../../components/Toolbar/Toolbar"
import Heading from "../../components/Heading/Heading"
import Typography from "../../components/Typography/Typography"


import './signin.css'

const SignIn = () => {
    return (
        <div className='signin '>

          
            <div className="first">
                <Heading label={'MA BOUTIQUE'} />
                <Typography text={'CONNEXION'} fontWeight={600} fontSize={'22px'} color={'black'} />
                <div className="signin-form">
                    <InputText label="Email" placeholder="Email" name="email" type="email" />
                    <InputText label="Mot de passe" placeholder="Mot de passe" name="password" type="password" />
                    <Button label={'SIGN IN'} width={'415px'} />
                </div>
            </div>


        </div>
    )
}

export default SignIn