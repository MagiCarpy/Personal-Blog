const header = parent.document.getElementById('indexBody');
const contents = parent.document.getElementById('contentScreen');
const posts = parent.document.getElementById('postScreen');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openCloseBar() {
    let screen = parent.document.getElementById('contentScreen');
    let btn = document.getElementById('sideBarBtn');
    if (screen.style.minWidth != "0px") {
        showContent(false, screen);
        btn.innerHTML = "&#8250;"
        btn.style.paddingRight = "0px";
        document.getElementById('contentBody').style.overflow = "hidden";
    } else {
        showContent(true, screen);
        btn.innerHTML = "&#171;";
        btn.style.paddingRight = "8px";
        document.getElementById('contentBody').style.overflow = "auto";
    }
}

function showContent(boolean, scrn) {
    let contentHeader = document.getElementById('contentHeader');
    let myContent = document.getElementById('myContent');
    if (boolean) {
        contentHeader.style.opacity = "1";
        myContent.style.opacity = "1";
        scrn.style.width = "200px";
        scrn.style.minWidth = "200px";
        myContent.style.pointerEvents = "auto";
    } else {
        contentHeader.style.opacity = "0";
        myContent.style.opacity = "0";
        scrn.style.minWidth = "0px";
        scrn.style.width = "15px";
        myContent.style.pointerEvents = "none";
        
    }
}

function closeCategory(elementName) {
    category = document.getElementById(elementName);
    if (category.style.visibility != "visible") {
        category.style.visibility = "visible";
        category.style.height = "auto";
    } else {
        category.style.visibility = "collapse";
        category.style.height = "0px";
    }
}

function goToHome() {
    document.getElementById('postScreen').src = "home.html";
  }


