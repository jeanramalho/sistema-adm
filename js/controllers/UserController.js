class userController{
    constructor(){
        this.addEventBtns();
    }

    addLine(user){

    }

    register(){
        let form = document.querySelector('.register')
        let elements = formEl.elements
        let user
        if(this.user == {}) {
           
        }
        
    }

    addEventBtns(){
        document.querySelector('.add').addEventListener('click', () => {
            document.querySelector('.form-add').style.display = 'flex'
        })

        document.querySelectorAll('.close')[0].addEventListener('click', () => {
            document.querySelector('.form-add').style.display = 'none'
        })

        document.querySelectorAll('.close')[1].addEventListener('click', () => {
            document.querySelector('.form-add').style.display = 'none'
        })

        document.querySelectorAll('.check')[1].addEventListener('click', () => {
            this.register()
        })
    }
}