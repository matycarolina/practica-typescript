class Requestor{
    static url: string = "https://codigofacilito.com";

    static getCourses(){
        console.log(`${Requestor.url}/cursos`);
    }
    static getArticles(){
        console.log(`${Requestor.url}/articles`);
    }
}

Requestor.getArticles();