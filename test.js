const name = prompt('Enter your name: ')
const wazn = prompt('what\'s your weight? ')
const ghad = prompt('what\'s your height? ')

const personInfo = {
    name: name,
    wazn: wazn,
    ghad: ghad
}

function bmi(w,h) {
    return (w / h ** 2)*10000
}
const personBmi = bmi(personInfo.wazn, personInfo.ghad)

const personH1 = document.getElementById('person');
personH1.textContent = personInfo.name

const bmiH5 = document.getElementById('bmi');
bmiH5.textContent += personBmi.toFixed(2)



switch (true) {
    case (personBmi < 18.5):
        personH1.classList.add('onder-weight')
        document.getElementById('ax').src = './01.png';
        break;
    case (personBmi > 18.5 && personBmi < 25):
        personH1.classList.add('normall') 
        document.getElementById('ax').src = './02.png';
        break;
    case (personBmi > 25 && personBmi < 30):
        personH1.classList.add('over-weight') 
        document.getElementById('ax').src = './03.png';
        break;
    case (personBmi > 30 && personBmi < 35):
        personH1.classList.add('obese') 
        document.getElementById('ax').src = './04.png';
        break;
    default:
        personH1.classList.add('ex-obese') 
        document.getElementById('ax').src = './05.png';
        break;
}
