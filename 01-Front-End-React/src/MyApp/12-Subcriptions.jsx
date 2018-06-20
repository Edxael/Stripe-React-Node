import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import Menu2 from './Menus/Menu2'  // <Menu2/>
import * as UCR from './97-LS'


export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = { redirect: false, package: 0, pay: false }

        this.onToken = this.onToken.bind(this)
    }


    onToken = (token) => {
        console.clear()
        console.log("Token is: ", token)
        axios.post('http://localhost:5000/subs/', { tokenId: token.id, customer: UCR.get('Ucre'), package: this.state.package } )
                .then(res => {
                    console.log(res);
                    console.log(res.data)
                    if(res.data.success){ 
                        setTimeout(() => { 
                            let userInfo = UCR.get('Ucre')
                            console.log("The old package: ", userInfo.package)

                            userInfo.package = this.state.package
                            console.log("The new Package: ", userInfo.package)

                            UCR.add('Ucre', userInfo)

                            let changedInfo = UCR.get('Ucre')
                            console.log(changedInfo)

                            this.setState({ redirect: true }) 
                        }, 1500) 
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

                <h1>Subscription.</h1>

                <div className="table-cont">

                    <table border="3" className="table1">
                        <tbody>

                            <tr>
                                <th className="w-1"></th>
                                <th className="w-3" >Bronze</th>
                                <th className="w-3" >Silver</th>
                                <th className="w-3" >Gold</th>
                            </tr>
                            <tr>
                                <th className="w-1">Screens:</th>
                                <td className="w-3" >1</td>
                                <td className="w-3" >2</td>
                                <td className="w-3" >5</td>
                            </tr>
                            <tr>
                                <th className="w-1">Mobile:</th>
                                <td className="w-3" >0</td>
                                <td className="w-3" >1</td>
                                <td className="w-3" >5</td>
                            </tr>
                            <tr>
                                <th className="w-1">Mobile:</th>
                                <td className="w-3" >0</td>
                                <td className="w-3" >1</td>
                                <td className="w-3" >5</td>
                            </tr>
                            <tr>
                                <th className="w-1">Advertising:</th>
                                <td className="w-3" >Yes</td>
                                <td className="w-3" >Yes</td>
                                <td className="w-3" >No</td>
                            </tr>
                            <tr>
                                <th className="w-1">High Definition:</th>
                                <td className="w-3" >No</td>
                                <td className="w-3" >No</td>
                                <td className="w-3" >Yes</td>
                            </tr>

                            <tr>
                                <th className="w-1">Price:</th>
                                <td className="w-3" >$ 10</td>
                                <td className="w-3" >$ 20</td>
                                <td className="w-3" >$ 30</td>
                            </tr>

                            <tr>
                                <th className="w-1">Package:</th>
                                <td className="w-3" ><input className="radio1" type="radio" onClick={ () => { this.setState({ package: 1 }) } } name="PKG" value="Windows"/></td>
                                <td className="w-3" ><input className="radio1" type="radio" onClick={ () => { this.setState({ package: 2 }) } } name="PKG" value="Windows"/></td>
                                <td className="w-3" ><input className="radio1" type="radio" onClick={ () => { this.setState({ package: 3 }) } } name="PKG" value="Windows"/></td>
                            </tr>

                        </tbody>
                    </table>

                    <p>Select your monthly package, then click Payment</p>
                    <br/>

                        <StripeCheckout token={this.onToken}  stripeKey="pk_test_IFYDACqD4HYsLjn9eZcB4x1B" />

                        { this.state.redirect ? <Redirect push to="/10" /> : <div>...</div> }
            
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
