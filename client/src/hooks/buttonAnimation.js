import gsap from "gsap";

export function buttonAnimation() {
    
    const animateCircle = (ref, x, y) => {
        gsap.to(ref, {
            top: y,
            left: x,
            xPercent: -50,
            yPercent: -50,
            ease: 'power3.inOut'
        })
    }

    const handleMouseMove = (e, ref) => {
        const rect = e.currentRef.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        animateCircle(ref, x, y);
    }

    const buttonAnimationMouseEnter = (ref) => {
        gsap.to(ref, {
            scale: 1,
            duration: 0.4,
            ease: 'power3.inOut',
        })
    }

    const buttonAnimationMouseLeave = (ref) => {
        gsap.to(ref, {
            scale: 0,
            duration: 0.4,
            ease: "power3.inOut"
        })
    }

    return {handleMouseMove, buttonAnimationMouseEnter, buttonAnimationMouseLeave}
}
