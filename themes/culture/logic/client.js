// adds random masks to all masks on page

console.log ('👻')

const MIN_MASK_NUM = 1
const MAX_MASK_NUM = 5
const masks = document.getElementsByClassName('zine-item-mask')
const maskNodes = [...masks]
const randomNumber = function() {
  return Math.floor( Math.random() * ( 1 + MAX_MASK_NUM - MIN_MASK_NUM ) ) + MIN_MASK_NUM
}

maskNodes.forEach(function(mask) {
  mask.classList += ` mask-${randomNumber()}`
})
