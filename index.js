let express = require("express");
// let cors = require("cors")
let app = express();
// app.use(cors())

// server side value

let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

// 1

app.get("/cart-total", (req, res) => {
    let productOne = parseFloat(req.query.productOne);
    let productTwo = parseFloat(req.query.productTwo);
    let productThree = parseFloat(req.query.productThree);
    let cartTotal = productOne + productTwo + productThree;
    res.send(cartTotal.toString());
});

// 2

app.get("/membership-discount", (req, res) => {
    let totalCart = parseFloat(req.query.totalCart);
    let isMember = req.query.isMember === "true";
    if (isMember) {
        totalCart = totalCart * (10 / 100);
    }
    res.send(totalCart.toString());
});

// 3;
app.get("/calculate-tax", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    totalCart = cartTotal + cartTotal * (5 / 100);
    res.send(totalCart.toString());
});

// 4
app.get("/estimate-delivery", (req, res) => {
    let shippedMethod = req.query.shippedMethod;
    distance = parseFloat(req.query.distance);
    if (shippedMethod == "standard") {
        distance = distance / 50;
    } else {
        distance = distance / 100;
    }
    res.send(`estimated delivery days are ${distance}`);
});

// 5

app.get("/shipping-cost", (req, res) => {
    let weight = parseFloat(req.query.weight);
    let distance = parseFloat(req.query.distance);
    let shippingCost = weight * 2 * distance * 0.1;

    res.send(`the shipping cost will be ${shippingCost} $`);
});

// 6

app.get("/loyalty-points", (req, res) => {
    let purchaseAmount = parseFloat(req.query.purchaseAmount);
    let points = purchaseAmount * 2;
    res.send(`your loyalty points are ${points}`);
});

app.listen(3000);
