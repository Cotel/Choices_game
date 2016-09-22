var mongoose = require("mongoose");
var random = require("mongoose-random");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    opcion_izq : String,
    opcion_der : String,
    result_izq : Number,
    result_der : Number,
    total : Number,
});
QuestionSchema.plugin(random, {path: 'r'});

module.exports = mongoose.model('question', QuestionSchema);
