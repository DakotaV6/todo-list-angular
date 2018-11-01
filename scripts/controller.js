"use strict";

function TodoController() {
    const vm = this;

    vm.tasks = [];
    vm.addTask = (newTask) => {
        vm.tasks.push(angular.copy(newTask));
        console.log(vm.tasks);
    }
}



angular
    .module("todoApp")
    .controller("TodoController", TodoController);