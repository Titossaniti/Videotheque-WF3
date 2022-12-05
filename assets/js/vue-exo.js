const myFilmId = new URLSearchParams(window.location.search).get("id");
console.log(myFilmId);




const movieFetchFicheFilm = fetch(`https://quaint-tan-bull.cyclic.app/api/movies/${myFilmId}`);


let fichefilmHTML = "";


const displaymovieFetchFicheFilm = movieFetchFicheFilm
.then(function(res){
    if(res.ok){
        return res.json();
    }
})
.then((ficheFilm) => {
    
    if (ficheFilm.Duration === ficheFilm.TimeWatched) {
        FullViewedContent = `<p class="fw-bold text-end fs-4">Vous avez déjà vu ce film<i class="fa-solid fa-check ps-4 text-success"></i></p>`;
    }
    else {
        FullViewedContent = `<p class="fw-bold text-end fs-4">Vous n'avez pas terminé ce film<i class="fa-solid fa-play  ps-4"></i></p>`;
    }


    fichefilmHTML = `
    <div class="col-lg-4 col-md-12 d-flex justify-content-md-center">
    <img src="${ficheFilm.imageURL}" width=100% class="roundedImg ficheFilmImg">
</div>
<div class="col-lg-8 row border border-dark roundedFilmBloc">
    <h1 class="fw-bold display-2">${ficheFilm.Title}</h1>
    <div class="col-8">
        <p><span class="fw-semibold">Réalisé par :</span> ${ficheFilm.Filmmaker}</p>
        <p><span class="fw-semibold">Acteurs principaux :</span> ${ficheFilm.Actor}</p>
        <p><span class="fw-semibold">Genre :</span> ${ficheFilm.Type}</p>
    </div>
    <div class="col-4 text-end">
        <p><span class="fw-semibold">Année de sortie :</span> ${ficheFilm.Year}</p>
        <p><span class="fw-semibold">Durée :</span> ${DurationInHour}</p>
        <p><span class="fw-semibold">Vu :</span> ${Math.round((ficheFilm.TimeWatched/ficheFilm.Duration)*100)} %</p>
    </div>
    <div class="text-start">
        <h2 class="fs-4 text-decoration-underline">Synopsis</h2>
        <p class="textjustify">${ficheFilm.Description}</placeat></p>
    </div>
    <div class="col-12 py-2">
        <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="${Math.round((ficheFilm.TimeWatched/ficheFilm.Duration)*100)}" aria-valuemin="0" aria-valuemax="100" style="width: ${Math.round((ficheFilm.TimeWatched/ficheFilm.Duration)*100)}%"></div>
        </div>
    </div>
</div>

<div class="col-12 pt-5">
    <h2 class="text-center pb-2 border border-dark rounded">Bande Annonce</h2>
    <div class="text-center">
        <iframe width="100%" height="600" src="${ficheFilm.Trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded"></iframe>
    </div>
</div>
<div class="row pt-3">
    <div class="col-5 offset-7 text-end fw-bold">${FullViewedContent}</div> 
</div>
    `
document.getElementById("fichefilm").innerHTML = fichefilmHTML;
  })
.catch(function(err){
  console.log(err);
})