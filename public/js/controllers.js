var jq = $.noConflict();
var app = angular.module('choices_game', []);

app.controller("QuestionsCtrl", function($scope, $http, $window) {

    var Question = function(_id, opcion_izq, opcion_der, result_izq, result_der, total) {
        this._id = _id;
        this.opcion_izq = opcion_izq;
        this.opcion_der = opcion_der;
        this.result_izq = Number(result_izq);
        this.result_der = Number(result_der);
        this.total = Number(total);
    };

    var clicked = false;

    $http.get('/rand_question').
        success(function(data, status, headers, config) {
            var question = new Question(data[0]["_id"], data[0]["opcion_izq"], data[0]["opcion_der"], data[0]["result_izq"], data[0]["result_der"], data[0]["total"]);
            $scope.question = question;
            $scope.trigger_transition = function(event){
                if(clicked) {
                    $window.location.reload();
                } else {
                    $scope.a_izq = (question.result_izq/question.total * 100).toFixed(2) + "% eligieron esta opcion";
                    $scope.a_der = (question.result_der/question.total * 100).toFixed(2) + "% eligieron esta opcion";

                    if(question.result_izq > question.result_der) {
                        jq(".right-container").addClass("animated-right-container");
                    }
                    if(question.result_der > question.result_izq) {
                        jq(".left-container").addClass("animated-left-container");
                    }

                    if(event.target.id === "a_izq") {
                        question.result_izq += 1;
                        question.total += 1;
                        $http.put('/question/'+question._id, question);
                    }
                    if(event.target.id === "a_der") {
                        question.result_der += 1;
                        question.total += 1;
                        $http.put("/question/"+question._id, question);
                    }
                }
                clicked = !clicked;
            };
    });
});
