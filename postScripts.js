const textDarkTheme = 'rgb(200, 200, 200)'
const textLightTheme = 'rgb(20, 20, 20)'
const backDarkTheme = 'rgb(20, 20, 20)';
const backLightTheme = 'rgb(255, 255, 255)';
const postBody = document.getElementById("postBody");

if(localStorage.getItem('dark')) {
    postBody.style.backgroundColor = backDarkTheme;
    postBody.style.color = textDarkTheme;
  } else {
    postBody.style.backgroundColor = backLightTheme;
    postBody.style.color = textLightTheme;
  }