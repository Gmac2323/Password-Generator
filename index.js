var num = "0123456789";
var sym = "!@#$%^&*()_+?~"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var charSet = '';
var result = '';
var charlength = '';
var symbols = document.getElementById("symbolscheck");
var number = document.getElementById("numberscheck");
var slide = document.getElementById("myRange");
var letters = document.getElementById("letterscheck");

function passGenerator() {
    charlength = slide.value;
    console.log(charlength);
    result = '';
   
     if (number.checked) {
        charSet += num;
    } 
     if (symbols.checked) {
            charSet += sym;
    }
        if (letters.checked) {
                charSet += upperChar,lowerChar;
    }
        if (letters.checked) {
                    charSet += lowerChar;
        }
            if (charSet === '') {
                alert("Please type a password!");
            } 
            else {
                for (i = 0; i < charlength; i++) {
                    result = result + charSet.charAt(Math.floor(Math.random() * charSet.length));
                } charSet = '';
                document.getElementById('password').value = result;
            }
        }
    
    
    function rangeSlide() {
        document.getElementById("slide").textContent = slide.value;
    }   
            
        
    
    function copyToClipboard() {
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
        }
    