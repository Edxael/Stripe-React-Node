import React from 'react'
import Menu2 from './Menus/Menu2'  // <Menu2/>
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import * as UCR from './97-LS'


export default class extends React.Component{

    state = { goHome: false }

    render(){
        console.clear()

        const LogOut1 = () => {
            console.log("Loging Out...")
            UCR.add('Ucre', {})
            this.setState({ goHome: true })
        }

        return(
            <div>

                <Menu2/>

                <h1>Are you sure you want to Log-Out?</h1>

                { this.state.goHome ? <Redirect push to="/" /> : <div>...</div> }

                <button onClick={ LogOut1 }> LOG-OUT</button>
                
            </div>
        )
    }
}