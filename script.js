const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", input);
function input(){

  if(number.value === ""){
    output.textContent="Please enter a valid number";
  }
  else if(number.value < 0){
    output.textContent="Please enter a number greater than or equal to 1";
  }
  else if(number.value >= 4000){
    output.textContent="Please enter a number less than or equal to 3999";
  }
  else if(number.value < 4000){
    output.textContent = convert(number.value);
  }
};

function convert(num) {
  let result = "";
    let table = {
  M:	1000,
  CM:	900,
  D:	500,
  CD:	400,
  C:	100,
  XC:	90,
  L:	50,
  XL:	40,
  X:	10,
  IX:	9,
  V:	5,
  IV:	4,
  I:	1
    }

    let pairs = Object.keys(table);
    while (num > 0) {
      let symb = "I"
      for (let i = 0; i < pairs.length; i++) {
  if (num >= table[pairs[i]]) {
    symb = pairs[i];
  break;
        }
      }
      result += symb;
      num = num - table[symb];
    }
    return result;
}
