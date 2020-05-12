const items = document.querySelectorAll('#myDropdown a.dropdown_item');
const myInput = document.getElementById('myInput');
const dropdownList = document.querySelector('.dropdown_list');
const radioEnabled = document.getElementById('enabled');
const radioDisabled = document.getElementById('disabled');

radioEnabled.onclick=()=>{myInput.disabled = ''};
radioDisabled.onclick=()=>{myInput.disabled = 'disabled'};

function visibleAllList() {
  items.forEach(element => {
    element.classList.remove('hide-element')
  });
};

function hideAllList() {
  if ((event.target.id == !'dropdownList') && (document.getElementById('enabled').checked === true)) {
    items.forEach(element => {
      element.classList.add('hide-element');
    });
  };
};

function selectedItem() {
  myInput.value = document.getElementById(event.target.id).innerText;
  items.forEach(element => {
    element.classList.add('hide-element');
  });
};

function filter() {
  for (let i = 0; i < items.length; i++) {
    if (items[i].innerHTML.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1) {
      items[i].classList.remove('hide-element');
    }
    else {
      items[i].classList.add('hide-element');
    };
  };
};

myInput.addEventListener('click', visibleAllList); //+
document.addEventListener('click', hideAllList); //+
dropdownList.addEventListener('click', selectedItem); //+
myInput.addEventListener('keyup', filter); //+