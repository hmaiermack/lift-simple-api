require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const { NODE_ENV } = require('./config')
const { CLIENT_ORIGIN } = require('./config')
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const programsRouter = require('./programs/programs-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors(/*{
    origin: CLIENT_ORIGIN
}*/))
app.use(bodyParser.json())

// Set up Auth0 configuration
const authConfig = {
    domain: "lift-simple.auth0.com",
    audience: "jwt-auth"
  };
  
  // Define middleware that validates incoming bearer tokens
  // using JWKS from lift-simple.auth0.com
  var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://lift-simple.auth0.com/.well-known/jwks.json'
  }),
  audience: 'jwt-auth',
  issuer: 'https://lift-simple.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);


app.use('/api', programsRouter)

  
    

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})
        
        
    

module.exports = app
