import React from 'react'
import { Redirect } from 'react-router-dom'
import Menu1 from './Menus/Menu1'  // <Menu1/>
// import StripeCheckout from 'react-stripe-checkout'


export default class extends React.Component{
    state = { redirect: false }


    render(){
        console.clear()

        return(
            <div>

                <Menu1/>

                <h1>Packages.</h1>

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

                        </tbody>
                    </table>

                    <p>Log-In to your account to choose, or change package.</p>
                    
                    { this.state.redirect ? <Redirect push to="/3" /> : <button onClick={ () => { this.setState({ redirect: true })  } } >Log-In to My Account</button>}

                </div>
            </div>
        )
    }
}




// this is the one that I use to communicate
// <StripeCheckout token={this.onToken} stripeKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh" />