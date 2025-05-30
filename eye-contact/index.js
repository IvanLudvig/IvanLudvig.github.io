
document.addEventListener('mousemove', function(e) {
    const iris = document.querySelectorAll('.iris');
    for (let i = 0; i < iris?.length; i++) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Get screen dimensions
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // Calculate position relative to screen center (0 to 1 from center to edge)
        const relativeX = (mouseX - screenWidth / 2) / (screenWidth / 2);
        const relativeY = (mouseY - screenHeight / 2) / (screenHeight / 2);

        
        // Maximum distance iris can move from eye center
        const maxDistance = 32;
        
        // Map screen position to iris movement
        let moveX = relativeX * maxDistance;
        let moveY = relativeY * maxDistance;

        const norm = Math.sqrt(moveX * moveX + moveY * moveY);
        const scale = Math.min(maxDistance / norm, 1);

        moveX *= scale;
        moveY *= scale;

        iris[i].style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});
