import * as express from "express";

const app = express()

app.use("/", express.static('./dist/webapp'));

app.get('/', function(req, res) {
    res.sendFile('./webapp/index.html', { root: __dirname });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
