const header = document.getElementById('indexBody');
const contentBody = document.getElementById('contentScreen');
const textDarkTheme = 'rgb(200, 200, 200)'
const textLightTheme = 'rgb(20, 20, 20)'
const backDarkTheme = 'rgb(20, 20, 20)';
const backLightTheme = 'rgb(255, 255, 255)';

function toggleTheme() {
    if(!localStorage.getItem('dark')) {
        document.body.classList.add("dark_mode")
        localStorage.removeItem('light');
        localStorage.setItem('dark',this.checked)
    } else {
        document.body.classList.remove('dark_mode') 
        localStorage.removeItem('dark');
        localStorage.setItem('light',this.checked);  
    }
    window.location.reload();
}

if(localStorage.getItem('dark')) {
    header.style.color = textDarkTheme;
    contentBody.style.color = textDarkTheme;
    header.style.backgroundColor = backDarkTheme;
    contentBody.style.backgroundColor = backDarkTheme;
  } else {
    header.style.color = textLightTheme;
    contentBody.style.color = textLightTheme;
    header.style.backgroundColor = backLightTheme;
    contentBody.style.backgroundColor = backLightTheme; 
  }

function openCloseBar() {
    let screen = parent.document.getElementById('contentScreen');
    let btn = document.getElementById('sideBarBtn');
    if (screen.style.minWidth != "0px") {
        showContent(false, screen);
        btn.innerHTML = "&#8250;"
        btn.style.paddingRight = "0px";
        screen.style.overflow = "hidden";
    } else {
        showContent(true, screen);
        btn.innerHTML = "&#171;";
        btn.style.paddingRight = "8px";
        screen.style.overflow = "auto";
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
        scrn.style.height = "100%";
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
        category.style.display = "grid";
    } else {
        category.style.visibility = "collapse";
        category.style.height = "0px";
        category.style.display = "none";
    }
}

function goToHome() {
    document.getElementById('postScreen').src = "home.html";
  }

