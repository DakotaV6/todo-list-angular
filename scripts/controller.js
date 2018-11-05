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
        vm.tasks.push(angular.copy({task: newTask, completed: false}));
        // console.log(vm.tasks);
    }

    vm.completeTask = (task) => {
        task.completed = true;
    }
    
    vm.deleteTask = (task) => {
        // console.log(task);
        let index = vm.tasks.indexOf(task);
        vm.tasks.splice(index, 1);
    }

    vm.editTask = (task, value) => {
        let index = vm.tasks.indexOf(task);
        // console.log(value);
        if (value !== null) {
            vm.tasks[index].task = value;
        }
    }
}



angular
    .module("todoApp")
    .controller("TodoController", TodoController);