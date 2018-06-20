import React from 'react'
import axios from 'axios'
import './99-style.css'
import { Redirect } from 'react-router-dom'
import * as UCR from './97-LS'
import Menu1 from './Menus/Menu1'  // <Menu1/>

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class extends React.Component{
    state = { email: '', password: '', createacc: false, ressetpassword: false, dashboard: false }
    render(){
        console.clear()

        const checkCredentials = (event) => {
            event.preventDefault()
            console.log("Checando.....")

            axios.get( 'http://localhost:5000/customers/' + this.state.email )
                .then( (response) => { return response.data } )
                .then( (data) => { 
                    console.log(" \n Response from the Server: \n  \n ", data) 
                    if(data.password === this.state.password){
                        console.log("YESSSSSSSSSS")
                        UCR.add('Ucre', data)
                        this.setState({ dashboard: true })

                    }else{
                        console.log("Wrong Email or Password")
                        alert("Wrong Email or Password")
                    }

                })
                .catch( (error) => { console.log(error) })
            
        }

        return(
            <div>

                <Menu1/>

                <h1>Log-In</h1>

                <div>
                    <form onSubmit={ checkCredentials } >
                        <input className="LogInput" type="email" placeholder="Email..." value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                        <input className="LogInput" type="password" placeholder="Password..." value={this.state.password} onChange={ (e) => { this.setState({ password: e.target.value }) } } />
                        <input type="submit" value="Log-In"/>
                    </form>

                    <br/><br/>

                    { this.state.ressetpassword ? <Redirect push to="/5" /> : <a href="" onClick={ () => { this.setState({ ressetpassword: true }) } } >Forgot Password?</a> }
                </div>

                <hr className="line50" />

                
                { this.state.createacc ? <Redirect push to="/4" /> : <a href="" onClick={ () => { this.setState({ createacc: true }) } } >Create Account</a> }
                { this.state.dashboard ? <Redirect push to="/6" /> : <div>...</div> }

            </div>
        )
    }
}



// { this.state.redirect ? <Redirect push to="/3" /> : <button onClick={ () => { this.setState({ redirect: true })  } } >Log-In to My Account</button>}

// onClick={ () => { this.setState({ createacc: true }) } }

