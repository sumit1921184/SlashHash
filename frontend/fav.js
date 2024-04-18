async function gettinFav(){
    try{
        let res = await fetch("http://localhost:8080/favourite");
        let dataa = await res.json();
        console.log(dataa);
        displayFav(dataa);
    }
    catch(err){
        console.log(err)
    }
}

gettinFav();

function displayFav(data) {
    let movieCont = document.getElementById("movie-cont");
   console.log(movieCont);
    data.forEach((elem) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let poster = document.createElement("img");
        poster.src = elem.poster;

        let title = document.createElement("p");
        title.textContent = elem.title;

        let Year = document.createElement("p");
        Year.innerHTML = elem.year;


        let Type = document.createElement("p");
        Type.innerHTML = elem.types;

        let button = document.createElement("button");
        button.innerText="Add to favourite";
        


        card.append(poster, title, Year, Type,button);
        movieCont.append(card);
    });
}