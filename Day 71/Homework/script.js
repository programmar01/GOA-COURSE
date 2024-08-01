const listDiv = document.getElementById('list');
const form = document.getElementById('form');
const myBtn = document.getElementById('mybtn');
let tasks = [];

const addChild = function(text){
    const pNode = document.createElement('p');
    const textNode = document.createTextNode(text);

    pNode.appendChild(textNode);
    tasks.push(pNode);
    listDiv.appendChild(pNode);

    console.log(tasks)

    pNode.addEventListener('click', function(){
        listDiv.removeChild(pNode)
    });

    pNode.addEventListener('auxclick', function(){
        let replacement = prompt("What do you want to set instead")
        listDiv.removeChild(pNode)
        listDiv.appendChild(document.createTextNode(replacement), pNode)
    });

    myBtn.addEventListener('click', function(){
        listDiv.removeChild(pNode);
        tasks = [];
        console.log(tasks)
    });
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const input = form.elements.task;
    addChild(input.value);

    input.value = '';
});
