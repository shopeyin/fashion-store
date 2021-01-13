const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { error } = require("console");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("running" + port);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// app.post("/payment", (req, res) => {
//   const body = {
//     source: req.body.token.id,
//     amoount: req.body.amoount,
//     currency: "usd",
//   };
//   stripe.charges.create(body, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ success: stripeRes });
//     }
//   });
// });


const sgMail = require('@sendgrid/mail')

const API_KEY = "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"
sgMail.setApiKey(API_KEY)


app.post("/cart", (req, res) => {
  const msg = {
    to: 'tommyslipz@gmail.com', // Change to your recipient
    from: 'oladimejicoder@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    // text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>how are you even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
});






// function SendMail() {
//   const msg = {
//     to: 'tommyslipz@gmail.com', // Change to your recipient
//     from: 'oladimejicoder@gmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     // text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>how are you even with Node.js</strong>',
//   }
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }
 
// SendMail()

