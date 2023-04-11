const data = {
    "package" : [
        {
            "heading": "Goa Full Week Maja Pack",
            "data": "The Holiday Inn Goa Margao Resort includes Cavelossim beachfront access, swimming pool, fitness centre, tennis court, three restaurants, and free parking. The comfortable resort suites include en suite bathroom, with bathtub and hairdryer. There is satellite television, coffee and tea making facilities and balcony views overlooking the pool or Arabian sea. The Goa Margao offers a range of resort packages. There is a  bar, garden, pool, tennis court, Wi-Fi service, 24-hour coffee shop, game room and playground. There are also full spa facilities  and massage services. Whispers of the Orient, Fig & Olive and Beach Grill are the resort’s three onsite restaurants, serving a blend of Indian and European cuisine.",
            "brouchureLink" : ""
        },

        {
            "heading": "Manali Full Week Maja Pack",
            "data": "The includes Cavelossim beachfront access, swimming pool, fitness centre, tennis court, three restaurants, and free parking. The comfortable resort suites include en suite bathroom, with bathtub and hairdryer. There is satellite television, coffee and tea making facilities and balcony views overlooking the pool or Arabian sea. The Goa Margao offers a range of resort packages. There is a  bar, garden, pool, tennis court, Wi-Fi service, 24-hour coffee shop, game room and playground. There are also full spa facilities  and massage services. Whispers of the Orient, Fig & Olive and Beach Grill are the resort’s three onsite restaurants, serving a blend of Indian and European cuisine.",
            "brouchureLink" : ""
        }

    ]
}


const cards = document.querySelectorAll('.package-card')
console.log(cards);


const redirect = (data) => {
    window.location.href = `/package-details.html?data=${data}`
}

cards.forEach((item, i) => {
    item.addEventListener('click', () => {
        redirect(i)
    })
})





