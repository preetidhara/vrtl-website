//Condition 1:
//- Check if link's hostname matches current page's hostname.

//Condition 2:
//- Ensure there is no "#" (fragment identifier) in the link's URL.

//Condition 3:
//- Confirm that the link doesn't have "target" set to "_blank.


//<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>



// Code that runs on pageload

/*
gsap.to(".load_grid-item", {
  opacity: 0,
  duration: 0.001,
  stagger: { amount: 0.5, from: "random" },
  onComplete: () => {
    gsap.set(".load_grid", { display: "none" });
  }
});

// Code that runs on click of a link
$(document).ready(function () {
  $("a").on("click", function (e) {
    if (
    	$(this).prop("hostname") === window.location.host &&
      $(this).attr("href").indexOf("#") === -1 &&
      $(this).attr("target") !== "_blank") {
        e.preventDefault();
        let destination = $(this).attr("href");
        gsap.set(".load_grid", { display: "grid" });
        gsap.fromTo(
          ".load_grid-item",
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 0.001,
            stagger: { amount: 0.5, from: "random" }, //you can also try a from: "start" or "end" -- get creative!
            onComplete: () => {
              window.location = destination;
            }
          }
        );
    }
  });
  
  // On click of the back button
  window.onpageshow = function(event){
  	if (event.persisted) {
    	window.location.reload();
    }
  }
});



gsap.to(".load_grid-item", {
    opacity: 0,
    duration: 0.001,
    stagger: { amount: 0.5, from: "random" },
    onComplete: () => {
      gsap.set(".load_grid", { display: "none" });
    }
*/


//Scramble Text animation
const scrambleElements = document.querySelectorAll(".p-scramble");

scrambleElements.forEach(scrambleElement => {
  const scrambleTL = gsap.timeline({ paused: true });

  // Mouse Enter Animation
  scrambleElement.addEventListener('mouseenter', () => {
    scrambleTL.play();
  });

  // Mouse Leave Animation
  scrambleElement.addEventListener('mouseleave', () => {
    scrambleTL.reverse();
  });

  scrambleTL.to(scrambleElement, {
    duration: 1,
    stagger: 0.25,
    scrambleText: {
      speed: 0.8,
      text: "{original}",
      chars: "+?84564XERSHKZN"
    },
    ease: "Power1.easeOut"
  });
});

const scramble_nav = document.querySelectorAll(".nav-text");

scramble_nav.forEach(scramble_nav => {
  const scrambleTL2 = gsap.timeline({ paused: true });

  // Mouse Enter Animation
  scramble_nav.addEventListener('mouseenter', () => {
    scrambleTL2.play();
  });

  // Mouse Leave Animation
  scramble_nav.addEventListener('mouseleave', () => {
    scrambleTL2.reverse();
  });

  scrambleTL2.to(scramble_nav, { // Fixed the reference here
    duration: 0.5,
    stagger: 0.25,
    scrambleText: {
      speed: 0.8,
      text: "{original}",
      chars: "+?84564XERSHKZN"
    },
    ease: "Power1.easeOut"
  });
});

gsap.set(".load-grid", {
  display: "none",
});

const togglebtn = document.querySelector('.main-btn__arrow-w-white');
const fullmenu = document.querySelector('.dark-menu-wrapper');
const nav_anime = document.querySelectorAll('.nav-text');
const scrambleTLL = gsap.timeline({ paused: true });

scrambleTLL.to(nav_anime, {
  duration: 2,
  stagger: 0.25,
  scrambleText: {
    speed: 0.8,
    text: "{original}",
    chars: "+?84564XERSHKZN"
  },
  ease: "Power1.easeOut"
});

togglebtn.addEventListener('click', function () {
  gsap.set(".load-grid", {
    display: "grid",
  });

  gsap.fromTo('.grid-items', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.001,
    stagger: { amount: 0.5, from: "random" },
    onComplete: () => {
      fullmenu.classList.toggle('open');
      gsap.to(".grid-items", {
        opacity: 0,
        duration: 0.001,
        delay:0.35,
        stagger: { amount: 0.5, from: "random" },
        onComplete: () => {
          gsap.set(".load-grid", {
            display: "none"
          });
          if (fullmenu.classList.contains('open')) {
            console.log("Animation should play"); // Debugging line
            scrambleTLL.play();
          } else {
            console.log("Animation should reverse"); // Debugging line
            scrambleTLL.reverse();
          }
          
        }
      });
    }
  });
});

const blocks = document.querySelectorAll(".img-block-item");
const resetDuration = 350;

blocks.forEach((block) => {
  let timeoutID;

  block.addEventListener("mouseover", () => {
    clearTimeout(timeoutID);
    block.classList.add("active");
    timeoutID = setTimeout(() => {
      block.classList.remove("active");
    }, resetDuration);
  });
});


const count = document.querySelector(".counter");
 count.innerText = 1;
 
 setTimeout(() => {
  setInterval(() => {
    if (count.innerText < 100) {
      count.innerText++;
    }
  }, 6);
}, 2);
 
 gsap.to(".counter", 2.5, {
   opacity: 0,
   duration: 5,
   delay: 3.4,
 });

 window.addEventListener('DOMContentLoaded', function() {
  var loadImages = document.querySelectorAll('.load-img-item');

  // Iterate over the images and apply GSAP animations with a delay
  loadImages.forEach(function(image, index) {
    if (index % 2 === 0) {
      // Skew transformation for odd-indexed images with delay
      gsap.to(image, { skewY: -10, duration: 1, delay: 0.7 });
    } else {
      // Skew transformation for even-indexed images with delay
      gsap.to(image, { skewY: 10, duration: 1, delay: 0.7 });
    }
  });
  var dynListWrapper = document.querySelector('.dyn-list-wrapper');

  // Apply GSAP animation for left to right movement
  gsap.to(dynListWrapper, { x: '-480px', duration: 1,delay:1 });
});



gsap.to(".load-img-item", {
 css: { height: 50, 'object-fit': 'fill' },
 duration: 0.4,
 delay: 2.4,
 opacity:0
});

gsap.to(".load-grid-item", {
 delay: 3.5,
 opacity: 0, // Add opacity property//
 duration:0.005,
 onComplete: () => {
  gsap.fromTo('.load-grid-item',{
   //display:"none",
   opacity:1,
   duration:0.003,
   stagger: { amount: 0.5, from: "random" },
  },
  {
    opacity:0,
    duration:0.003,
    stagger: { amount: 0.5, from: "random" },
    onComplete: () => {
      gsap.set('.page-loader-grid',{
        display:"none",
        duration:0.001,
    })
    }

  },
  
  )



  gsap.set('.page-content',{
      display:"none",
      duration:0.001,
  })
 }
});

// Line animation

let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType(".text-container .text-big", {
    types: "lines, words"
  });
  $(".line").append("<div class='line-mask'></div>");
  createAnimation();
}
runSplit();
// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  $(".line").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        // trigger element - viewport
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    });
    tl.to($(this).find(".line-mask"), {
      width: "0%",
      duration: 1
    });
  });
}




