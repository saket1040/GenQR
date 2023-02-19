const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const qrRouter = require('./qrcodeRouter');

app.use(express.json());
app.use(cors());
app.use('/api',qrRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})