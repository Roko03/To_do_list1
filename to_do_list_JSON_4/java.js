let submit = document.querySelector('.submit');
let todoText = document.querySelector('.todo_text');

submit.addEventListener('click',function(){

    makeTodo();

    listeners();
    
    input.value = "";
});


function makeTodo(){
    let todoBox = document.createElement('div');
    todoBox.classList.add('todo_box');
    todoText.appendChild(todoBox);

    let box = document.createElement('div');
    box.classList.add('box');
    todoBox.appendChild(box);

    let boxText = document.createElement('div');
    boxText.classList.add('box_text');
    box.appendChild(boxText);

    let text = document.createElement('div');
    text.classList.add('text');
    boxText.appendChild(text);

    let result = document.createElement('p');
    let value = input.value;
    result.classList.add('result');
    result.innerHTML = value;
    text.appendChild(result);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    box.appendChild(buttons);

    let edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = "Edit";
    buttons.appendChild(edit);


    let trash = document.createElement('button');
    trash.classList.add('trash');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    buttons.appendChild(trash);


    let boxDate = document.createElement('div');
    boxDate.classList.add('box_date');
    todoBox.appendChild(boxDate);

    let date = document.createElement('p');
    date.classList.add('date');
    let d = new Date();

    var dd=d.getDate();
    var mm=d.getMonth() + 1;
    var yyyy=d.getFullYear();

    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 

    currDate=dd + "/" +mm+"/"+yyyy;

    date.innerHTML = currDate;
    boxDate.appendChild(date);

    let save = document.createElement('button');
    save.classList.add('save');
    save.innerHTML = "Save";
    boxDate.appendChild(save);

}

function listeners(){

    let todoBox = document.querySelectorAll('.todo_box');
    let trash = document.querySelectorAll('.trash');
    let save = document.querySelectorAll('.save');
    
    
    trash.forEach(element=>{
        element.addEventListener('click',trashBox);
    });

    todoBox.forEach(element=>{
        element.addEventListener('click',function(e){
            let target = e.target;
            if(target.classList == 'edit'){
                
                editText(target);

            } else if (target.classList == 'save'){

                saveChanges(target);
            }
        })
    });

    // todoBox.addEventListener('click', function(e){
    //     let target = e.target;
    //     if(target.classList == 'edit'){
    //         editText(target);

    //     } else if (target.classList == 'save'){

    //         saveChanges();
    //     }
    // });

    // edit.forEach(element =>{
    //     element.addEventListener('click', editText);
    // });

    // save.forEach(element =>{
    //     element.addEventListener('click', saveChanges);
    // });

    // edit.addEventListener('click', editText);
    // trash.addEventListener('click', trashBox);
    // save.addEventListener('click', saveChanges);
}

function editText(target){
    let todo = target.parentElement;
    let todo2 = todo.parentElement;
    let todo3 = todo2.parentElement;
    console.log(todo3);

    let box = document.createElement('div');
    box.classList.add('box');
    todo3.replaceChild(box,todo2);

    let boxText = document.createElement('div');
    boxText.classList.add('box_text');
    box.appendChild(boxText);

    let text = document.createElement('div');
    text.classList.add('text');
    boxText.appendChild(text);

    // let result = document.createElement('p');
    
    // result.classList.add('result');
    // result.innerHTML = value;
    // text.appendChild(result);


    // let result = document.querySelector('.result');
    // let resultValue = result.innerHTML;
    let textInput = document.createElement('textarea');
    textInput.classList.add('new_input');
    text.appendChild(textInput);

    textInput.addEventListener("keyup", e => {
        textInput.style.height = "2.4em";
        let scHeight = e.target.scrollHeight;
        textInput.style.height = `${scHeight}px`;
    });

    
    //let text = document.querySelector('.text');
    //let result = document.querySelector('.result');
    //let resultValue = result.innerHTML;
    //let textInput = document.createElement('textarea');
    //textInput.classList.add('new_input');
    //textInput.value = resultValue;
    //todo2.replaceChild(box, todo2);

    // textInput.addEventListener("keyup", e => {
    //     textInput.style.height = "2.4em";
    //     let scHeight = e.target.scrollHeight;
    //     textInput.style.height = `${scHeight}px`;
    // });
}

function trashBox(){
    let div = this.parentNode;
    let boxx = div.parentElement;
    let box = boxx.parentElement;
    box.parentNode.removeChild(box);
}

function saveChanges(target){
    let text = document.querySelector('.text');
    let textInput = document.querySelector('.new_input');
    let result = document.createElement('p');
    let value = textInput.value;
    result.classList.add('result');
    result.innerHTML = value;
    text.replaceChild(result, textInput);
}
