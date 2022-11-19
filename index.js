let num = document.getElementById("number")
let divisible = document.getElementById("divisible")

function number(){
  let random = Math.random() * 10
  let result = Math.ceil(random)
  if(result % 2 == 0){
    output = "This is an even number"
  }else{
    output = "This is an odd number"
  }
  num.innerHTML = result
  divisible.innerHTML = output
  console.log(result)
}

function reset(){
  num.innerHTML = 0
  divisible.innerHTML = ""
}


function button(){
  number()
}

