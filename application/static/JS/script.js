// function to update task list on every change
function updateTaskList(filter) {
  $.ajax({
    url: "/index",
    dataType: "json",
    success: function (response) {
      let tasks = response;
      let filteredTasks = "";
      let liTasks = "";

      // defines the filter of the list
      switch (filter) {
        case "ALL":
          filteredTasks = tasks;
          break;
        case "ACTIVES":
          filteredTasks = tasks.filter((task, index, array) => !task.status);
          break;
        case "COMPLETES":
          filteredTasks = tasks.filter((task, index, array) => task.status);
          break;
        default:
          filteredTasks = tasks;
          break;
      }

      // generate html code of the list from other function
      liTasks = generateTasksHtml(filteredTasks);
      document.querySelector("ul").innerHTML = liTasks;

      addTaskCount(filteredTasks);
    },
  });
}

// add task on the task list
function addTask() {
  let inputValue = document.getElementById("task-entry");

  // verifies that entry is or not empty
  if (inputValue.value.length <= 1) {
    alert("Tarefa Vazia!");
  } else {
    let entryInput = { task: inputValue.value };

    inputValue.value = "";

    $.ajax({
      type: "POST",
      url: "/add-task",
      data: JSON.stringify(entryInput),
      dataType: "json",
      contentType: "application/json",
      success: function () {
        updateTaskList("ALL");
      },
    });
  }
}

// removes a task by clicking on the close button, and after calls the update function
function removeTask(taskId) {
  $.ajax({
    type: "DELETE",
    url: "/delete-task/" + taskId,
    dataType: "json",
    success: function (response) {
      updateTaskList("ALL");
    },
  });
}

// clear all completed tasks, that has 'true' in his status
function clearCompletedTasks() {
  $.ajax({
    type: "DELETE",
    url: "/delete-tasks",
    dataType: "json",
    success: function (response) {
      updateTaskList("ALL");
    },
  });
}

// update the status of the task to true
function updateTask(taskId) {
  let taskStatus = {
    isTaskChecked: true,
  };

  $.ajax({
    type: "PUT",
    url: "/update-task/" + taskId,
    data: JSON.stringify(taskStatus),
    dataType: "json",
    contentType: "application/json",
    success: function () {
      updateTaskList("ALL");
    },
  });
}

/* verifies clicks on the task list to trigger the actions
of update or delete of the task */
function verifyList() {
  let list = document.querySelector("ul");
  list.addEventListener("click", function (ev) {
    let taskToUseId = ev.target.parentElement.getAttribute("id");
    if (ev.target.tagName === "IMG") {
      removeTask(taskToUseId);
    } else if (ev.target.tagName === "INPUT") {
      updateTask(taskToUseId);
    }
  });
}

// makes the count of the tasks
function addTaskCount(taskList) {
  let taskCounter = taskList.length;

  document.getElementById("task-count").innerText = taskCounter + " items left";
}

/* function to generate all of html code of task list, do this with the task
json retrivieng from back-end */
function generateTasksHtml(tasks) {
  let tasksLenght = tasks.length;
  let inputCheck = "";
  let final = "";
  let spanTask = "";
  let imgFinish = "<img src='../static/IMG/icon-cross.svg'>";

  for (let i = 0; i < tasksLenght; i++) {
    if (tasks[i]["status"] === false) {
      inputCheck =
        "<input type='checkbox' name='check' class='regular-checkbox'>";
    } else {
      inputCheck =
        "<input type='checkbox' name='check' class='regular-checkbox' checked>";
    }
    spanTask = "<span>" + tasks[i]["task"] + "</span>";

    final +=
      "<li class='task' id=" +
      tasks[i]["id"] +
      ">" +
      inputCheck +
      spanTask +
      imgFinish +
      "</li>";
  }
  return final;
}

// function to change theme, between dark and light
function changeTheme() {
  let body = document.querySelector("body");
  let button = document.getElementById("toggle-theme-btn");
  let isDark = body.className === "dark-background";

  if (isDark) {
    document.documentElement.style.setProperty("--color-theme", "#FAFAFA");
    document.documentElement.style.setProperty("--hover-color", "black");
    document.documentElement.style.setProperty("--shadow", "2px 2px 4px gray");
    body.className = "light-background";
    button.src ="../static/IMG/icon-moon.svg";
  } else {
    document.documentElement.style.setProperty(
      "--color-theme",
      "hsl(235, 24%, 19%)"
    );
    document.documentElement.style.setProperty("--hover-color", "white");
    document.documentElement.style.setProperty("--shadow", "none");
    body.className = "dark-background";
    button.src ="../static/IMG/icon-sun.svg";
  }
}
