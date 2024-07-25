

function loco(){
    (function(){
        const locomotiveScroll = new LocomotiveScroll()
    })();
}

function loaderani(){
    gsap.from(".clip-top, .clip-bottom", 2,{
        delay:1,
        height:"50vh",
        ease:"power4.inOut"
    });
    gsap.to(".marpuee", 3.5,{
        delay:0.75,
        top:"50%",
        ease:"power4.inOut"
    })
    gsap.from(".clip-top .marpuee, .clip-bottom .marpuee", 5,{
        delay:1,
        left:"100%",
        ease:"power3.inOut"
    })
   
    gsap.from(".clip-center .marpuee", 5,{
        delay:1,
        left:"-50%",
        ease:"power3.inOut"
    })
    
    gsap.to(".clip-top", 2,{
        delay:6,
        clipPath:"inset(0 0 100% 0)",
        ease:"power4.inOut"
    })
    
    gsap.to(".clip-bottom", 2,{
        delay:6,
        clipPath:"inset(100% 0 0 0)",
        ease:"power4.inOut"
    })
    
    gsap.to(".clip-top .marpuee, .clip-bottom .marpuee, .clip-center", 1,{
        delay:6,
        opacity:"0",
        ease:"power2.inOut"
    })
    gsap.to(".loader", 1,{
        delay:6,
        display:"none"
    })
}

loaderani()

function mousemoveani(){
    let cursor = document.querySelector(".cursor");
    let menubtns = document.querySelectorAll(".menubtn");
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    window.addEventListener("mousemove", function(dets) {
        setTimeout(() => {
            cursor.style.left = dets.x + "px";
            cursor.style.top = dets.y + "px";
    
        }, 100);
    })
    // scroll kelyavr blur effect add kraycha ahe lakshat thev
  
    menubtns.forEach(e =>{
        e.addEventListener("mouseenter", function(dets) {
            let dims = e.getBoundingClientRect();
            // console.log(dims);
            let xstart = dims.x;
            let ystart = dims.y;
            let xend = dims.x + dims.width;
            let yend = dims.x + dims.height;
            let zeroone =  gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX)
            let blabla =  gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY)
            
        
            gsap.to(cursor,{
                width:'50px',
                height:'50px',
                duration:.3
            })
           
        
            gsap.to(e.children,{
                x:lerp(-5,5, zeroone),
                y:lerp(5,-5, blabla),
                duration:.3
            })
        });
        e.addEventListener("mouseleave", function(dets) {
            gsap.to(cursor,{
                width:'0px',
                height:'0px'
            })
           
            gsap.to(e.children,{
                x:0,
                y:0,
                duration:.3
            })
        });
    })

    
}
mousemoveani()

function mobileTabMenu(){
    let hiddenmenu = document.querySelector('#hiddenmenu');
    let nevclose = document.querySelector('.nevclose1');
    const tl =gsap.timeline();
    

    hiddenmenu.addEventListener('click', function(){
        gsap.to('.menu1',{
            opacity:1,
            x:'-100%',
            duration:.8,
            ease: "power2.inOut"
        });
        tl.to('.nevclose1',{
            opacity:1,
            delay:0.2,
            duration:1,
            ease: "power2.inOut"
        });
        tl.to('.nevtext1 h3',{
            y:8,
            opacity:1,
            delay:-0.9,
            duration:1,
            ease: "power2.inOut"
        });
        tl.to('.language h4',{
            y:8,
            opacity:1,
            delay:-1,
            duration:1,
            ease: "power2.inOut"
        });
        tl.to('.menubgimage',{
            y:-1,
            opacity:1,
            delay:-1,
            duration:1,
            ease: "power2.inOut"
        })
    })
    nevclose.addEventListener('click', function(){
        gsap.to('.menu1',{
            opacity:0,
            x:'-0%',
            ease: "power2.inOut"
        });
        tl.to('.nevtext1 h3',{
            y:-8,
            opacity:0,
            ease: "power2.inOut"
        });
        tl.to('.language h4',{
            y:-8,
            opacity:0,
            ease: "power2.inOut"
        });
        tl.to('.nevclose',{
            opacity:0,
            ease: "power2.inOut"
        });
        tl.to('.menubgimage',{
            y:-8,
            opacity:0,
            delay:-2,
            ease: "power2.inOut"
        })
    })
}
mobileTabMenu()

