document.getElementById('mobile-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('show');
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show');
    this.classList.remove('active');
});