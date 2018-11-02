"use strict";

function TodoController() {
    const vm = this;

    vm.tasks = [{
        task: "Homework",
        completed: true
    }, {
        task: "Walk the dog",
        completed: false
    }, {
        task: "Laundry",
        completed: false
    }, {
        task: "Eat lunch",
        completed: true
    }];
    vm.addTask = (newTask) => {
        vm.tasks.push(angular.copy(newTask));
        console.log(vm.tasks);
    }
}



angular
    .module("todoApp")
    .controller("TodoController", TodoController);