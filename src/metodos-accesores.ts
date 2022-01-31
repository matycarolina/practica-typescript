class User{
    private _name: string;
    private _lastName: string;

    get fullName(): string {
        return `${this._name} ${this._lastName}`
    }

    set fullName(fullName: string){
        let words = fullName.split("");
        this._name= words[0];
        this._lastName = words[1];
    }
}

let user: User = new User();
user.fullName = "Mary Contreras";
console.log(user.fullName);