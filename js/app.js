const button = document.querySelector('#btn')
const body = document.querySelector('body')
const hexValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const span = document.querySelector('#hex-value')

button.addEventListener('click', changeColor)

function changeColor () {
  let hex = '#'

  for (let i = 0; i < 6; i++){
    const index = parseInt(Math.random()*hexValues.length)
    hex += hexValues[index]
  }
  
  body.style.backgroundColor = hex
  span.textContent = hex
  // const colorIndex = parseInt(Math.random()*colors.length)
  
  // const randomColor = '#' + colors[parseInt(Math.random()*colors.length)] +
  //  colors[parseInt(Math.random()*colors.length)] +
  //   colors[parseInt(Math.random()*colors.length)] +
  //    colors[parseInt(Math.random()*colors.length)] +
  //     colors[parseInt(Math.random()*colors.length)] +
  //      colors[parseInt(Math.random()*colors.length)]
  // body.style.backgroundColor = randomColor
  // span.textContent = randomColor
}
