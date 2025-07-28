console.log('Bantu');

// let boxes = document.getElementsByClassName('box')
// console.log(boxes);

// boxes[2].style.backgroundColor = 'green'

// document.getElementById('redbox').style.backgroundColor = 'red'

// document.querySelector('.box').style.backgroundColor = 'green'

let box = document.querySelectorAll('.box')
box.forEach(e => {
    e.style.backgroundColor = 'green'
})


