

document.querySelector('button').addEventListener('click', run)


function run() {

let day = document.querySelector('#dayInput').value
let month = document.querySelector('#monthInput').value

console.log(day)
console.log(month)

//first thing keeps going to capricon
//will i need to use a table or array?

if (day >= 22 && day <= 31 && month == 12 || day > 0 && day <= 19 && month == 1 ) {
 document.querySelector('h2').innerText = 'Capricorn'
 //Capricorn (December 22 - January 19)
} else if (day >= 20 && day <= 31 && month == 1 || day > 0 && day <= 18 && month == 2) {
  document.querySelector('h2').innerText = 'Aquarius'
  //Aquarius (January 20 - February 18)
} else if (day >= 19 && day <=29 && month == 2 || day > 0 && day <= 20 && month == 3) {
  document.querySelector('h2').innerText = 'Pisces'
  //Pisces (February 19 - March 20)
} else if (day >= 21 && day <= 31 && month == 3 || day > 0 && day <=19 && month == 4) {
  document.querySelector('h2').innerText = 'Aries'
  //Aries (March 21 - April 19)
} else if (day >= 20 && day <= 30 && month == 4 || day > 0 && day <=20 && month == 5) {
  document.querySelector('h2').innerText = 'Taurus'
  //Taurus (April 20 - May 20)
} else if (day >= 21 && day <= 31 && month == 5 || day > 0 && day <=20 && month == 6) {
  document.querySelector('h2').innerText = 'Gemini'
  //Gemini (May 21 - June 20)
} else if (day >= 21 && day <= 30 && month == 6 || day > 0 && day <= 22 && month == 7) {
  document.querySelector('h2').innerText = 'Cancer'
  //Cancer (June 21 - July 22)
} else if (day >= 23 && day <= 31 && month == 7 || day > 0 && day <= 22 & month == 8) {
  document.querySelector('h2').innerText = 'Leo'
  //Leo (July 23 - August 22)
} else if (day >= 23 && day <= 31 && month == 8 || day > 0 && day <=22 && month == 9) {
  document.querySelector('h2').innerText = 'Virgo'
  //Virgo (August 23 - September 22)
} else if (day >=23 && day <= 30 && month == 9 || day > 0 && day <=22 && month == 10) {
  document.querySelector('h2').innerText = 'Libra'
  //Libra (September 23 - October 22)
} else if (day >= 23 && day <= 31 && month == 10 || day > 0 && day <= 21 && month == 11) {
  document.querySelector('h2').innerText = 'Scorpio'
  //Scorpio (October 23 - November 21)
} else if (day >= 22 && day <= 30 && month == 11 || day > 0 && day <=21 && month == 12) {
  document.querySelector('h2').innerText = 'Sagittarius'
  //Sagittarius (November 22 - December 21)
} else {
  document.querySelector('h2').innerText = 'wrong'
}

}
