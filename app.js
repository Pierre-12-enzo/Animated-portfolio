const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

// Toggle sidebar on menu icon click
menuIcon.addEventListener('click', () => {
    sidebar.classList.remove("close-sidebar")
    sidebar.classList.add("open-sidebar");
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
});







// Project Videos
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];



videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', () => {
        video.pause()
        hoverSign.classList.remove("active")
    })
});


