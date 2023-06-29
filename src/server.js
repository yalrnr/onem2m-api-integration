const mongoose = require('mongoose')
const app = require('./app')

const DB_URL = "mongodb+srv://new_user:<password>@cluster0.dk5oyhe.mongodb.net/?retryWrites=true&w=majority";
const DB_PASSWORD = "rQqV3DO4Y42mZ82E"
const DB = DB_URL.replace('<password>',DB_PASSWORD)
const PORT = 8080;

mongoose.connect(DB).then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log("DB error", err);
})

app.listen(PORT, () => {
    console.log(`listening on the port ${PORT}`)
});