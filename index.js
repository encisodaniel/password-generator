const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");
let pass1 = []
let pass2 = []
function passGenerator() {
    pass1 = []
    pass2 = []
    for (let i = 0; i < 15 ; i++) {
        let random1 = Math.floor(Math.random() * characters.length)
        let random2 = Math.floor(Math.random() * characters.length)
        pass1.push[random1]
        pass1.push(characters[random1])
        pass2.push(characters[random2])
    }
    password1.textContent = pass1.join('')
    password2.textContent = pass2.join('')
}





