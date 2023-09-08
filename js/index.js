AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
let isPlaying = false;
music.play();


musicButton.addEventListener("click",function(){
  if (isPlaying) {
    music.pause();
    musicButton.innerHTML = '<i class="las la-2x  la-volume-up text-warning"></i>';
  } else {
    music.play();
    musicButton.innerHTML = '<i class="las la-2x  la-volume-mute text-danger"></i>';
  }
  isPlaying = !isPlaying;

})


