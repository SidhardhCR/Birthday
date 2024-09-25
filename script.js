document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    // Unmute after user interaction, such as a click
    document.addEventListener('click', () => {
        bgMusic.muted = false;
    });
});
