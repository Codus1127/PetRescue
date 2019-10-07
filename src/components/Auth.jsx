import React, { Component } from 'react'
import axios from 'axios'
import {updateUser} from '../ducks/reducer'
import {connect} from 'react-redux'
import swal from 'sweetalert2'

class Auth extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    login = async () => {
        const {password, email} = this.state
        const res = await axios.post('/auth/login', {email, password})
        if (res.data.user) {
            this.props.updateUser(res.data.user)
        } swal.fire(res.data.message)
        
    }

    logout = async () => {
        const res = await axios.delete('/auth/logout')
        this.props.updateUser(null)
        swal.fire(res.data.message)
    }

    render() {
        return (
            <div className='auth'>
               
                {/* {this.props.user ? (
                    <button onClick={this.logout} >Logout</button> 
                ) : ( */}
                
                <div className="login-form">
                    <input onChange={e => this.handleChange(e, 'email')} type="text" placeholder="Email" />
                    <input onChange={e => this.handleChange(e, 'password')} type="password" placeholder="Password" />
                    <button onClick={this.login} >Login</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps, {updateUser})(Auth)