const navbarToggle=document.querySelector('.navbar-toggle');
const navbarMenu=document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click',() =>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    
}
)

// async function lockLandscape() {
//   try {
//     // Phase 1: Must enter fullscreen first
//     await document.documentElement.requestFullscreen();
    
//     // Phase 2: Lock the orientation
//     await screen.orientation.lock("landscape");
    
//     console.log("Landscape locked!");
//   } catch (error) {
//     console.error("Orientation lock failed:", error);
//   }
// }



