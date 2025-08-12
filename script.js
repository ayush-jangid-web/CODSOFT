let string = ''
console.log(string)
const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (dets) => {
        let sign = button.getAttribute('value')
        // console.log(string)

        if (sign == '=') {
            string = eval(string)
            document.querySelector('.input').value = string
        }
        else if (sign == 'AC') {
            string = ''
            document.querySelector('.input').value = string

        }
        else if(sign == '%'){
            string = string/100 +'*'
            document.querySelector('.input').value = string
        }
        else if (sign === 'DEL') {
            string = string.slice(0,-1)
            // console.log(string)
            document.querySelector('.input').value = string
            
        }
        else {
            string = string + sign
            document.querySelector('.input').value = string
        }
        console.log(string)
    })
})