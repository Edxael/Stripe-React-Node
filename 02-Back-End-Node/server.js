    // Test Keys to use on Development
// ===================================================
const keyPublishable = 'pk_test_IFYDACqD4HYsLjn9eZcB4x1B' // Using my pub.Key Here.
const keySecret = 'sk_test_uzgyHUbwXmaYdkxhNFXE6WNJ' // SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS


    // LOADING DEPENDENCIES
// ===================================================
const app = require("express")()
const stripe = require("stripe")(keySecret)
// const stripe = require("stripe")(keyPublishable)
const bodyParser = require('body-parser')
const db = require('mongoose')
const CustomerTemp = require('./Schemas/01-Customers')
const express     = require('express') 
const cors = require('cors')



    // DataBase Connection (zadmin) => { Hk...48 }
// ===================================================
db.connect('mongodb://zadmin:Hkodoma48@ds231199.mlab.com:31199/sflix', (err) => {
    if(err){ console.log(err) }else { console.log("Conected to DataBase.") }
})




    // MIDLEWARE
// ===================================================
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./headers'))
const router = express.Router() 





    // ROUTING
// ===================================================
app.use('/', router)


//------[ To Create New User ]--------------------------------------------------------------------------------
router.route('/customers').post( (req, res) => {  // Create a new singer record and save it on the db.
    
    const customer1 = stripe.customers.create({  // Creating a STRIPE customer....
        email: req.body.xinfo.email
    })

    customer1.then((data) => {                      // When the promise of the Stripe customer is resolve.
        const oneCustomer = new CustomerTemp()      // create a new instance of the Singer model
        oneCustomer.name = req.body.xinfo.name
        oneCustomer.email = req.body.xinfo.email
        oneCustomer.password = req.body.xinfo.password
        oneCustomer.acctype = "customer"
        oneCustomer.package = "none"
        oneCustomer.stripeid = data.id
        // console.log("Record to send to DataBase:", oneCustomer)

        oneCustomer.save( (err) => {   // save the customer and check for errors
            if (err) { res.send(err) }
            console.log("Succesful creation of account for: ", oneCustomer.name , ". \n " )
            res.json({ message: 'Customer Record Created: ', cdata: oneCustomer})
        })

    })  
    
}) //---------------------------------------------------------------------------------------------------------










//------[ To log-in by Email ]--------------------------------------------------------------------------------
router.route('/customers/:email').get( (req, res) => {  
    CustomerTemp.findOne( { email: req.params.email} , (err, customerRecord) => {
        if (err) { res.send(err) }
        console.log('Customer : ', customerRecord.name , " Succesful Log-In \n " )
        res.send( customerRecord )   
    })
}) //---------------------------------------------------------------------------------------------------------






//------[ To Charge card  ]--------------------------------------------------------------------------------
app.post("/charge", (req, res) => {
    // console.log(req.body)
    // console.log("The request is type: ", typeof res , " \n ")
    console.log("=======================================")
    const tokenID = req.body.tokenId
    console.log(tokenID)
    console.log("=======================================")
    

            // ---------------------------------------------------------
            // //  1 time Charge the user's card:  
    stripe.charges.create({
        amount: 1000,
        currency: "usd",
        description: "Example charge",
        source: tokenID,
    }, (err, charge) => {
        // asynchronously called

        if(err){
            console.log("==============================")
            console.log("  Error: ", err )
            res.send({
                success: false,
                message: "Error :( ..."
            })
        }else{
            console.log("==============================")
            console.log("  Charge: ", charge )

            res.send({
                success: true,
                message: "Success  ;) ..."
            })
        }
    });
}) //-------------------------------------------------------------------------------------------------------






    // STRIPE DOCUMENTATION ON SUBSCRIPTIONS: https://stripe.com/docs/billing/quickstart

//------[ Subcriptions Charge card  ]--------------------------------------------------------------------------------



        // ********* Creating Plans  *************
const plan1 = stripe.plans.create({
    product: {name: "Bronze Package"},
    currency: 'usd',
    interval: 'month',
    nickname: 'Bronze Monthly',
    amount: 10000,
  })

  const plan2 = stripe.plans.create({
    product: {name: "Silver Package"},
    currency: 'usd',
    interval: 'month',
    nickname: 'Silver Monthly',
    amount: 20000,
  })

  const plan3 = stripe.plans.create({
    product: {name: "Gold Package"},
    currency: 'usd',
    interval: 'month',
    nickname: 'Gold Monthly',
    amount: 30000,
  })
        // ************************************


app.post("/subs", (req, res) => {
    // console.log(req.body)
    // console.log("The request is type: ", typeof res , " \n ")
    console.log("=======================================")
    console.log(" **** SUBSCRIPTION ****")
    // console.log(plan1)
    // const tokenID = req.body.tokenId
    // console.log(tokenID)
    console.log("For customer: ", req.body.customer.name)
    console.log("The Email is: ", req.body.customer.email)
    console.log("The Package is: ", req.body.pname)
    console.log("The P Price is: ", req.body.pprice)
    console.log("Using Strip Token: ", req.body.tokenId)
    console.log("======================================= \n ")

    // console.log("Product with Id:  ", pro1.id)

    console.log("======================================= \n ") 

    // ********* Creating The constructor of the product  *************  
    const product = stripe.products.create({
        name: 'Subcription Product',
        type: 'service',
    })

    // console.log("The product is: ", product)
    product.then((pro1) => { return pro1.id } )            // Creating Product
           .then((myid) => { return stripe.plans.create({  // Creating Plan
                product: myid,
                currency: 'usd',
                interval: 'month',
                nickname: req.body.pname,
                amount: req.body.pprice,
          }) } )
          .then((plan) => { stripe.subscriptions.create({
                            customer: 'cus_4fdAW5ftNQow1a',
                            items: [{plan: 'plan_CBXbz9i7AIOTzr'}],
          }) })

    console.log("======================================= \n ")

    // console.log( "The plan id: ", plan.id )

    // console.log("The plan is: ", planU)


    console.log("======================================= \n ")

            // ---------------------------------------------------------
            // //  1 time Charge the user's card:  
    // stripe.charges.create({
    //     amount: 1000,
    //     currency: "usd",
    //     description: "Example charge",
    //     source: tokenID,
    // }, (err, charge) => {
    //     // asynchronously called

    //     if(err){
    //         console.log("==============================")
    //         console.log("  Error: ", err )
    //         res.send({
    //             success: false,
    //             message: "Error :( ..."
    //         })
    //     }else{
    //         console.log("==============================")
    //         console.log("  Charge: ", charge )

    //         res.send({
    //             success: true,
    //             message: "Success  ;) ..."
    //         })
    //     }
    // });
}) //-------------------------------------------------------------------------------------------------------
  




    // SERVER LISTENER  --  YdkxhNFXE6WNJ
// ===================================================
app.listen(5000, (err) => {
    if(err) { throw err }
    console.log(" \n UP & RUNNING...")
})

