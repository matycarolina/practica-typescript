type NumberOrString = number | string;

let age: NumberOrString;

class UserB{
    name: string;
}

class AdminB{
    permissions: number;
}

type UserAdmin = UserB & AdminB;

let usr: UserAdmin;

type FuncString = (title: string) => string;

function executor(f: FuncString){}

executor(() => "hola");