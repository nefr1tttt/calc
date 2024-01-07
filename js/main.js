const numbers = [...document.querySelectorAll('.num')];
const display = document.querySelector('input');
const signs = [...document.querySelectorAll('.sign')];
const dot = document.querySelector('.dot');
const clear = document.querySelector('.c');
const remove = document.querySelector('.r');
const equal = document.querySelector('.equal')
class Calculator {

    display
    signView
    signOperator
    operators = ['✕','-','+','÷']
    setDisplay(value) {
        display.value = display.value + value
    }
    get lastValue (){
        return display.value[display.value.length - 1]
    }
    get firstValue(){
        return display.value[0]
    }

    numbers(event) {


        const num = event.target.textContent.trim()

        if (this.lastValue == 0 && display.value.length ==1)
        return display.value = num
        if(this.lastValue == 0 && this.signView)
        return display.value = display.value.slice(0,-1) +num
        this.setDisplay(num)
    }

    

    signs(event) {
        const signView = event.target.textContent.trim();
        const signOperator = event.target.dataset.sign;
        if (this.operators.includes(this.lastValue))
        if(
            !display.value ||
            this.lastValue == this.signView ||
            this.value == '.'
        ) return display.value = display.value.slice(0,-1)+signView     

        this.signView = signView
        this.signOperator = signOperator
       

     
        this.setDisplay(signView)




    }

    dot() {
        if(
            !display.value ||
            this.operators.includes(this.lastValue)
        ){
            display.value = display.value + '0'
        }
        this.setDisplay('.')
    }

    calculate() {
        const[num1,num2] = display.value.split(this.signView)
        display.value = eval (num1 + this.signOperator + num2  )
    }

    clear() {
        display.value = null;
    }

    remove() {
        
        let deleted = display.value.split('');
        let newValue = display.value.split('').slice(0,-1).join('');
        display.value =newValue

        console.log(deleted)
        console.log(newValue)
    }


}

const calculator = new Calculator();

for (const number of numbers) {
    number.addEventListener('click', (event) => {
        calculator.numbers(event)
    })
}

for (const sign of signs) {
    sign.addEventListener('click', (event) => {
        calculator.signs(event)
    })
}
dot.addEventListener('click', () => {
    calculator.dot();
})

clear.addEventListener('click', () => {
    calculator.clear();
})

remove.addEventListener('click',()=>{
    calculator.remove()
})
equal.addEventListener('click', ()=>{
    calculator.calculate
})