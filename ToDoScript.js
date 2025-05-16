let todo_container = document.getElementById("Todocontainer");
let alert_message = document.getElementById('alert_message');
let exportingJson = [];
let ToDo_Array = [];

//Messages
let non_Entered_Input = "Please Enter Your ToDo item!";
let Successfully_Entered = "Your ToDo item Added Successfully!";
let edited_message = "Your ToDo item Updated Successfully!";
let deleted_message = "Your ToDo item Has Successfully Deleted!";
let Its_Copy = "Don't Enter Same ToDo item again";

function todoItemCreator(ToDo_Input) {
  if (ToDo_Input.value == '') {
    alert_message.innerText = non_Entered_Input;
  } else if (isItCopy(ToDo_Input.value)) {
    alert_message.innerText = Its_Copy;
    ToDo_Input.value = "";
  } else {
    let ToDo_Item_Object = new todoList(ToDo_Input.value);
    let ToDo_Item_Template = `<div class="Todo-item">
          <input type="checkbox" name="is it finished"/>
          <p>${ToDo_Input.value}</p> 
          <span class="edit-button" onclick="editor(this)"> <i class="fas fa-pencil-alt"></i> </span>
          <span onclick="deletor(this)"> <i class="fas fa-trash-alt"></i> </span>
      </div>`;
    ToDo_Array.push(ToDo_Input.value);
    todo_container.insertAdjacentHTML('beforeend', ToDo_Item_Template);
    alert_message.innerText = Successfully_Entered;
    exportingJson.push(ToDo_Item_Object);
    ToDo_Input.value = "";
  }
}

function todoList(ToDo) {
  this.ToDo = ToDo;
  this.Time = new Date().toString();
}

function isItCopy(checking_value) {
  let isCopy = ToDo_Array.includes(checking_value);
  return isCopy;
}

function editor(editingElement) {
  let original = editingElement.previousElementSibling.innerText;
  let replace = prompt("Edit Your ToDo...");
  if (replace != "" && replace != undefined) {
    editingElement.previousElementSibling.innerText = replace;
    alert_message.innerText = edited_message;
  } else {
    editingElement.previousElementSibling.innerText = original;
  }
}

function deletor(deleting_Element) {
  alert_message.innerText = deleted_message;
  deleting_Element.parentNode.remove();
}