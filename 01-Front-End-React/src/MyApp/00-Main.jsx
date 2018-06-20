import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Banner1 from './img/tps1.png'
import './99-style.css'

import Home from './01-Home'
import About from './02-About'
import Pricing from './06-Picing'
import LogIn from './03-LogIn'
import CreateAcc from './04-CreateAcc'
import ResetPass from './07-Reset-Password'
import DashBoard from './05-Dashboard'
import Packages from './10-Packages'
import LogOut from './08-Log-Out'
import UpdatePackage from './10-Packages'
import Thanks from './09-ThanksPackage'
import OneTimeCharge from './11-OneTimeCharge'
import Subcriptions from './12-Subcriptions'


export default class extends React.Component{
    render(){
        return(
            <div>
                <Router>
               
                    <div>
                        <img className="clear1" src={Banner1} alt="The Banner Store"/>
                        <br/><br/>

                        <div className="clear1">
                        
                            <Route exact path="/" component={Home}/>
                            <Route path="/1" component={About}/>
                            <Route path="/2" component={Pricing}/>
                            <Route path="/3" component={LogIn}/>
                            <Route path="/4" component={CreateAcc}/>
                            <Route path="/5" component={ResetPass}/>
                            <Route path="/6" component={DashBoard}/>
                            <Route path="/7" component={Packages}/>
                            <Route path="/8" component={LogOut}/>
                            <Route path="/9" component={UpdatePackage}/>
                            <Route path="/10" component={Thanks}/>
                            <Route path="/11" component={OneTimeCharge}/>
                            <Route path="/12" component={Subcriptions}/>

                        </div>
                    </div>
                
                </Router>
            </div>
        )
    }
}


