let search = document.getElementById("search");
let search1 = document.getElementById("search-btn1");

search1.addEventListener("click",searchFunction);

async function searchFunction(){
    let val=search.value;
    try{
let res= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=67a58a2d&s=${val}`);
let {Search}=await res.json();
console.log(Search);
display(Search);
    }
    catch(err){
        console.log(err);
    }
  
    console.log(val);
}

function display(data) {
    let movieCont = document.getElementById("movie-cont");
   console.log(movieCont);
    data.forEach((elem) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let poster = document.createElement("img");
        poster.src = elem.Poster;

        let title = document.createElement("p");
        title.textContent = elem.Title;

        let Year = document.createElement("p");
        Year.innerHTML = elem.Year;

        let imdbID = document.createElement("p");
        imdbID.innerHTML = elem.imdbID;

        let Type = document.createElement("p");
        Type.innerHTML = elem.Type;
        let button = document.createElement("button");
        button.innerText="Add to favourite";


        card.appendChild(poster, title, Year, imdbID, Type,button);
        movieCont.append(card);
    });
}