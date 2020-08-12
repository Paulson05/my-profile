
const tabitems = document.querySelectorAll(".tab-item");
const tabContentitems = document.querySelectorAll(".tab-content-item");
function selectItem(e){
    removeBorder();
    removeShow();
 this.classList.add("tab-border");
  const tabContentitems = document.querySelector(`#${this.id}-content`);
  tabContentitems.classList.add("show");
}
function removeBorder(){
    tabitems.forEach(item =>item.classList.remove("tab-border"));
}
function removeShow(){
    tabContentitems.forEach(item =>item.classList.remove("show"));
}
tabitems.forEach(item => item.addEventListener
    ("click", selectItem));
