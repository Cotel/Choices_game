var app = angular.module("newQuestion", []);

app.controller("QuestionFormCtrl", function() {
    var vm = this;

    vm.question = {};

    vm.questionFields = [
        {
            key: 'opcion_izq',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Opcion izquierda',
                required: true
            }
        },
        {
            key: 'opcion_der',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Opcion derecha',
                required: true
            }
        }
    ];
});
