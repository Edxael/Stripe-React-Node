import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import * as UCR from './97-LS'
import Menu1 from './Menus/Menu1'  //<Menu1/>
import LoadImg from './img/loading.gif'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class extends React.Component{

    state = { name: '', email: '', password: '', dashboard: false, loading: false }

    render(){
        console.clear()


        const CreateUser = (event) => {
            event.preventDefault()

            this.setState({ loading: true })  // to load waiting image

            let userObj = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }

            axios.post('http://localhost:5000/customers', { xinfo: userObj } )
                .then( (response) => { 
                    console.log(" \n Response from the Server: ", response) 
                    UCR.add('Ucre', response.data.cdata)
                    this.setState({ name: '', email: '', password: '', dashboard: true })
                })
                .catch( (error) => { console.log("Error from Server: ", error) })

        }


        return(
            <div>

                <Menu1/>

                <h1>Create Account.</h1>

                <form action="" onSubmit={CreateUser} >
                    <input className="LogInput" type="text" placeholder="Full Name..." value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                    <input className="LogInput" type="email" placeholder="Email..." value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                    <input className="LogInput" type="password" placeholder="Password..." value={this.state.password} onChange={ (e) => { this.setState({ password: e.target.value }) } } />

                    <input type="submit" value="Create Account"/>
                </form>
                { this.state.loading ? <img src={LoadImg} alt="La Pic"/> : <div>...</div> }
                { this.state.dashboard ? <Redirect push to="/6" /> : <div>...</div> }
            </div>
        )
    }
}





