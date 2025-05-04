document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.getElementById('loginBox');
    const overlayGradient = document.getElementById('overlayGradient');
    const buttonOverlay = document.getElementById('buttonOverlay');
    const googleSignIn = document.getElementById('googleSignIn');

    // Handle login box hover effect
    loginBox.addEventListener('mouseenter', () => {
        overlayGradient.style.opacity = '1';
    });

    loginBox.addEventListener('mouseleave', () => {
        overlayGradient.style.opacity = '0';
    });

    // Handle button hover effect
    googleSignIn.addEventListener('mouseenter', () => {
        buttonOverlay.style.height = '100%';
    });

    googleSignIn.addEventListener('mouseleave', () => {
        buttonOverlay.style.height = '0';
    });
});
