const email = document.querySelector('#email')
const pass = document.querySelector('#password')

const submitBtn = document.querySelector('#submit')
const btn_wrapper = document.querySelector('.btn_wrapper')


const validSubmit = function(){
    if(pass.value.length >= 10 && email.value.length >= 10){
        submitBtn.style.background = 'rgb(60, 223, 109)'
        submitBtn.textContent = "LOG IN"
    }else{
        submitBtn.style.background = 'rgb(247, 25, 25)' 
        submitBtn.textContent = "INVALID"
    } 
}

email.addEventListener('keyup',function(){
    if(this.value.length >= 10){
        this.classList.add('outline')
        this.classList.remove('noinput')
        this.style.border = "2px solid rgb(69, 231, 69)"

        validSubmit();

    }else{
        this.classList.add('noinput')
        this.classList.remove('outline')
        this.style.border = "2px solid rgb(224, 52, 52)"

        validSubmit()
    }

})

pass.addEventListener('keyup',function(){
    if(this.value.length >= 10 ){
        this.classList.add('outline')
        this.classList.remove('noinput')
        this.style.border = "2px solid rgb(69, 231, 69)"

        validSubmit()

    }else if(this.value.length < 10){
        this.classList.add('noinput')
        this.classList.remove('outline')
        this.style.border = "2px solid rgb(224, 52, 52)"

        validSubmit()

    }else if(this.value == ""){
        this.classList.remove('outline')
        this.style.border = "2px solid"

        validSubmit()
    }

})


submitBtn.addEventListener('mouseover',function(){
    if(pass.value.length <= 10 || email.value.length <= 10){    

        validSubmit()

        btn_wrapper.style.textAlign == 'right' ?  btn_wrapper.style.textAlign = 'left' : btn_wrapper.style.textAlign = 'right';

    }else{
        this.style.background = 'rgb(60, 223, 109)'
    }
})

const success = function(){
    alert("Log in Success")
}

submitBtn.addEventListener('click',success)

