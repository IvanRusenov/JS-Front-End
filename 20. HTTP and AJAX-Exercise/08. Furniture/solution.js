function solve() {

  window.reload();
 
  const BASE_URL = "http://localhost:3030/data/furniture";

  let person = {
    username: "ivan",
    password: "2"
  }
 
  let pages = {
    home: "home.html",
    homeLogged: "homeLogged.html",
    login: "login.html",
    template: "template.html"
  }


  function changePage(pageHref) {
    window.location.href = pageHref;
  }

  function isUserLogged() {
    if(person.username === "ivan" && person.password === "1"){
      return true;
    }

    return false;
  }
 
  if(isUserLogged){
    changePage(pages.homeLogged);
  }else{
    console.log("exooo");
   changePage(pages.home);
  
  }

  let btn = document.querySelector("form button");
  console.log(btn);

  

// load();

//   function load() {

//     fetch(BASE_URL)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//       })
//   }

//   function createRow() {
//     console.log("haha")
//   }
}