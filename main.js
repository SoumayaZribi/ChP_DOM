var cards = document.querySelectorAll('.card1')
console.log(cards)
for(var i=0;i<cards.length;i++){
var btn = document.createElement('button')
console.log(btn)
cards[i].innerHTML = '<i class="fas fa-heart"></i>'}


    //cards[i].appendChild(btn)
    cards[i].setAttribute('id', 'redBtn')
btn.setAttribute('id', 'pinkBtn')

//changing style
btn.style.color = 'red'
//adding event listener
btn.addEventListener('click', function() {
    if (btn.style.color === "red") {
        btn.style.color = 'pink'
    } else {
        btn.style.color = "red"
    }
})



