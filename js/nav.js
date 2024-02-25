function openNav() {
  if (window.innerWidth < 750) {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "100%";
  } else {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "60%";
  }
}

function exitNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("sideNav").style.width = "0";
}