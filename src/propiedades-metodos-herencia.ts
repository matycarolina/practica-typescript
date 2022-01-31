class Video{
    title: string;    
    constructor(title: string){
        console.log(title);
        this.title = title;
    }
    play(){console.log("Playing");}
    stop(){console.log("Stopped");}
    // printTitle(){console.log(this.title)}
    // changeTitle(title: string){this.title = title}
    // getTitle(): string{return this.title}
}

class YoutubeVideo extends Video{
    constructor(title: string){
        super(title);
        console.log("Inicializando Youtube");
    }
    play(){
        super.play();// llamar metodo play de la clase padre
        console.log("Playing a Youtube Video");}

}

let miVideo: Video = new Video('Clases y Objetos de TS');

// miVideo.printTitle();
// miVideo.changeTitle("Demo");
// console.log(miVideo.getTitle());

//JS propiedades y metodos
// "use strict";
// class Video {
//     constructor(title) {
//         console.log(title);
//         this.title = title;
//     }
//     printTitle() { console.log(this.title); }
//     changeTitle(title) { this.title = title; }
//     getTitle() { return this.title; }
// }
// let miVideo = new Video('Clases y Objetos de TS');
// miVideo.printTitle();
// miVideo.changeTitle("Demo");
// console.log(miVideo.getTitle());