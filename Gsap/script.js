gsap.from("h1",{
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 20,
    stagger: 1
})
gsap.to("#box1",{
    x: 1600,
    duration: 1,
    delay: 1,
    rotate: 360,
    repeat: -1,
    yoyo: true
})