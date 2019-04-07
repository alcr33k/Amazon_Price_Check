const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const product = require('./routes/api/product');

app.use('/api/product', product); // any route that goes to /api/product will be directed to the product.js file

// handle production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'));
    // handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000; // either run it on process.env.port with heroku or on port 5000 on local machine

app.listen(port, () => console.log('Server started on port ' + port));