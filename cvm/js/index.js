const items = document.getElementsByClassName('dropdown_item')
const myInput = document.getElementById('myInput')
const myDropdown = document.getElementById('myDropdown')
const radio = document.getElementsByName('radio-button')


function visibleAllList() {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'block';
  }
}

function enabledDisabled() {
  if (document.getElementById('disabled').checked==true) {
    myInput.disabled='disabled';
  }
  if (document.getElementById('enabled').checked==true) {
    myInput.disabled='';
  }
};

function hideAllList(el) {
  if ((el.target.id == !'myDropdown') && (document.getElementById('enabled').checked==true)) {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
  }
}

function selectedItem(el) {
  if (el.target.className == 'dropdown_item') {
    myInput.value = document.getElementById(el.target.id).innerText;
    // console.log(document.getElementById(el.target.id).innerText);
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
  };
};


function filter() {
  let a = myDropdown.getElementsByTagName('a');
  for (let i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = 'block';
      } else {
        a[i].style.display = 'none';
      }
    }
}



myInput.addEventListener('click', visibleAllList);
document.addEventListener('click', (el) => hideAllList(el));
document.addEventListener('click', (el) => selectedItem(el));
document.addEventListener('click', enabledDisabled);
myInput.addEventListener('keydown', filter);


