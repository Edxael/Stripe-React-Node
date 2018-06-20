import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import Menu2 from './Menus/Menu2'  // <Menu2/>
import * as UCR from './97-LS'
import SuperBow from './img/superb.jpg'
import './99-style.css'


export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = { redirect: false, package: 0, pay: false }

        this.onToken = this.onToken.bind(this)
    }


    onToken = (token) => {
        console.clear()
        console.log("Token is: ", token)
        axios.post('http://localhost:5000/charge/', { tokenId: token.id, customer: UCR.get('Ucre') } )
                .then(res => {
                    console.log(res);
                    console.log(res.data)
                    if(res.data.success){ 
                        setTimeout(() => { this.setState({ redirect: true })  }, 1500) 
                    }
                })
                .catch( (error) => { console.log(error) })   
    }




    render(){
        console.clear()
        let userInfo = UCR.get('Ucre')
        console.log(userInfo)


        return(
            <div>

                <Menu2/>

                <h1>One Time Charge</h1>

                <div className="table-cont">

                    <img className="superPic" src={SuperBow} alt="ad-pic"/>

                    <p>Pay-Per view event...</p>
                    <br/>

                        <StripeCheckout token={this.onToken}  stripeKey="pk_test_IFYDACqD4HYsLjn9eZcB4x1B" />

                        { this.state.redirect ? <Redirect push to="/6" /> : <div>...</div> }
            
                    <br/>
                    
                    

                </div>
            </div>
        )
    }
}




// this is the one that I use to communicate
// <StripeCheckout token={this.onToken} stripeKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh" />



// { this.state.pay ? React.createElement(stripePayment) : <button onClick={ executePayment } >PAYMENT</button> } */}





// ===========================================================================================================

// onToken = (token) => {
//     console.clear()
//     console.log("Token is: ", token)
//     axios.post('http://localhost:5000/charge/', { tokenId: token.id, customer: UCR.get('Ucre'), package: this.state.package } )
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data)
//                 if(res.data.success){ 
//                     setTimeout(() => { 
//                         let userInfo = UCR.get('Ucre')
//                         console.log("The old package: ", userInfo.package)

//                         userInfo.package = this.state.package
//                         console.log("The new Package: ", userInfo.package)

//                         UCR.add('Ucre', userInfo)

//                         let changedInfo = UCR.get('Ucre')
//                         console.log(changedInfo)

//                         this.setState({ redirect: true }) 
//                     }, 1500) 
//                 }
//             })
//             .catch( (error) => { console.log(error) })   
// }


//    <StripeCheckout token={this.onToken}  stripeKey="pk_test_IFYDACqD4HYsLjn9eZcB4x1B" />

// ===========================================================================================================
