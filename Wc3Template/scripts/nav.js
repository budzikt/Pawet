function w3_open() {
    replaceClass(document.getElementById("mySidenav"), "w3-hide", "w3-show");
    replaceClass(document.getElementById("myOverlay"), "w3-hide", "w3-show");
 
}

function w3_close() {
    replaceClass(document.getElementById("mySidenav"), "w3-show", "w3-hide");
    replaceClass(document.getElementById("myOverlay"), "w3-show", "w3-hide");
}

    

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

function replaceClass(element, classToDrop, classToAdd)
{
    if(hasClass(element, classToDrop)){
        removeClass(element, classToDrop);
        addClass(element, classToAdd);
    }
    else{
        addClass(element, classToAdd);
    }
}