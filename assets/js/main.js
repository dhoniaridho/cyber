const todos = [
    "Love For All, Hatred For None",
    "Change the world by being yourself.",
    "Every moment is a fresh beginning.",
]

const randomText = [
    "Love For All, Hatred For None",
    "Change the world by being yourself.",
    "Every moment is a fresh beginning.",
    "Never regret anything that made you smile",
    "Die with memories, not dreams",
    "Aspire to inspire before we expire.",
    "The greatest glory in living lies not in never falling",
    "The way to get started is to quit talking and begin doing",
    "Your time is limited, so don't waste it living someone else's life",
    "If life were predictable it would cease to be life,",
    "The purpose of our lives is to be happy",
    "Life is what happens when you're busy making other plans",
    "Get busy living or get busy dying"
]

document.addEventListener('DOMContentLoaded', ()=>{

        var element = '<ul>'
    
        todos.forEach(function (todo) {
            element += '<li class="todo"><label class="check"><input type="checkbox" checked="checked"> <span class="checkmark"></span><p>' + todo + '</p></label></li>'
        });
    
        element += '</ul>';
        document.getElementById("todos").innerHTML = element
    
})

const addTodos= ()=>{
    let number = Math.round(Math.random()*10)
    todos.push(randomText[number])
    
    var element = '<ul>'
    
    todos.forEach((todo)=> {
        element += '<li class="todo"><label class="check"><input type="checkbox" checked="checked"> <span class="checkmark"></span><p>' + todo + '</p></label></li>';
    });

    element += '</ul>';
    document.getElementById("todos").innerHTML = element
}


