import React, { Component } from 'react';



export class UpdateProfile extends Component {

    componentDidMount() {
        const {currentUser} = this.props
    }

    


}

const matchStateToProps = ({user}) => ({
    currentUser : user.currentUser
  })