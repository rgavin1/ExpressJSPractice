const app = require('express')();
/**
 * Shows where to hit the endpoint in
 * the client localhost:8080
 */
const PORT = 8080;

app.listen(PORT, () => console.log('Its alive again 👾', __dirname))

app.get('/ramsey', (req, res) => {
    res.status(200).send({
        firstname: "Ramsey",
        lastname: "Gavin"
    })
})

app.get('/brooke', (req, res) => {
    res.status(500).send('WTF 🤯')
})