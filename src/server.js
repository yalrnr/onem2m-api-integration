const mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config()

const PORT = 8080;

mongoose.connect(process.env.DB).then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log("DB error", err);
})

app.listen(PORT, () => {
    console.log(`listening on the port ${PORT}`)
});