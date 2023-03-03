document.querySelector("#checkAge").addEventListener("click", checkAge)
const p = document.querySelector("p")

function checkAge(){
    let age = Number(document.querySelector("input").value)

    if(age < 16) {
        p.innerText = "they can't drive"
    }

    else if(age < 18) {
        p.innerText = "they can't hate from outside the club"
    }

    else if(age < 21) {
        p.innerText = "they can't drink"
    }

    else if(age < 25) {
        p.innerText = "they can't rent cars affordably"
    }

    else if(age < 30) {
        p.innerText = "they can't rent fancy cars affordably"
    }

    else{
        p.innerText = "nothing else left to forward to"
    }
}


console.log(checkAge(15))

/*Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######*/

for(let number = 0; number = )