
var list = document.getElementById('list')

var array = [];

function acceptData() {
  array.push({
    text: todoInp.value,
  });
  localStorage.setItem("data", JSON.stringify(array));
  console.log(array);
  todoApp();
}

function todoApp() {
  var todoInp = document.getElementById("todoInp");

  //creat li tag with text node
  var li = document.createElement("li")
  var li_text = document.createTextNode(todoInp.value);
  li.appendChild(li_text);

  //creat delete button
  var delbtn = document.createElement("button");
  var deltext = document.createTextNode("  Delete");
  delbtn.appendChild(deltext);
  delbtn.setAttribute("class", "btn");
  delbtn.setAttribute("onclick", "delbutton(this)");

  // create edit button
  var edit_btn = document.createElement("button");
  var edit_text = document.createTextNode("Edit");
  edit_btn.appendChild(edit_text);
  edit_btn.setAttribute("onclick", "edit_btn(this)");

  list.appendChild(li);
  li.appendChild(delbtn);
  li.appendChild(edit_btn);
  todoInp.value = "";
  console.log(li);
}

function del_all() {}

function delbutton(e) {
  e.parentNode.remove();
}

function edit_btn(e){
    var val = prompt("Enter updated value :" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
    
}
function del_all(){
    list.remove()
    //list.innerHTML = "" yeh bhi kr sakhty hain
}
