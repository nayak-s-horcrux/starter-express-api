const express = require('express');
const app = express();

class Tokeniser {
    constructor(str) {
        this.tokens = str.split(/\W+/);
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

app.post('/problem3', express.text(), (req, res) => {
    const input = req.body;
    const result = problem_0(input);
    res.send(result);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
