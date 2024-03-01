document.body.addEvrntListener("mousemove", evt=> {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
  
    gsap.set (".cursor",{
        X :mouseX,
        Y :mouseY
    })