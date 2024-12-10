const digit = document.getElementById("digit")
const inc_btn = document.getElementById("inc")
const dec_btn = document.getElementById("dec")
const reset_btn = document.getElementById("reset")
let num = 0
digit.textContent = num

reset_btn.onclick = function reset() {
    num = 0
    digit.textContent = num 
}
inc_btn.onclick = function inc(){
    num++
    digit.textContent = num
}
dec_btn.onclick = function dec(){
    num--
    digit.textContent = num
}


