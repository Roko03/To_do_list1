let container = document.querySelector('.container');
let todoText = document.querySelector('.todo_text');
let input = document.querySelector('#input');
let result = document.querySelector('.result');
// let trash = document.querySelector('.trash');
//let save = document.querySelector('.save');
let submit = document.querySelector('.submit');


let array = [];
let counter = 0;

let toDoContentSpremljeno = localStorage.getItem('arrayys');
if(toDoContentSpremljeno !== null){
    array = JSON.parse(toDoContentSpremljeno);
}

submit.addEventListener('click', function(event){
    event.preventDefault();
    let value = input.value;
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
    counter++;

    const content ={
        input: value,
        date: currDate,
        number: counter
    }

    array.push(content);

    let element = 
        `<div class="todo_box">
            <div class="box">
                <div class="box_text">
                    <div class="chech_box">
                        <input type="checkbox" class="checkbox">
                    </div>
                    <div class="text">
                        <p class="result">`+value+`</p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="edit">Edit</button>
                    <button class="trash"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="box_date">
                <div class="date">
                    <p class="date">`+currDate+`</p>
                </div>
                <button class="save">Save</button>
            </div>
        </div>`;

    todoText.innerHTML += element;

    
    localStorage.setItem('arrayys', JSON.stringify(array));
    
    input.value = "";
    
});

console.log(array);

// function main(){

//     for(let arr of array){
//         values = arr.input;
//         dates = arr.date;
//         counter++;

//         let element = 
//         `<div class="todo_box">
//             <div class="box">
//                 <div class="box_text">
//                     <div class="chech_box">
//                         <input type="checkbox" class="checkbox">
//                     </div>
//                     <div class="text">
//                         <p class="result">`+values+`</p>
//                     </div>
//                 </div>
//                 <div class="buttons">
//                     <button class="edit">Edit</button>
//                     <button class="trash"><i class="fas fa-trash"></i></button>
//                 </div>
//             </div>
//             <div class="box_date">
//                 <div class="date">
//                     <p class="date">`+dates+`</p>
//                 </div>
//                 <button class="save">Save</button>
//             </div>
//         </div>`;

//         todoText.innerHTML += element;
//     }
// }

// main();

if(toDoContentSpremljeno !== null){
    array = JSON.parse(toDoContentSpremljeno);

    array.forEach(item=>{
        let element = 
            `<div class="todo_box">
                <div class="box">
                    <div class="box_text">
                        <div class="chech_box">
                            <input type="checkbox" class="checkbox">
                        </div>
                        <div class="text">
                            <p class="result">${item.input}</p>
                        </div>
                    </div>
                    <div class="buttons">
                        <button class="edit">Edit</button>
                        <button class="trash"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="box_date">
                    <div class="date">
                        <p class="date">${item.date}</p>
                    </div>
                    <button class="save">Save</button>
                </div>
            </div>`;

        todoText.innerHTML += element;
        addListeners();
    });


}

function addListeners(){
    let trash = document.querySelectorAll('.trash');
    let edit = document.querySelectorAll('.edit');
    let save = document.querySelectorAll('.save');
    
    
    trash.forEach(element=>{
        element.addEventListener('click',function(){
            let todoBox = document.querySelector('.todo_box');
            //let todoText = document.querySelector('.todo_text');
            for(let arr of array){
                let numb = arr.number - 1;
                console.log(numb);
                array.splice(numb, 1);
                localStorage.setItem('arrayy', JSON.stringify(array));
            }

            todoBox.parentNode.removeChild(todoBox);
        });
    });
    

    edit.forEach(element =>{
        element.addEventListener('click', editText);
    });

    save.forEach(element =>{
        element.addEventListener('click', saveChanges);
    });
}

function editText(){
    let text = document.querySelector('.text');
    let result = document.querySelector('.result');
    let resultValue = result.innerHTML;
    let textInput = document.createElement('textarea');
    textInput.classList.add('new_input');
    textInput.value = resultValue;
    text.replaceChild(textInput, result);

    textInput.addEventListener("keyup", e => {
        textInput.style.height = "2.4em";
        let scHeight = e.target.scrollHeight;
        textInput.style.height = `${scHeight}px`;
    });

    
}

function saveChanges(){
    array = JSON.parse(toDoContentSpremljeno);

    let text = document.querySelector('.text');
    let textInput = document.querySelector('.new_input');
    let result = document.createElement('p');
    let value = textInput.value;
    result.classList.add('result');
    result.innerHTML = value;
    text.replaceChild(result, textInput);

    for(let arr of array){
        arr.input = value;
        localStorage.setItem('arrayys', JSON.stringify(array));
    }
    
}

