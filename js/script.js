// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
   {text: 'catalog', href: '/catalog'},
   {text: 'orders', href: '/orders'},
   {text: 'account', href: '/account'},
  ];


// task 1
let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")


// task 2 
let topMenuEl = document.querySelector("#top-menu")
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");



// task 3.1 
// // Menu data structure
// var menuLinks = [
    //{text: 'about', href: '/about'},
   // {text: 'catalog', href: '/catalog'},
   // {text: 'orders', href: '/orders'},
   // {text: 'account', href: '/account'},
  //];

for (let link of menuLinks) {
const aTag = document.createElement('a')
aTag.setAttribute('href', link.href)
aTag.textContent = link.text
topMenuEl.append(aTag) 
}



