 const radio = {
     stations: [
         {
             name: "Lite FM",
             songs:[{
                 title: "I cant go for that",
                 artist: "Hall and Oates"
             },
             {
                 title: "Human Nature",
                 artist: "Micheal Jackson"
             }
             ]
         },

         {
             name: "Hot 97", 
             songs: [
            {
                 title: "baby on baby",
                 artist: "dababy"
             },
             {
                 title: "Too sexy",
                 artist: "Drake"
             }
            ]
         }
     ],

     random(){
        let radioIndex = Math.floor(Math.random()* radio.stations.length); 
        let songsIndex = Math.floor(Math.random()* radio.stations[radioIndex].songs.length);
        return radio.stations[radioIndex].songs[songsIndex]
     }
}

const song = radio.random()
console.log("Now playing:  " + song.title + " by " + song.artist)

// ======Animals=====

class Animal{
    constructor(name, color, age, legs){
        this.name = name
        this.color = color
        this.age = age
        this.legs = legs
    }
    genericSound(){
        console.log("This is a generic animal sound! WOOOO! ")
    }
}

const dog = new Animal('spot' , 'brown', 2, 4)

console.log(dog)
dog.genericSound()