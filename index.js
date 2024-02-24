const express = require('express');
const app = express();

class Tokeniser {
    constructor(str) {
        console.log("Input string:", str); // Debugging: Log input string
        this.tokens = str.split(/\W+/);
        console.log("Tokens:", this.tokens); // Debugging: Log tokens array
        this.nextToRead = 0;
    }
    read() {
        if (this.nextToRead < this.tokens.length) {
            return this.tokens[this.nextToRead++];
        } else {
            throw "error";
        }
    }
}

function problem_0(input) {
    console.log("Input to problem_0:", input); // Debugging: Log input
    var inp = new Tokeniser(input);
    var out = "";
    var tt = parseInt(inp.read());
    while (tt--) {
        var n = parseInt(inp.read());
        var deg = Array(n + 5).fill(0);
        for (var i = 0; i < n - 1; i++) {
            var u = parseInt(inp.read());
            var v = parseInt(inp.read());
            deg[u]++;
            deg[v]++;
        }
        var ans = 0;
        for (var i = 1; i <= n; i++) {
            if (deg[i] == 1) {
                ans++;
            }
        }
        out += ans + "\n";
    }
    return out;
}

// Endpoint for /problem3
app.post('/problem3', express.json(), (req, res) => {
    const input = req.body.input;
    console.log("Received input:", input); // Debugging: Log received input
    const result = problem_0(input);
    res.send(result);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
