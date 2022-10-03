let screen = document.querySelector('.screen__value'),
result = document.getElementById('result'),
buttons = document.querySelectorAll('.button');

// 초기화면
if(screen.innerText >=0){
    let theValue = screen.innerText;
    let theNumber = Number(theValue);
    result.innerHTML = "HEX " + theNumber.toString(16) + "<br>"+"DEC " + theNumber.toString(10) +"<br>" + "OCT " + theNumber.toString(8) +"<br>"+ "BIN " + theNumber.toString(2) +"<br>";
}

// 버튼 클릭시 나타는 클릭이벤트
buttons.forEach(button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                screen.innerText= '';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                }catch{
                    screen.innerText="Error"
                }break;
            case 'backspace':
                if(screen.innerText){
                    screen.innerText=screen.innerText.slice(0, -1);
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }

        let theValue = screen.innerText;
        let theNumber = Number(theValue);
        result.innerHTML = "HEX " + theNumber.toString(16) + "<br>"+"DEC " + theNumber.toString(10) +"<br>" + "OCT " + theNumber.toString(8) +"<br>"+ "BIN " + theNumber.toString(2) +"<br>";
    });
});

