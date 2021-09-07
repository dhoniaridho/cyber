const todos = [
  "Love For All, Hatred For None",
  "Change the world by being yourself.",
  "Every moment is a fresh beginning.",
];

const randomText = [
  "Love For All, Hatred For None",
  "Change the world by being yourself.",
  "Every moment is a fresh beginning.",
  "Never regret anything that made you smile",
  "Die with memories, not dreams",
  "Aspire to inspire before we expire.",
  "The greatest glory in living lies not in",
  "The way to get started is to quit talking",
  "Your time is limited, so don't waste it ",
  "If life were predictable it would cease",
  "The purpose of our lives is to be happy",
  "Life is what happens when you're busy",
  "Get busy living or get busy dying",
];

const StrStatus = ["approved", "in progress", "in review", "waiting"];

const Todo = () => {
  var element = "<ul>";

  todos.forEach(function (todo) {
    let randomStatus = Math.round(Math.random() * 3);
    element +=
      '<li class="todo"><label class="check"><input type="checkbox" checked="checked"> <span class="checkmark"></span><p>' +
      todo +
      `</p></label><div class="status-${
        randomStatus === 0
          ? "sucess"
          : randomStatus === 1
          ? "primary"
          : randomStatus === 2
          ? "danger"
          : randomStatus === 3
          ? "secondary"
          : ""
      }">${StrStatus[randomStatus]}</div></li>`;
  });

  element += "</ul>";
  document.getElementById("todos").innerHTML = element;
};
document.addEventListener("DOMContentLoaded", () => {
  Todo();
});

const addTodos = () => {
  let number = Math.round(Math.random() * 10);
  todos.push(randomText[number]);

  Todo();
};
