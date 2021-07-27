//------------------------------------------------------------------------------
// I changed it so everything is in dark mode when switching between light and
// dark, this is so that you cant switch back to light mode.
//------------------------------------------------------------------------------


let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
	  document.documentElement.setAttribute('data-theme', 'dark');
	   // document.getElementById("theme-toggle").innerHTML = "Light Mode";
   	sessionStorage.setItem('theme', '');
  } else {
	  document.documentElement.setAttribute('data-theme', 'dark');
    // document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

//------------------------------------------------------------------------------
//the function to change between light mode and dark mode
//------------------------------------------------------------------------------
//function modeSwitcher() {
	//let theme = sessionStorage.getItem('theme');
	//if (theme === "dark") {
		//document.documentElement.setAttribute('data-theme', 'dark');
		//sessionStorage.setItem('theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	//}	else if (theme === "light") {
		//document.documentElement.setAttribute('data-theme', 'dark');
		//sessionStorage.setItem('theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = "Light Mode";
	//} else if (systemInitiatedDark.matches) {
		//document.documentElement.setAttribute('data-theme', 'dark');
		//sessionStorage.setItem('theme', 'dark');
		//let theme = sessionStorage.getItem('theme');
		//console.log("this was triggered");
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	//} else {
		//document.documentElement.setAttribute('data-theme', 'dark');
		//sessionStorage.setItem('theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = "Light Mode";
	//}
//}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").checked = false;
	// document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").checked = true;
	// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}