import React from 'react'
import Collage from './img/collage.png'
import Menu1 from './Menus/Menu1'  // <Menu1/>
import Menu2 from './Menus/Menu2'  // <Menu2/>
import * as UCR from './97-LS'

export default class extends React.Component{
    render(){
        console.clear()
        let logTes = UCR.get('Ucre')
        return(
            <div>

                { logTes.name ? <Menu2/> : <Menu1/> }

                <h1>About Stream - Flix</h1>

                <img className="about-img" src={Collage} alt="pic"/>

                <h3>For question plese contac us:</h3>
                <div><strong>Phone: </strong>101-123.4567</div>
                <div><strong>Email: </strong>info@stfx.com</div>

            </div>
        )
    }
}