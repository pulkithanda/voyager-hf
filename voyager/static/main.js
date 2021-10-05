const container = document.getElementById('.elementID'); 
if(window.innerWidth < 999){
    container.innterHTML = '';
    container.innterHTML = `<p>New Text</p>`;
  }


/*  
  JavaScript source code for the video gallery section
  Source : https://codemyui.com/bay-window-style-image-slider-with-scroll-effect/
  Author : Tom Miller
*/

$(document).ready(function(){gsap.timeline()
  .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
  .set('.ring_img',  { // apply transform rotations to each image
    rotateY: (i)=> i*-36,
    transformOrigin: '50% 50% 500px',
    z: -500,
    // backgroundImage:(i)=>'url(https://pic.clubic.com/v1/images/1859638/raw)',
    backgroundPosition:(i)=>getBgPos(i),
    backfaceVisibility:'hidden'
  })    
  .from('.ring_img', {
    duration:1.5,
    y:200,
    opacity:0,
    stagger:0.1,
    ease:'expo'
  })
  .add(()=>{
    $('.ring_img').on('mouseenter', (e)=>{
      let current = e.currentTarget;
      gsap.to('.ring_img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
    })
    $('.ring_img').on('mouseleave', (e)=>{
      gsap.to('.ring_img', {opacity:1, ease:'power2.inOut'})
    })
  }, '-=0.5')})

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
      

function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.ring', {cursor:'grabbing'})
  $(window).on('mousemove touchmove', drag);
}


function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gsap.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUpdate:()=>{ gsap.set('.ring_img', { backgroundPosition:(i)=>getBgPos(i) }) }
  });
  
  xPos = Math.round(e.clientX);
}


function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
  gsap.set('.ring', {cursor:'grab'});
}


function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}

/*  
  JavaScript source code for the "left/right" mouse effect in the video gallery section.
  Tweaked a bit for proper integration.
  Source : https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-manipulate-cursor-appearance-with-css--cms-31825
  Author : George Martsoukos
*/

window.addEventListener("load", init);

function init() {
  const gallery = document.getElementById("video_gallery");
  const width = gallery.offsetWidth;
  const halfImgWidth = width / 2;

  gallery.addEventListener("mousemove", function(e) {
    const xPos = e.pageX - gallery.offsetLeft;
    /*IE11 need this*/
    //this.classList.remove("cursor-prev");
    //this.classList.remove("cursor-next");
    this.classList.remove("cursor-prev", "cursor-next");
    if (xPos > halfImgWidth) {
      this.classList.add("cursor-next");
    } else {
      this.classList.add("cursor-prev");
    }
  });
}