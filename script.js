const elTodoTemplate = document.querySelector(".js-todo-template").content;
const elTodoForm = document.querySelector(".js-todo-form");
const elTodoInp = elTodoForm.querySelector(".js-todo-input");
const elResultOrRender = document.querySelector(".js-todo-iteam");

// malumodlar dom ga render bo'lish formulasi //
let count = 1;
function handeTodoList(form) {
  let arr = [];
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const copyNodeList = elTodoTemplate.cloneNode(true);
    const todoInpValue = count + ". " + elTodoInp.value.trim();
    copyNodeList.querySelector(".js-todo-type").textContent = todoInpValue;
    elResultOrRender.appendChild(copyNodeList);

    let obj = {
      name: todoInpValue,
    };
    arr.push(obj);
    console.log(arr);

    count++;
    elTodoInp.value = "";
  });
}
handeTodoList(elTodoForm);

// malumodlar delete bo'lish formulasi //
elResultOrRender.addEventListener("click", function (evt) {
  if (evt.target.matches(".js-delete-btn")) {
    evt.target.parentNode.remove();
  } else {
    console.log("xato!!!");
  }
});

// * * * CONTACT LIST * * * //

const docFrg = document.createDocumentFragment();
const elConTemplate = document.querySelector(".js-contact-template").content;
const elConForm = document.querySelector(".js-contact-form");
const elConInpName = elConForm.querySelector(".js-inp-name");
const elConInpDatalist = elConForm.querySelector(".js-contact-datalis");
const elConInpNumnber = elConForm.querySelector(".js-contact-pnumebr");
const elResult = document.querySelector(".js-contact");

let counts = 1;
let array = [];
function handelContactBook(conForm) {
  conForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const copyContactList = elConTemplate.cloneNode(true);
    const contactInpValue = elConInpName.value.trim();
    const contactDatalistValue = elConInpDatalist.value.trim();
    const contactInpNumberValue = elConInpNumnber.value;

    copyContactList.querySelector(".js-contact-name").textContent =
      counts + ". " + contactInpValue;
    copyContactList.querySelector(".js-contact-near").textContent =
      contactDatalistValue;
    copyContactList.querySelector(".js-contact-number").textContent =
      contactInpNumberValue;

    docFrg.appendChild(copyContactList);
    elResult.appendChild(docFrg);

    let object = {
      name: contactInpValue,
      datalist: contactDatalistValue,
      number: contactInpNumberValue,
    };

    // o'xshsh raqam shart //

    if (array.some((item) => item.number === contactInpNumberValue)) {
      alert("change your number");
    }

    array.push(object);
    console.log(array);
    counts++;
    elConInpName.value = "";
    elConInpDatalist.value = "";
    elConInpNumnber.value = "";
  });
}
handelContactBook(elConForm);

// contact malumodlarni delete qilish //
elResult.addEventListener("click", function (evt) {
  if (evt.target.matches(".ja-contact-delete")) {
    evt.target.parentNode.remove();
  }
});
