function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openCloseBar() {
    let screen = parent.document.getElementById('contentScreen');
    if (screen.style.minWidth != "0px") {
        showContent(false, screen);
        document.getElementById('sideBarBtn').innerHTML = "&#187;"
    } else {
        showContent(true, screen);
        document.getElementById('sideBarBtn').innerHTML = "&#171;"
    }
}

function showContent(boolean, scrn) {
    if (boolean) {
        document.getElementById('myContent').style.opacity = "1";
        document.getElementById('contentHeader').style.opacity = "1";
        scrn.style.width = "200px";
        scrn.style.minWidth = "200px";
    } else {
        document.getElementById('myContent').style.opacity = "0";
        document.getElementById('contentHeader').style.opacity = "0";
        scrn.style.minWidth = "0px";
        scrn.style.width = "35px";
    }
}