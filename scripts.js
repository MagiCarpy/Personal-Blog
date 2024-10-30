function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openCloseBar() {
    let screen = parent.document.getElementById('contentScreen');
    if (screen.style.minWidth != "0px") {
        showContent(false, screen);
        document.getElementById('sideBarBtn').innerHTML = "&#187;"
        document.getElementById('contentBody').style.overflow = "hidden";
    } else {
        showContent(true, screen);
        document.getElementById('sideBarBtn').innerHTML = "&#171;"
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
        scrn.style.width = "35px";
        myContent.style.pointerEvents = "none";
        
    }
}