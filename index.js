const express = require('express');

const userNames = ["Sean", "George", "Roger", "Timothy", "Pierce", "Daniel"];
const bestMovie = "Casino Royale";
const licensedToKill = true;

const app = express();


app.set('view engine', 'pug');

app.get('/', (req, res)=>{ 
    res.render("index", {
        userNames,
        bestMovie,
        licensedToKill
      });
});

app.get('/about', (req, res)=>{
    res.render('about', {
        userNames
    });
});

app.listen(3000, ()=>{
    console.log('Server listening on 3000');
});
