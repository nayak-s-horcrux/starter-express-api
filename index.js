const express = require('express');
const app = express();

app.get('/problem0/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const square = number * number;
    res.send(`The square of ${number} is ${square}`);
});

app.post('/problem1', express.json(), (req, res) => {
    const { n, array } = req.body;
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    res.send(`The sum of the array ${JSON.stringify(array)} is ${sum}`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
