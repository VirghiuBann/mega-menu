document.addEventListener("DOMContentLoaded", function() {
    const elems = document.querySelectorAll(".dropdown-trigger");
    let elemContainer = document.querySelector(".main__dropdown");
    const instances = M.Dropdown.init(elems, {
        hover: false,
        coverTrigger: false,
        constrainWidth: false,
        belowOrigin: true,
        stopPropogation: true
    });

    var instance = M.Carousel.init({
        fullWidth: true,
        indicators: true
    });
});
