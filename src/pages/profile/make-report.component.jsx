import React, { Component } from 'react';
import FormInput, { TextArea } from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { connect } from 'react-redux'
import firebase from "../../firebase/firebase.utils"


export class MakeReport extends Component{
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            phoneNumber:'',
            report:'',
            firstName:'',
            lastName:'',
            age:''
        }
    
    } 

     handleSubmit = e => {
         e.preventDefault();
        
        const {email, lastName, firstName, report,age, phoneNumber} = this.state
        console.log(this.props.currentUser)
        debugger

        const firestore = firebase.firestore();
        firestore.collection('projects').add({
        ...this.state,
        reporter: this.props.currentUser.displayName,
        createdAt: new Date()
        }).catch(err => console.log(err))
        
        
        console.log(this.state, this.props)
        
        // try {
        //     const{ user }  = await auth.createUserWithEmailAndPassword(email, password)

        //     await createUserProfileDocument(user, {displayName})
        // } catch (error) {
        //     console.log(error)
        // }

        this.setState({
            email: '',
            phoneNumber:'',
            report:'',
            firstName:'',
            lastName:'',
            age:''
        })

    }

    handleChange = e => {
       const  {value, name } = e.target;

       this.setState({[name]:value});
    }
    render() {
        const {email, lastName, firstName, report,age, phoneNumber} = this.state
        return (
            <div className="form-up">
                <h2 className='title'>
                    Report Your Case
                </h2>
                <span>
                    Please note you cant edit after submission
                </span>
                <form className='sign-up-form'  onSubmit = {this.handleSubmit}>
                    <FormInput
                    group
                    label="First Name"
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange = {this.handleChange} required />
                    <FormInput
                    group
                    label="Last Name"
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange = {this.handleChange} required />
                    <FormInput
                    group
                    label="Email Address"
                    type='email'
                    name='email'
                    value={email}
                    onChange = {this.handleChange}  />
                    <FormInput
                    group
                    label="Age"
                    type='number'
                    name='age'
                    value={age}
                    onChange = {this.handleChange}  />
                    <FormInput
                    group
                    label="Phone Number"
                    type='number'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange = {this.handleChange} required />
                    <TextArea
                    label="Report"
                    type='textarea'
                    name='report'
                    placeholder='Write your report'
                    row='6'
                    value={report}
                    onChange = {this.handleChange} required />
                    <CustomButton type='submit' children = {'SUBMIT REPORT'}  />
                </form>
            </div>
        )
    }
}

const matchStateToProps = ({user}) => ({
    currentUser : user.currentUser
})


export default connect(matchStateToProps)(MakeReport)