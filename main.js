let db = [
  {
    id : "1",
    name : "Danilo",
    deposit : "11000",
    cCard : "Visa"
  },
  {
    id : "2",
    name : "Milica",
    deposit : "22000",
    cCard : "Master"
  }
];
let mainTbody = document.querySelector('#mainTbody');
let accBtn = document.querySelector('#accBtn');
let addAccBtn = document.querySelector('#addAccBtn');
let editDeleteBtn = document.querySelector('#editDeleteBtn');
let mainRow = document.querySelector('#mainRow');
let formRow = document.querySelector('#formRow');
let formBtn = document.querySelector('#formBtn');
let formId = document.querySelector('#formId');
let formName= document.querySelector('#formName');
let formDeposit = document.querySelector('#formDeposit');
let formCcard = document.querySelector('#formCcard');
let editRow = document.querySelector('#editRow');
let editTbody = document.querySelector('#editTbody');
let editFormRow = document.querySelector('#editFormRow');
let editFormId = document.querySelector('#editFormId');
let editFormName = document.querySelector('#editFormName');
let editFormDeposit = document.querySelector('#editFormDeposit');
let editFormCcard = document.querySelector('#editFormCcard');
let editFormBtn = document.querySelector('#editFormBtn');
let index = '';

//events
addAccBtn.addEventListener('click',showFormRow);
accBtn.addEventListener('click',showMainRow);
formBtn.addEventListener('click',addAccountToDb);
editDeleteBtn.addEventListener('click',showEditRow);
editFormBtn.addEventListener('click', editAccount);

function showEditRow() {
  mainRow.style.display = "none";
  formRow.style.display = "none";
  editRow.style.display = "block";
  editFormRow.style.display = "none";
  createEditTable();
}

function addAccountToDb() {
  db.push({
    id : formId.value,
    name : formName.value,
    deposit : formDeposit.value,
    cCard : formCcard.value
  })
  formId.value = "";
  formName.value = "";
  formDeposit.value = "";
  formCcard.value = "";
  createTable();
  showMainRow();
}

function showFormRow() {
  formRow.style.display = "block";
  mainRow.style.display = "none";
  editRow.style.display = "none";
  editFormRow.style.display = "none";
}

function showMainRow() {
  formRow.style.display = "none";
  mainRow.style.display = "block";
  editRow.style.display = "none";
  editFormRow.style.display = "none";
}

createTable();

function createTable() {
  let text = '';
  for (var i = 0; i < db.length; i++) {
    text += '<tr>';
    text += '<td>'+db[i].id+'</td>';
    text += '<td>'+db[i].name+'</td>';
    text += '<td>'+db[i].deposit+'</td>';
    text += '<td>'+db[i].cCard+'</td>';
    text += '</tr>';
  }
  mainTbody.innerHTML = text;
}

function createEditTable() {
  let text = '';
  for (var i = 0; i < db.length; i++) {
    text += '<tr>';
    text += '<td>'+db[i].id+'</td>';
    text += '<td>'+db[i].name+'</td>';
    text += '<td>'+db[i].deposit+'</td>';
    text += '<td>'+db[i].cCard+'</td>';
    text += '<td><button data-index="'+i+'" class="delete btn btn-danger btn-sm">Delete</button></td>';
    text += '<td><button data-index="'+i+'" class="edit btn btn-warning btn-sm">Edit</button></td>';
    text += '</tr>';
  }
  editTbody.innerHTML = text;
  let deleteBtns = document.querySelectorAll('.delete');
  let editBtns = document.querySelectorAll('.edit');
  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', removeAccount);
    editBtns[i].addEventListener('click', showEditForm);
  }
}

function removeAccount() {
  index = this.getAttribute('data-index');
  db.splice(index,1);
  createTable();
  showMainRow();
}

function showEditForm() {
  formRow.style.display = "none";
  mainRow.style.display = "none";
  editRow.style.display = "none";
  editFormRow.style.display = "block";

  index = this.getAttribute('data-index');
  editFormId.value = db[index].id;
  editFormName.value = db[index].name;
  editFormDeposit.value = db[index].deposit;
  editFormCcard.value = db[index].cCard;
}


function editAccount() {
  let id = editFormId.value;
  let name = editFormName.value;
  let deposit = editFormDeposit.value;
  let cCard = editFormCcard.value;

  db[index] = {
    id : id,
    name : name,
    deposit : deposit,
    cCard : cCard
  }
  createTable();
  showMainRow();
}
