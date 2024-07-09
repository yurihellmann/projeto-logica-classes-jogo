class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(type){
        let typeOfAttack = ["magia", "espada", "artes marciais", "shuriken"]
        if (type == "mago"){
            console.log(`O ${type} atacou usando ${typeOfAttack[0]}`)
        }
    }
}

let guerreiro = new hero("Yuri", 24, "mago")

guerreiro.attack()