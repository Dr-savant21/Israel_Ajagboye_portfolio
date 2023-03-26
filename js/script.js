// const navBar = document.querySelector('#navScrollSpy');
// const sections = document.querySelector('.sect')
// if (document.body.offsetHeight == '100px'){
//     navBar.classList.toggle('sticky')
// }
// navBar.addEventListener('scroll',scrollevent)
// function scrollevent(){
//     navBar.classList.toggle('sticky')
// }

// function nameLoop(){
//     let intro = ['I',' ', 'a','m',' ','I','s','r','a','e','l',' ','A','j','a','b','g','b','o','y','e']
//     let newintro = ''
//     for (let i=0; i<intro.length; i++){
//         newintro += intro[i];
//         console.log(newintro)
//     }
//     const myName = document.getElementById('name');
//     myName.innerHTML = newintro
//     myName.style.color = 'red';
// }
// setTimeout(nameLoop,5000);
// nameLoop();
// let intro = ['I',' ', 'a','m',' ','I','s','r','a','e','l',' ','A','j','a','b','g','b','o','y','e']
// function designerName(){
//     for (let i=0; i<intro.length; i++) {
//         let newintro = ''
//         newintro = intro[i];
//         // console.log(newintro)
//         const myName = document.getElementById('name');
//         myName.innerHTML = newintro
//         myName.style.color = 'red';
//     }
// }
// setInterval(designerName,1000)

// var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
//     part,
//     i = 0,
//     offset = 0,
//     len = words.length,
//     forwards = true,
//     skip_count = 0,
//     skip_delay = 15,
//     speed = 70;
// var wordflick = function () {
//   setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     }
//     else {
//       if (offset == 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       }
//       else {
//         offset--;
//       }
//     }
//     $('.word').text(part);
//   },speed);
// };

// $(document).ready(function () {
//   wordflick();
// });