function nav(){
    let hiddenmenu = document.querySelector('#hiddenmenu');
    let nevclose = document.querySelector('.nevclose');
    const tl =gsap.timeline();
    gsap.from('.navanimation',{
        opacity:0,
        y:10,
        duration:1.5,
        ease: 'power2.inOut'
    })

    hiddenmenu.addEventListener('click', function(){
        gsap.to('.menu',{
            opacity:1,
            x:'-100%',
            duration:.8,
            ease: "power2.inOut"
        });
        tl.to('.nevclose',{
            opacity:1,
            delay:0.2,
            duration:1,
            ease: "power2.inOut"
        });
        tl.to('.nevtext h3',{
            y:8,
            opacity:1,
            delay:-0.9,
            duration:1,
            ease: "power2.inOut"
        });
        tl.to('.language h4',{
            y:8,
            opacity:1,
            delay:-1,
            duration:1,
            ease: "power2.inOut"
        });
        tl.to('.menubgimage',{
            y:-1,
            opacity:1,
            delay:-1,
            duration:1,
            ease: "power2.inOut"
        })
    })
    nevclose.addEventListener('click', function(){
        gsap.to('.menu',{
            opacity:0,
            x:'-0%',
            ease: "power2.inOut"
        });
        tl.to('.nevtext h3',{
            y:-8,
            opacity:0,
            ease: "power2.inOut"
        });
        tl.to('.language h4',{
            y:-8,
            opacity:0,
            ease: "power2.inOut"
        });
        tl.to('.nevclose',{
            opacity:0,
            ease: "power2.inOut"
        });
        tl.to('.menubgimage',{
            y:-8,
            opacity:0,
            delay:-2,
            ease: "power2.inOut"
        })
    })
}
nav()
const HeroSlider = document.querySelectorAll('.HeroSlider');
const buttons = document.querySelectorAll('.slide-button');
let currentSlide = 0;
let timeoutId;

function showSlide(slideIndex) {
    currentSlide = slideIndex;
    managingAllSlides();
}

function managingAllSlides() {
    HeroSlider.forEach((e, index) => {
        gsap.set(e, { zIndex: 10, opacity: 0 });
    });

    const currentSlider = HeroSlider[currentSlide];
    if (!currentSlider) {
        console.warn(`No slider found for slide index ${currentSlide}`);
        return;
    }

    const Headings = currentSlider.querySelector('.Headings');
    const descriptionText = currentSlider.querySelector('.descriptionText');
    const group = currentSlider.querySelector('.group');
    const ShopNow = currentSlider.querySelector('.ShopNow');
    const SliderImages = currentSlider.querySelectorAll('.SliderImages');
    
    gsap.set(currentSlider, { zIndex: 20, opacity: 1 });
    gsap.set(currentSlider, { duration: 1, opacity: 1, ease: Expo.easeInOut });

    const tl = gsap.timeline();

    if (Headings) {
        tl.fromTo(Headings, {
            opacity: 0,
            z: 20
        }, {
            delay: 0.5,
            duration: 1.5,
            opacity: 1,
            z: 0,
            ease: "power2.inOut"
        }, "-=0.5");
    } else {
        console.warn(`Headings element not found in slide index ${currentSlide}`);
    }

    if (descriptionText) {
        tl.fromTo(descriptionText, {
            opacity: 0,
            y: 10
        }, {
            delay: -1,
            duration: 1.5,
            opacity: 1,
            y: 0,
            ease: "power2.inOut"
        });
    } else {
        console.warn(`descriptionText element not found in slide index ${currentSlide}`);
    }

    if (group) {
        tl.fromTo(group, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: "power2.inOut"
        });
    } else {
        console.warn(`group element not found in slide index ${currentSlide}`);
    }

    if (ShopNow) {
        tl.fromTo(ShopNow, {
            opacity: 0,
            y: 10
        }, {
            delay: -1,
            duration: 1.5,
            opacity: 1,
            y: 0,
            ease: "power2.inOut"
        });
    } else {
        console.warn(`ShopNow element not found in slide index ${currentSlide}`);
    }

    SliderImages.forEach((el) => {
        if (el) {
            tl.fromTo(el, {
                opacity: 0,
            }, {
                duration: 0.9,
                opacity: 1,
                ease: "power2.inOut"
            }, "-=1");
        } else {
            console.warn(`SliderImages element not found in slide index ${currentSlide}`);
        }
    });

    updateButtons();

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        currentSlide = (currentSlide + 1) % HeroSlider.length;
        managingAllSlides();
    }, 7000);
}

