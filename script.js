gsap.to(".navbar",{
    backgroundColor: "#000",
    height:"90px",
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -4%",
        end:"top -3%",
        scrub:1
    }
});

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -50%",
        scrub:1
    }
})