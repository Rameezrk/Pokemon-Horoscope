

document.querySelector('button').addEventListener('click', run)


function run() {

let day = document.querySelector('#dayInput').value
let month = document.querySelector('#monthInput').value

console.log(day)
console.log(month)

//first thing keeps going to capricon
//will i need to use a table or array?

if (day >= 22 && day <= 31 && month == 12 || day > 0 && day <= 19 && month == 1 ) {
 document.querySelector('h2').innerText = 'Capricorn - Fighting Type'
 document.querySelector('h3').innerText = 'Capricorns are disciplined, ambitious, and responsible. This makes them quite similar to Fighting Pokémon who need to consistently train hard in order to sharpen their skills and abilities. When discouraged, however, Capricorns can become unsatisfied with themselves and be pessimistic or possessed by their work habits, which can hurt other areas in their lives. Similarly, Fighting Pokémon are incredible in battle and can duke it out with the best of them. However, when their weaknesses are exposed, they falter quickly and are left with no choice but to go all out and disregard the consequences.'
 document.querySelector('#here').src = 'images/hit.png'
 //Capricorn (December 22 - January 19)
} else if (day >= 20 && day <= 31 && month == 1 || day > 0 && day <= 18 && month == 2) {
  document.querySelector('h2').innerText = 'Aquarius - Normal Type'
  document.querySelector('h3').innerText = 'Aquarius tend to value originality the most. As such, their resourceful outside-the-box thinking makes them capable of both affecting change or adapting to their environment seamlessly. On the other hand, Aquarius can become unpredictable and easily frustrated when they achieve less than perfect results. These traits are apparent in Normal Pokémon since they can attack or defend against most other types in battle with a wide variety of moves to boot. This is especially true for Eevee, who has a diverse evolution pool that lets him become perfectly suited for whatever need arises.'
  document.querySelector('#here').src = 'images/eevee.png'
  //Aquarius (January 20 - February 18)
} else if (day >= 19 && day <=29 && month == 2 || day > 0 && day <= 20 && month == 3) {
  document.querySelector('h2').innerText = 'Pisces - Psychic Type'
  document.querySelector('h3').innerText = 'Pisces are daydreamers whose imaginations tend to run wild and push the boundaries of creativity. Although their idealistic minds sometimes lead to detachment from reality, their keen sense of empathy and emotional intelligence make them selfless beings who can intuitively help others heal. Conversely, Pisces also tend to become lazy and elusive when they want to escape the harsh realities of life. These are qualities that are consistent with Psychic Pokémon who use their minds to influence the physical world. This is especially true for Mew, who exhibits the aforementioned Pisces qualities to a T.'
  document.querySelector('#here').src = 'images/mew.png'
  //Pisces (February 19 - March 20)
} else if (day >= 21 && day <= 31 && month == 3 || day > 0 && day <=19 && month == 4) {
  document.querySelector('h2').innerText = 'Aries - Fire Type'
  document.querySelector('h3').innerText = 'Fittingly, Aries is a fire element in the Zodiac (along with Leo and Sagittarius) and holds the most similarities to Fire Pokémon. Aries are passionate, tenacious, and brave— traits that best describe the typically offense-oriented monsters that belong to this type. At their best, Aries are the type of people who thrive in competition and have boundless energy to tackle any endeavor. However, just like Fire Pokémon, Aries can be fickle and become reckless, exhausting, or overbearing if they improperly channel their brash personalities.'
  document.querySelector('#here').src = 'images/ty.png'
  //Aries (March 21 - April 19)
} else if (day >= 20 && day <= 30 && month == 4 || day > 0 && day <=20 && month == 5) {
  document.querySelector('h2').innerText = 'Taurus - Rock Type'
  document.querySelector('h3').innerText = 'An earth element sign, Taurus values comfort as the utmost need. They are hard workers who are determined to build a life of luxury for themselves and their loved ones. As such, less appealing traits like stubbornness and resistance to change can come to the surface when things don\'t go their way. Rock Pokémon are perfect metaphors for Taurus because they represent toughness and stability. Rock Pokémon are solid defensively but their weakness to water, which often represents change, fits their analogy to a Taurus even further.'
  document.querySelector('#here').src = 'images/onix.png'
  //Taurus (April 20 - May 20)
} else if (day >= 21 && day <= 31 && month == 5 || day > 0 && day <=20 && month == 6) {
  document.querySelector('h2').innerText = 'Gemini - Bug Type'
  document.querySelector('h3').innerText = 'Often described as the "social butterflies" of the Zodiac signs, it\'s only fitting that Geminis should be classified as Bug Pokémon. When their vibe is disrupted, however, Geminis tend to be moody and can become impulsive or indecisive when everything is not right. Geminis are outgoing, intelligent, and adaptable at their best, which makes them hold a generally laid-back attitude toward life. Similarly, Bug Pokémon are usually carefree in the wild but can become useful strategic weapons in battle when the need arises.'
  document.querySelector('#here').src = 'images/scy.png'
  //Gemini (May 21 - June 20)
} else if (day >= 21 && day <= 30 && month == 6 || day > 0 && day <= 22 && month == 7) {
  document.querySelector('h2').innerText = 'Cancer - Ghost Type'
  document.querySelector('h3').innerText = "Cancer signs are incredibly emotional beings who can be deeply loyal and caring– sometimes to a fault. Once a Cancer's trust is earned, they become fiercely protective and nurturing to those they hold dear. Conversely, their highly attuned emotional prowess can backfire as they tend to be clingy, moody, or vindictive when their trust is broken. Ghost Pokémon, in a similar fashion, are are powerful allies when they're handled with care, but they can also be literal nightmares that prey on the most intimate fears of their enemies."
  document.querySelector('#here').src = 'images/gengar.png'
  //Cancer (June 21 - July 22)
} else if (day >= 23 && day <= 31 && month == 7 || day > 0 && day <= 22 & month == 8) {
  document.querySelector('h2').innerText = 'Leo - Electric Type'
  document.querySelector('h3').innerText = 'Bravado is a word that summarizes Leos. They seek admiration or acknowledgment above everything else, and they usually have the confidence and determination to back up their lofty self-imposed expectations. At their worst, however, Leos tend to be naïve or arrogant and have a hard time accepting their limitations. These traits are exemplified in Electric Pokémon, especially in the franchise mascot Pikachu, who wants nothing more than to stand out to the point of denying himself from evolving in order to show how formidable he can be.'
  document.querySelector('#here').src = 'images/pikachu.png'
  //Leo (July 23 - August 22)
} else if (day >= 23 && day <= 31 && month == 8 || day > 0 && day <=22 && month == 9) {
  document.querySelector('h2').innerText = 'Virgo - Steel Type'
  document.querySelector('h3').innerText = 'Some of the most defining traits of Virgos are their practicality, reliability, and logical minds. But at the same time, these qualities can make Virgo overthinkers, picky, and uptight. May as well be describing a robot at this point, which fits well with Steel-type Pokémon. Apart from the aesthetic parallel to robots, Steel Pokémon are also the most steadily powerful in battle as their offensive and defensive capabilities can be relied upon to succeed in battle. This penchant for success is also a defining Virgo trait.'
  document.querySelector('#here').src = 'images/ska.png'
  //Virgo (August 23 - September 22)
} else if (day >=23 && day <= 30 && month == 9 || day > 0 && day <=22 && month == 10) {
  document.querySelector('h2').innerText = 'Libra - Grass Type'
  document.querySelector('h3').innerText = "Peace and harmony are ideals that Libras strive to achieve whether it's within their own lives or their immediate environment. They're also outgoing and want to take in all the beautiful things life has to offer, which is why their best matched with Grass Pokémon. Like Libras, Grass Pokémon are attuned to their surroundings and soak in the elements in order to grow. Also, Libras tend to be creative problem-solvers, which resonates in Grass Pokémon since they use status-inducing moves like Stun Spore to defend themselves."
  document.querySelector('#here').src = 'images/ven.png'
  //Libra (September 23 - October 22)
} else if (day >= 23 && day <= 31 && month == 10 || day > 0 && day <= 21 && month == 11) {
  document.querySelector('h2').innerText = 'Scorpio - Water Type'
  document.querySelector('h3').innerText = 'Scorpio is one of the three Water signs in the Zodiac along with Cancer and Pisces. They are, however, the most appropriate comparison to Water Pokémon due to their deeply intense character traits. Their personalities are akin to tidal waves because when they\'re just right, Scorpios can surf through life with unwavering determination, or if they become too intense then they engage in destructive behavior and won\'t let anything stand in their way. Similarly, Water Pokémon can be exemplary supportive companions or be overwhelmingly powerful opponents.'
  document.querySelector('#here').src = 'images/squirtle.png'

  //Scorpio (October 23 - November 21)
} else if (day >= 22 && day <= 30 && month == 11 || day > 0 && day <=21 && month == 12) {
  document.querySelector('h2').innerText = 'Sagittarius - Flying Type'
  document.querySelector('h3').innerText = 'Sagittarius is the most adventurous of the Zodiac signs. That\'s why they\'re most aptly suited as Flying Pokémon. Though fiercely loyal, Sagittarius often seek independence and are typically intelligent due to their curious natures, which can sometimes become their undoing. When restless, they may ignore important things in their life out of boredom because they crave to discover a new challenge. Flying Pokémon, naturally, tend to be free-spirited as well and are typically difficult to pin down in battle, which makes them an ideal companion to have in your corner.'
  document.querySelector('#here').src = 'images/pid.png'
  //Sagittarius (November 22 - December 21)
} else {
  document.querySelector('h2').innerText = 'wrong'
}

}
