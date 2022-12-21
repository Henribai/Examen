// Import express
let express = require('express');

// Initialize the app
let app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

let session = require('express-session');
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialisez:true
}));

let router = require('./routes');
app.use('/',router);
 
// Launch app to listen to specified port
app.listen(3000, function () {
    console.log('Runnings on port 3000');
})