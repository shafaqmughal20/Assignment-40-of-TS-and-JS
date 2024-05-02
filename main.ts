//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album (artistName : string, albumTitle : string , Tracks? : number){
    let album : {artist: string, title:string, tracks?:number}={
        artist:artistName,
        title:albumTitle,

    }
if (Tracks !== undefined)
    {album.tracks = Tracks}

return album;


}
//calling three functions and creating 3 variables with different 
let album1= make_album("shafaq", "title 1");
let album2 = make_album("safa", "title 2")
//calling third parameter function
let album3 = make_album("marwa","title 3" ,10)

//print function
console.log(album1)
console.log(album2)
console.log(album3)

