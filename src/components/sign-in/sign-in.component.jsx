import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle,auth } from '../../firebase/firebase.utils';
import Axios from 'axios';


export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password} = this.state;

        Axios.post("https://retrack-api.herokuapp.com/api/user/login", {
            password:password,
            email:email,
        })
        .then(response => {
            console.log("res from signin", response)
        }).catch(
            error => {
                console.log("error from signin", error)
            }
        )

        try {
            const {email, password} = this.state

    

            await auth.signInWithEmailAndPassword(email,password)
            
        } catch (error) {
        }



        this.setState({email:'', password:''})
    
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({[name]: value})
    }


    



    render() {
        const {email, password} = this.state
       return (
            <div className='sign-in'>

            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit = {this.handleSubmit} >
            
             
                    
                <FormInput type="email" name="email" handleChange={this.handleChange} value={ email } label='email'/>
                <FormInput type="password" name="password" handleChange={this.handleChange} value={ password } label='password'/>
                <div className="button">
                    <CustomButton type="Submit" children={'SIGN IN'}/>
                    
                    <CustomButton onClick ={signInWithGoogle} children={'SIGN IN WITH GOOGLE'} isGoogleSignin />

                </div>
                
            </form>

            </div>
       ) 
    }
}