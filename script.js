//your JS code here. If required.
const blockInput = document.getElementById('block_id')
const colorInput = document.getElementById('colour_id')
const gridItems = document.querySelectorAll('.grid-item')
const form = document.querySelector('form')
const resetbtn = document.getElementById('Reset')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    gridItems.forEach((item) => {
        item.style.backgroundColor = 'yellow'
    })
    gridItems[blockInput.value - 1].style.backgroundColor = colorInput.value
})
form.addEventListener('reset', (event) => {
    event.preventDefault()
    gridItems[blockInput.value - 1].style.backgroundColor = 'transparent'
})