window.onload=function() {
    document.getElementById("calculateArea").onclick=function() {
      let width = document.getElementById("width").value,
      height = document.getElementById("height").value,  
       output = document.getElementById("output");
  
      output.innerHTML = width * height;
    }
  }

  console.log(output);

for(let i = 0; i <= 100; i++){
  console.log(i);
}

console.log("hey!")

// yes

function yes (){
  console.log("yes");
}

yes();

cars = ["Tesla", "Ford", "GM"]
console.log(cars[0])


let bagel = 5;
let price = undefined;
if ((bagel = 1)) {
  price = 1;
  console.log(price);
} else if ((bagel = 2)) {
  price = 2;
  console.log(price);
} else if ((bagel = 3)) {
  price = 3;
  console.log(price);
} else if ((bagel = 4)) {
  price = 4;
  console.log(price);
} else if (bagel === 5) {
  price = 5;
  console.log(price);
} else {
  console.log('no');
}



