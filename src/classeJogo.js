class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let typeOfAttack = ["magia", "espada", "artes marciais", "shuriken"]
        if(this.type === "mago"){
            console.log(`O ${this.type} atacou usando ${typeOfAttack[0]}`)
        }else if(this.type === "guerreiro"){
            console.log(`O ${this.type} atacou usando ${typeOfAttack[1]}`)
        }else if(this.type === "monge"){
            console.log(`O ${this.type} atacou usando ${typeOfAttack[2]}`)
        }else if(this.type === "ninja"){
            console.log(`O ${this.type} atacou usando ${typeOfAttack[3]}`)
        }else{
            console.log("O tipo do guerreiro não é válido")
        }
    }
}

let guerreiro = new hero("Yuri", 24, "ninja")

guerreiro.attack()