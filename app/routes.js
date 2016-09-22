var mongoose = require('mongoose');
var Question = require('./models.js');

Question.syncRandom(function(err, res) {
    console.log(res.updated);
});

module.exports = function(app) {
    app.get('/questions', function(req, res) {
        var query = Question.find({});
        query.exec(function(err, questions) {
            if(err) {
                res.send(err);
            } else {
                res.json(questions);
            }
        });
    });

    app.get('/question/:id', function(req, res) {
        Question.findById(req.params.id, function(err, question) {
            if (err) res.send(err);
            res.json(question);
        });
    });

    app.get('/rand_question', function(req, res) {
        var query = Question.findRandom().limit(1);
        query.exec(function(err, question) {
            if(err) res.send(err);
            res.json(question);
        });
    });

    app.put('/question/:id', function(req, res) {
        Question.findById(req.params.id, function(err, question) {
            question.result_izq = req.body.result_izq;
            question.result_der = req.body.result_der;
            question.total = req.body.total;

            question.save(function(err) {
                if(err) {
                    console.log(err);
                    res.send(err);
                }
            });
        });
    });
};
