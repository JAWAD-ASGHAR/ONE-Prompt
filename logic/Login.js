// getting all relevent elements on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.getElementById('loginBox');
    const overlayGradient = document.getElementById('overlayGradient');
    const buttonOverlay = document.getElementById('buttonOverlay');
    const googleSignIn = document.getElementById('googleSignIn');

    loginBox.addEventListener('mouseenter', () => {
        overlayGradient.style.opacity = '1';
    });

    loginBox.addEventListener('mouseleave', () => {
        overlayGradient.style.opacity = '0';
    });

    googleSignIn.addEventListener('mouseenter', () => {
        buttonOverlay.style.height = '100%';
    });

    googleSignIn.addEventListener('mouseleave', () => {
        buttonOverlay.style.height = '0';
    });
});
