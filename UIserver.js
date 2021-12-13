const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile('UI.html', {root: __dirname});
});

app.post('/login', (req, res) => {
    const {fullname, age, education, email, country, salary} = req.body;
    if(req.body.age < 18){
        res.send('You are too young to apply for this vacancy.')
    } else{
       const name = "<h1> Here is our client's informations </h1>" + 
                    "<p> Full-name: " + req.body.fullname + '</p>' + 
                    "<p> Country: " + req.body.country + '</p>' + 
                    "<p> Age: " + req.body.age + '</p>' + 
                    "<p> Education: " + req.body.education + '</p>' + 
                    "<p> Salary: " + Number(req.body.salary).toLocaleString() + 'USD </p>';
        res.send(name);
    }
})

app.listen(5400, () => {
    console.log('Node server is running...');
})