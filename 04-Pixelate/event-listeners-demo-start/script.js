let parent = document.querySelector('.parent')

parent.addEventListener('click', (e) => {
    console.log(e);
    e.target.style.padding = '100px'
    e.target.style.backgroundColor = 'purple'
    console.log("I was clicked!")
})

let childThree = document.querySelector('.child.three')

childThree.addEventListener('click', (e) => {
    e.target.style.border = '20px dashed yellow'
    e.stopPropagation()
})
