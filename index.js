// Get references to the necessary elements
const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns  = document.getElementById("modal-choice-btns")

// Display the modal after a delay of 1500 milliseconds
setTimeout(()=>
{
    modal.style.display = "inline"
}, 1500)

// Event listener for the close button to hide the modal
modalCloseBtn.addEventListener('click', ()=>
{
    modal.style.display = "none"
})
// Event listener for the mouseenter event on the decline button
declineBtn.addEventListener('mouseenter', () => {
    // Toggle CSS class to reverse the order of choice buttons
    modalChoiceBtns.classList.toggle('reverse-modal-choice-btns')
})

// Event listener for the form submission
consentForm.addEventListener('submit', function (e) {
    // Prevent the default form submission behavior
    e.preventDefault()

    // Get the user's name from the form data
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get("user-name")
  
    // Update the modal text to show a loading message
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    // After a delay of 1500 milliseconds, update the upload text
    setTimeout(function () {
        document.getElementById('upload-text').innerText = `Making the sale...`
    }, 1500)

    // After a delay of 3000 milliseconds, update the modal content
    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/spongeBob.gif">
            </div>` 
        modalCloseBtn.disabled = false // Enable the close button
    },3000)
    consentForm.reset() // Reset the form
   
})




