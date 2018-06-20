import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component{
    render(){

        return(
            <div>
                <div>
                    <Link className="LinkStyle" to="/">Home</Link>
                    <Link className="LinkStyle" to="/1">About-Us</Link>
                    <Link className="LinkStyle" to="/2">Pricing</Link>
                    <Link className="LinkStyle" to="/3">Log-In</Link>
                </div>

                <br/>
                <hr/>
            </div>
        )
    }
}