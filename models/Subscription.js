const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    
    email:{type:String,require:true}

});
const Subscription = mongoose.model("subscriptions",schema);
module.exports = Subscription;