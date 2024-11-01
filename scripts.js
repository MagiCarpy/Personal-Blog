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
        document.getElementById('contentBody').style.overflowY = "hidden";
    } else {
        showContent(true, screen);
        btn.innerHTML = "&#171;";
        btn.style.paddingRight = "8px";
        document.getElementById('contentBody').style.overflowY = "auto";
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

function goToHome() {
    document.getElementById('postScreen').src = "home.html";
  }