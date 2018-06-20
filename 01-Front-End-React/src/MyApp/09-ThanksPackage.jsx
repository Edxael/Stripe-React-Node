import React from 'react'
import Menu2 from './Menus/Menu2'  // <Menu2/>
// import { Link } from 'react-router-dom'
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

                <h2>Your Subcription has change to package:</h2>

                { userInfo.package === 1 ? <h1>BRONZE</h1> : userInfo.package === 2 ? <h1>SILVER</h1> : userInfo.package === 3 ? <h1>GOLD</h1> : <h1>No Package :(</h1> }

                
            </div>
        )
    }
}
