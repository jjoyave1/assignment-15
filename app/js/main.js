// (function () {

//   'use strict';

  var Todo = function(task) {
    this.task = task;
    this.status = (task.status !== undefined ? task.status : 'working');
  };

  var bin = {
    "data": ""
  };

  var storage = [];
  var $todoForm = $('#todo-form');

  bin.data = storage;

  $todoForm.on('submit', function(item) {

    item.preventDefault();

    var listItem = $('#todo-input').val();
    var startTask = new Todo(listItem);

    storage.push(startTask);

    this.reset();

    $('section').html(template.todolist(bin));

  });

// });

$('#td-lnk').click(function(){
  console.log('someone has clicked');
  $(this).css('text-decoration', 'line-through');
});
