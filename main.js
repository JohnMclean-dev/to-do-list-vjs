function makeid() {

    // setup to create new id
    var newId = ''
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var charsLen = chars.length

    // generate new id
    for (var i = 0; i < 36; i++) {
        var rando = Math.floor(Math.random() * charsLen + 1)
        newId += chars[rando]
    }

    return newId
};

// create list of tasks

function addToList() {

    // read task from seach bar
    let newTask = document.getElementById('textBar').value

    // create new task with id
    var task = {
        id: makeid(),
        item: newTask,
    }

    let list = document.getElementById('taskList');

    let button = document.createElement('button')
    button.innerText = 'x'
    button.id = task['id']

    let li = document.createElement('li')
    li.innerText = task['item']
    li.appendChild(button)

    list.appendChild(li)

};