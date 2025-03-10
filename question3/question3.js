const express = require('express');
const app = express();
const port = 3000;


//serve static files from the "public" folder
app.use(express.static('public'));

//Define the route for the home page
app.get('/test', (req,res) => {   
    res.send("Express is working! Clint Alonzo");
});

//Start the server 
app.listen(port, ()=> {
   console.log(`Server running at http://localhost:${port}`);
})