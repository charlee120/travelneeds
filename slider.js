const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
    console.log(item);
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
 
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 350;
        console.log("HELLO");
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 370;
        console.log("back");
    })
})


