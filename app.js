

let val;
let val2;
let src;
let nume;


function sursa(val){
    return src = './img/'+ val +'.png';
}


function getData(){
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': 'bb4d3c82f8msh91277ed840cbe3ep12d3c3jsnae177062843b',
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    };

    const baseUrl = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=';
    const char = '&';
    const altChar = 'day=';
    let url = baseUrl.concat(val,char,altChar,val2);

   
    fetch(url, options)
        .then((data) =>{
            return data.json();
        }).then((completeData)=>{
            document.getElementById('img1').src = sursa(val);
            document.getElementById('color').innerHTML = 'Your color is:' + completeData.color;
            document.getElementById('description1').innerHTML = 'Description';
            document.getElementById('description').innerHTML = completeData.description;
            document.getElementById('luckynumber').innerHTML = 'Your lucky number: ' + completeData.lucky_number;
            document.getElementById('luckydate').innerHTML = 'Your lucky date is: ' + completeData.lucky_date;
            document.getElementById('mood').innerHTML = 'Mood: ' + completeData.mood;
            document.getElementById('rangedate').innerHTML = 'Range date: ' + completeData.date_range;
            document.getElementById('curentdate').innerHTML = 'Current date: ' + completeData.current_date;
            document.getElementById('compatibility').innerHTML = 'Compatibility: ' + completeData.compatibility;
        })
        .catch(err => document.getElementsByClassName('result').innerHTML = 'EROARE BOSS');
   
}

function getVal() {
    val = document.getElementById('input').value;
    val2 = document.getElementById('input2').value;
    val2.toLowerCase();
    nume = document.getElementById('input3').value;
    document.getElementById('img1').src = sursa(val);
    console.log(val, val2,nume);  
    document.getElementById('nume').innerHTML = 'hi, ' + nume;
    getData(); 
} 




