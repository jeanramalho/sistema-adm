class User {
    constructor(id, name, photo, email, phone, admin, password){
        this._id = id
        this._name = name
        this._photo = photo
        this._email = email
        this._phone = phone
        this._admin = admin
        this._password = password

        let date = new date()

        this.date = date.toLocaleDateString('pt-BR')+` `+date.toLocadeTimeString('pt-BR').slice(0,5)
    }
}