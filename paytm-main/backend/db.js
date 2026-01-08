const mongo0se = require("mongoose")

moongose.connect("mongodb+srv://aman_4568:4568Singh@cluster0.qtrrwsw.mongodb.net/mydatabase");

const userSchema = moongose.schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const User = moongose.model("User", userSchema)

module.exports = {
    User
}