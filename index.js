var coll = document.getElementsByClassName("collapsible");
var i;
var y = document.getElementsByClassName("arrow");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    this.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
console.log(y);
