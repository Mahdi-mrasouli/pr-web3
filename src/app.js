
// function mouseOver() {
//     const element = document.querySelector('.sidebar #homeicon');
//     element.classList.add('animate__animated', 'animate__bounce');
//     element.style.setProperty('--animate-duration', '2s');

//     element.addEventListener('animationend', () => {
//         // document.getElementById("homeicon").style.display = 'none';
        
//     });
// }

// function mouseOut() {
//     const element = document.querySelector('.sidebar #homeicon');
//     // element.classList.add('animate__animated', 'animate__heartBeat');
//     // element.style.setProperty('--animate-duration', '2s');
    
// }


function menuToggle() {
    const toggleMenu = document.querySelector('.profile-menu')
    toggleMenu.classList.toggle("active")

    
}


AOS.init();

