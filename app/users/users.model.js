//creating a user schema.
var mongoose = require("mongoose");

//adding validations to the schema
var user = {
    username: { type: String, required: true, minlength: 4 },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 8 },
    age: { type: Number, min: 18, max: 100, required: true },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    },
    createdDate: { type: Date, default: Date.now }

};

var userSchema = mongoose.Schema(user);

mongoose.model("userDetail", userSchema);