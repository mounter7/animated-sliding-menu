$(document).ready(function() {

    let items = document.querySelectorAll('nav a')
    const marker = document.querySelector('#marker')

    function indicator (e) {
        marker.style.left = e.offsetLeft+"px"
        marker.style.width = e.offsetWidth+"px"
    }

    items.forEach(link => {
        link.addEventListener('mousemove', e => {
            indicator(e.target)
        })
    })

})