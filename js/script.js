 // This function is used to include separate header and footer file
 
$(function (){ 
    $('#mainHeader').load('header.html');
    $('#mainFooter').load('footer.html');
 })

 // ye fuction iss liay hai kay 3 lines burger (mobile screen me) pe click ho to nav items dikhay:

 function toggleMenu() {
    const nav = document.getElementById('navItems');
    nav.classList.toggle('active');
  }
