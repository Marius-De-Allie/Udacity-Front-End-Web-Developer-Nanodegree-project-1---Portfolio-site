console.log('JS script loaded');
// Select projects-container DOM element nodes and assign to variable
// const projectContainers = document.querySelectorAll('.projects-container');
const projectContainers = document.querySelectorAll('.project');
console.log(projectContainers);

// Commit - Loop through nodelist projects projectContainers
for(let element of projectContainers) {
  element.addEventListener('mouseover', function(evt) {
    element.classList.add('hover');
    console.log('project container moused over');
  });
};

for(let element of projectContainers) {
  element.addEventListener('mouseout', function(evt) { // evt handler to remove hover class from element when mouse leaves element
    element.classList.remove('hover');
    console.log('project container moused out');
  });
};


// // 60 commit - handler on active id to disable link
// const activeMenuEL = document.querySelector('#active');

// // Event handler
// activeMenuEL.addEventListener('click', function(evt) {
//   console.log('active hovered over.');
//   evt.preventDefault();
//   evt.stopPropagation();
//   return false;
// });

const navMenuEl = document.querySelectorAll('a.item');
console.log(navMenuEl);
const navArray = Array.from(navMenuEl);
console.log(navArray);

const onMenuClick = (e) => {
  navArray.forEach(el => el.classList.remove('active'));
  e.target.classList.add('active')
  console.log(`${e.target} clicked`)
}

document.querySelector('#nav-menu').addEventListener('click', onMenuClick);
// navArray.addEventListener('click', onMenuClick );

const homeLink = document.querySelector('a.item');
// let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
// window.addEventListener("scroll",() => {
//   if(document.documentElement.scrollTop === 0){
//     navArray.forEach(el => el.classList.remove('active'));
//     homeLink.classList.add('active');
//   }
// });

$(window).scroll((event) => {
  let scroll = $(window).scrollTop();
  if(scroll <= 200) {
    navArray.forEach(el => el.classList.remove('active'));
    homeLink.classList.add('active');
    console.log('change');

    
  } else {
    // do nothing
  }
  console.log(scroll)
  // Do something
});