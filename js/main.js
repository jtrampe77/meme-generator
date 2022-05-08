// window.addEventListener('load', function(e) {
// const memeImage = document.querySelector('#meme-image');

// memeImage.addEventListener('change', function(e) {
//     const selectedOption = e.currentTarget.options[e.currentTarget.options.selectedIndex];

//     // select image
//     const selectedImage = document.querySelector('.meme-display img');

//     // update image
//     if (selectedOption.value === "fry-meme") {
//         selectedImage.src = "img/fry-meme.png";
//     } else if (selectedOption.value === "one-does-not-simply-meme") {
//         selectedImage.src = "img/one-does-not-simply-meme.png";
//     } else if (selectedOption.value === "most-interesting-man-meme") {
//         selectedImage.src = "img/most-interesting-man-meme.png";
//     } else {
//         selectedImage.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
//     }


//     e.preventDefault();
// })

//     const memeForm = document.querySelector('memeForm');

//     memeForm.addEventListener('submit', function(e) {
//         e.preventDefault();

//         // select text input
//         const topText = document.querySelector('#meme-top-text');
//         const bottomText = document.querySelector('#meme-bottom-text');

//         // select text Display
//         const topTextDisplay = document.querySelector('.top-text');
//         const bottomTextDisplay = document.querySelector('.bottom-text');

//         topText.textContent = selectedOption.topTextDisplay;
//         bottomText.textContent = selectedOption.bottomTextDisplay;

//         console.log(selectedOption.topTextDisplay);

//     })

//     const newDisplay = function(topText, bottomText) {
//         const template =
//             ``
//     }
// })

window.addEventListener('load', function(e) {

    const memeForm = document.forms['memeForm'];

    memeForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const topText = e.currentTarget.elements['meme-top-text'].value
        const bottomText = e.currentTarget.elements['meme-bottom-text'].value
        newTopText(topText)
        newBottomText(bottomText)
    })

    const memeImage = document.querySelector('#meme-image');

    memeImage.addEventListener('change', function(e) {
        const selectedOption = e.currentTarget.options[e.currentTarget.options.selectedIndex];

        // select image
        const selectedImage = document.querySelector('.meme-display img');

        // update image
        if (selectedOption.value === "fry-meme") {
            selectedImage.src = "img/fry-meme.png";
            selectedImage.alt = "Fry meme";
        } else if (selectedOption.value === "one-does-not-simply-meme") {
            selectedImage.src = "img/one-does-not-simply-meme.png";
            selectedImage.alt = "One does not simple meme";
        } else if (selectedOption.value === "most-interesting-man-meme") {
            selectedImage.src = "img/most-interesting-man-meme.png";
            selectedImage.alt = "Most interesting man";
        } else {
            selectedImage.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
        }
    })

    const newTopText = function(topText) {
        const template =
            `
        <div class="meme-display">
            <p class="top-text">${topText}</p>
            
        </div>
        `
        const display = document.querySelector('.top-text')
        display.innerHTML = template
    }

    const newBottomText = function(bottomText) {
        const template =
            `
        <div class="meme-display">
            <p class="bottom-text">${bottomText}</p>
        </div>
        `
        const display = document.querySelector('.bottom-text')
        display.innerHTML = template
    }

    memeForm.addEventListener('reset', function(e) {
        memeForm.reset();

        const resetTopText = document.querySelector('.top-text');
        const resetBottomText = document.querySelector('.bottom-text');
        resetTopText.innerHTML = "";
        resetBottomText.innerHTML = "";

        const selectedImage = document.querySelector('.meme-display img');
        selectedImage.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
    })




})

// const errorMsg = document.querySelector('.error');
//             errorMsg.innerHTML = "Oops! Please select a valid input"