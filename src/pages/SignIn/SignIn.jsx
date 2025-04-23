import Button from "../../components/Button/Button"
import InputText from "../../components/InputText/InputText"
import Toolbar from "../../components/Toolbar/Toolbar"
import Heading from "../../components/Heading/Heading"
import Typography from "../../components/Typography/Typography"


import './signin.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SignIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Email : '+email)
        console.log('Mot de passe : '+password)

        navigate('/enregistrement-produit')
    }

    return (
        <div className='signin '>
            <div className="first">
                <Heading label={'MA BOUTIQUE'} />
                <Typography text={'CONNEXION'} fontWeight={600} fontSize={'22px'} color={'black'} />
                <div className="signin-form">
                    <InputText
                        label="Email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        setValue={handleEmail} />
                    <InputText
                        label="Mot de passe"
                        placeholder="Mot de passe"
                        name="password"
                        type="password"
                        setValue={handlePassword}  />
                    <Button label={'SIGN IN'} width={'415px'} handleClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default SignIn