function videoscroll(){
    gsap.to(".video_width",{
        width: '100vw',
        borderRadius:0,
        scrollTrigger:{
            trigger:".Feel_Refreshed",
            scroller: "body",
            start: "top -10%",
            end: "top -90%",
            scrub: 1,
            // markers: true
        }
    })
}document.addEventListener('DOMContentLoaded', function() {
    function videoplay() {
        let listelems = document.querySelectorAll(".listelem");

        listelems.forEach(function(el) {
            let videoContainer = el.querySelector(".videoContainer");
            let video = videoContainer.querySelector(".videoclip");
            let closeButton = videoContainer.querySelector(".close-button");

            el.addEventListener('click', function() {
                // Hide other video containers and pause their videos
                document.querySelectorAll(".videoContainer").forEach(function(container) {
                    if (container !== videoContainer) {
                        let otherVideo = container.querySelector(".videoclip");
                        let otherCloseButton = container.querySelector(".close-button");
                        gsap.to(otherVideo, {
                            width: '0%',
                            duration: 0.2,
                            onComplete: function() {
                                otherVideo.pause();
                                container.style.display = 'none';
                                otherCloseButton.parentElement.style.opacity = 0;
                            }
                        });
                    }
                });

                // Show and play the clicked video
                videoContainer.style.display = 'block';
                gsap.to(video, {
                    width: '70%',
                    duration: 0.2,
                    onComplete: function() {
                        video.play();
                        video.muted = false;
                    }
                });

                closeButton.parentElement.style.opacity = 1;
            });

            closeButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent the click event from propagating to the listelem
                gsap.to(video, {
                    width: '0%',
                    duration: 0.2,
                    onComplete: function() {
                        video.pause();
                        videoContainer.style.display = 'none';
                        closeButton.parentElement.style.opacity = 0;
                    }
                });
            });
        });
    }

    videoplay();
});





function updateButtons() {
    buttons.forEach((button, index) => {
        if (index === currentSlide) {
            button.classList.add('active-button');
        } else {
            button.classList.remove('active-button');
        }
    });
}

gsap.set(HeroSlider[currentSlide], { zIndex: 20, opacity: 1 });

function teamPage() {

    let team = document.querySelectorAll('.listelem');
    // console.log(team);
    team.forEach(function(el, index) {
        el.addEventListener("mousemove", function(dets) {
            
            gsap.to(this.querySelector(".greenlayer"), {
                y:0,
                height: "100%",
                ease: Power4,
                duration: .2
            })
        })
        el.addEventListener("mouseleave", function(dets) {
            
            gsap.to(this.querySelector(".greenlayer"), {
                height: "0%",
                ease: Power4,
                duration: .2
            })
        })
    })
}
teamPage()
loco()
videoscroll()
managingAllSlides();
