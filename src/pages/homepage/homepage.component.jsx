import React  from 'react';
import {Redirect} from 'react-router-dom';

import '../homepage/homepage.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component';
import { connect } from 'react-redux';


const HomePage = (props) => {

    const handleClick = () => {
        if (props.currentUser) {
            props.history.push("/profile/make-report")
        }
        else {
            props.history.push( "/signin")
        }
    }

    return (
    <div className='home'>
        <div className='land-home'>
            <div className='text'>
                <h1 className='display'>
                    HI!
                    <br />
                    BREAK THE SILENCE
                </h1>

                <CustomButton noninverted children={'MAKE REPORTS >>>'}  onClick = {handleClick}></CustomButton>
                
            </div>

        </div>
        
    </div>
    )
   

}

const matchStateToProps = ({user}) => ({
    currentUser : user.currentUser
})

  export default connect(matchStateToProps)(HomePage);