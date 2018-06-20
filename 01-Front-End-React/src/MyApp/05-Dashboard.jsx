import React from 'react'
import Menu2 from './Menus/Menu2'  // <Menu2/>
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import * as UCR from './97-LS'


export default class extends React.Component{
    render(){
        console.clear()
        let userInfo = UCR.get('Ucre')
        console.log(userInfo)

        return(
            <div>

                <Menu2/>

                <h1>Dash Board</h1>

                <div className="DashInfoCont" >

                    <div className="userDispInfo">
                        <div><strong>Name: </strong> {userInfo.name} </div>
                        <div><strong>Email: </strong> {userInfo.email} </div>
                        <div><strong>Password: </strong> ******** </div>
                        <div><strong>Package: </strong> { ( userInfo.package === 1 ) ? "Bronze" : ( userInfo.package === 2 ) ? "Silver" : ( userInfo.package === 3 ) ? "Gold" : "No Package" } </div>
                    </div>

                    <div className="ButtonCont">
                        <Link className="ButtonStyle" to="/9">Change Package</Link>
                        <Link className="ButtonStyle" to="/11">One Time Charge</Link>
                        <Link className="ButtonStyle" to="/12">Subcriptions</Link>
                        <Link className="ButtonStyle" to="#">Change Password</Link>
                    </div>

                </div>
                
            </div>
        )
    }
}

