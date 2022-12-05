/*
class Movie {
    constructor(Title, Filmmaker, Duration, TimeWatched, Description,imageURL,Year,Actor,Type,Trailer,_id){
        this.Title = Title;
        this.Filmmaker = Filmmaker;
        this.Duration = Duration;
        this.TimeWatched = TimeWatched;
        this.Description = Description;
        this.imageURL = imageURL;
        this.Year = Year;
        this.Actor = Actor;
        this.Type = Type;
        this.Trailer = Trailer;
        this._id = Title;
    } 
}
*/
/*
let movie1 = new Movie("How High","Jesse Dylan",93,93,"Silas est un étudiant vivant dans un ghetto des États-Unis. Malgré son statut de petit voyou de son lycée, il est un génie de la botanique dont la marijuana et, par extension, un petit dealer dans son quartier. Son meilleur ami, Ivory, meurt à la suite d'un rendez-vous amoureux désastreux tout en ayant promis à Silas d'être toujours là pour lui auparavant. Celui-ci ayant été incinéré, Silas décide d'utiliser les cendres de son ami pour faire pousser un plant de cannabis. Au même moment, Jamal vit lui toujours chez sa mère et se fait régulièrement disputer pour des affaires de drogues et de petite délinquance. Au matin de leur examen final, Jamal et Silas se rencontrent par hasard et décident de fumer ensemble leur joint du matin, en essayant la marijuana issue de la culture de Silas avec les cendres d'Ivory.","img/how-high.jpg","2001","Method Man, Redman, Obba Babatundé, Anna Maria Horsford, Mike Epps","Comédie, Fantastique","https://www.youtube.com/embed/7qBazPSNvTc");

let movie2 = new Movie("Las Vegas Parano","Terry Gilliam",118,118,"En 1971, le journaliste Raoul Duke, accompagné de son avocat, maître Gonzo, est en route pour Las Vegas car il a été chargé d'y couvrir un événement sportif majeur, les 400 miles de Las Vegas, une course de motos aux allures de kermesse populaire. Mais ce reportage n'est qu'un prétexte car Duke et Gonzo ont emmené avec eux toute une panoplie des drogues les plus diverses (mescaline, LSD, cocaïne, marijuana, poppers, et même de l'éther), et comptent bien s'adonner à leur consommation tout au long de leur séjour, cherchant à échapper à la cynique réalité des années 1970 et à retrouver le véritable esprit du « rêve américain » qui animait les années 1960. Ils prennent en route un auto-stoppeur mais celui-ci est rapidement effrayé par leur comportement irrationnel et prend la fuite. À leur arrivée à l'hôtel, Duke est en pleine montée d'acide et ses hallucinations attirent l'attention sur lui.","img/las-vegas-parano.jpg","1998","Johnny Depp, Benicio Del Toro, Christina Ricci","Comédie, Aventure","https://www.youtube.com/embed/XAd32LNBdeU");

let movie3 = new Movie("La Grande Vadrouille","Gérard Oury",132,132,"Au retour d'un bombardement sur la Ruhr, un avion anglais de la R.A.F. se trouve pris dans le feu de la Flak allemande qui le descend au-dessus de Paris. Sir Reginald, avant de sauter en parachute sur la ville occupée, fixe à ses hommes un point de ralliement: le Hammam. Peter Cunningham tombe sur l'échafaudage d'Augustin, peintre en bâtiment, nettoyant la façade de la Kommandantur.","img/la-grande-vadrouille.jpg","1966","Bourvil, Louis de Funès, Terry-Thomas, Mike Marshall, Marie Dubois","Comédie","https://www.youtube.com/embed/CisE5TTyI3I");

let movie4 = new Movie("Avatar","James Cameron",162,12,"Sur le monde extraterrestre luxuriant de Pandora vivent les Na'vi, des êtres qui semblent primitifs, mais qui sont très évolués. Jake Sully, un ancien Marine paralysé, redevient mobile grâce à un tel Avatar et tombe amoureux d'une femme Na'vi. Alors qu'un lien avec elle grandit, il est entraîné dans une bataille pour la survie de son monde.","img/avatar.jpg","2009","Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodríguez","Science fiction, Aventure","https://www.youtube.com/embed/O1CzgULNRGs");

let movie5 = new Movie("Le Livre de la jungle","Wolfgang Reitherman",195,124,"La panthère Baghéera découvre dans la jungle un jeune enfant abandonné. Elle décide de le confier à une famille de loups qui l'élève comme un louveteau. Alors que Mowgli a 10 ans, le tigre Shere Kahn approche du territoire des loups. Pour éviter à l'enfant une fin inévitable, les loups l'éloignent et décident de le confier aux hommes d'un village proche. C'est Baghéera qui le conduit. Pendant leur voyage, ils feront de nombreuses rencontres, parfois redoutables.","img/livre-de-la-jungle.jpg","1967","Pas d'acteur, mais les voix (VF) de : Pascal Bressy : Mowgli, Claude Bertrand : Baloo, Jean Stout : Baloo (chant), René Arrieu : Bagheera","Animation, Aventure","https://www.youtube.com/embed/MM8GOli-DIg");

let movie6 = new Movie("Les Visiteurs","Jean-Marie Poiré",107,107,"En l'an de grâce 1112, le comte de Montmirail et son fidèle écuyer, Jacquouille la Fripouille, vont se retrouver propulsés en l'an 1993 après avoir bu une potion magique fabriquée par l'enchanteur Eusaebius. Ainsi, ils auront l'occasion de se défaire d'un terrible sort.","img/les-visiteurs.jpg","1993","Christian Clavier, Jean Reno, Valérie Lemercier, Marie-Anne Chazel","Comédie","https://www.youtube.com/embed/EFp7mBA5hIs");

let movie7 = new Movie("8 Mile","Curtis Hanson",110,110,"A Detroit, en 1995, Jimmy Smith Jr. a des rêves plein la tête, mais il lui manque encore les mots pour les exprimer. Sa vie d'adolescent se déroule entre banlieue blanche et quartiers noirs, le long de cette ligne de démarcation que l'on nomme 8 Mile Road. En dépit de tous ses efforts, Jimmy n'a jamais franchi cette barrière symbolique et continue d'accumuler les déboires familiaux, professionnels et sentimentaux. Un jour, il participe à un clash - une joute oratoire de rappeurs - où il doit faire face à Papa Doc, le chef de la bande des `Leaders du Monde Libre`. Paralysé par le trac, il reste muet et doit quitter la scène sous les huées de la foule. Cette nouvelle humiliation l'oblige à un salutaire examen de conscience. Quelques jours plus tard, Jimmy se retrouve forcé de tenter un come-back...","img/8miles.jpg","2002","Eminem, Kim Basinger, Mekhi Phifer, Brittany Murphy","Drame, Musical","https://www.youtube.com/embed/LmRum7tpFsI");

let movie8 = new Movie("Les Onze Commandements","François Desagnat",85,85,"Le monde va mal, les humains ne rigolent plus, la situation est grave. le dieu de la blague n'a plus qu'une solution : michaël youn et sa bande ! leur mission : accomplir les 11commandements de la blague pour remettre les peuples sur le droit cheminde la rigolade en repoussant les limites de la bêtise.","img/Les-Onze-Commandements.jpg","2004","Michaël Youn, Vincent Desagnat, Benjamin Morgaine","Comédie","https://www.youtube.com/embed/iG5mjZ3t5RQ");

let movie9 = new Movie("Je Suis Une Légende","Francis Lawrence",104,104,"En 2009, la docteure Alice Krippin trouve ce qui semblerait être un vaccin contre le cancer parfaitement efficace. Cependant, la joie est de courte durée, car, à la suite d'une erreur humaine, le vaccin, en réalité corrompu, quitte le lieu clos du laboratoire et se diffuse sur la Terre (pandémie), tuant les humains les moins résistants et faisant muter les autres, les transformant en « infectés ». L'évacuation des survivants est un échec, personne ne trouvant de remède au nouveau virus qui décime l'humanité. Après l'apogée de la catastrophe, un dernier espoir subsiste néanmoins. Le docteur Robert Neville (Will Smith), officier de l'armée des États-Unis, doté de grandes connaissances en virologie et immunisé contre le « virus Krippin », occupe toujours la maison familiale située dans la zone où le virus a émergé la première fois à New York...","img/je-suis-une-legende.jpg","2007","Will Smith, Salli Richardson-Whitfield, Alice Braga, Willow Smith","Science-fiction post-apocalyptique","https://www.youtube.com/embed/yTNKbLhVAQA");

console.log(movie7,movie8,movie9,movie3,movie4,movie5,movie6,movie1,movie2);

let Movies = [movie7,movie8,movie9,movie3,movie4,movie5,movie6,movie1,movie2];
*/
let htmlElements ="";

const movieFetch = fetch("http://localhost:3000/api/movies");

const displaymovieFetch = movieFetch
.then(function(res){
    if(res.ok){
        return res.json();
    }
})
.then(function(data){
      data.forEach(movie => {
        
        DurationInHour = (Math.floor(movie.Duration/60)+"h"+(movie.Duration%60));

        if (movie.Duration === movie.TimeWatched) {

            FullViewed = true;
            FullViewedContent = `<p class="fw-bold text-center pt-2">Film vu</p>
                                <p class="text-center text-success"><i class="fa-solid fa-check"></i></p>`;
        }
        else {

            FullViewed = false;
            FullViewedContent = `<p class="fw-bold text-center pt-2">Film non terminé</p>
                                <p class="text-center"><i class="fa-solid fa-play"></i></p>`;
        }

        htmlElements += `<div class="row px-3 my-5 border border-dark border-opacity-25 rounded shadow pb-4">
        <div id="divfilm" class="col-lg-3 py-1 my-3">
            <div class="card">
                <img src="img/${movie.imageURL}" class="filmimg card-img-top" alt="Affiche du film ${movie.Title}">
                <div class="row card-body">
                  <div class="col-lg-9 fw-light text-start">De <span class="fs-5 fw-semibold">${movie.Filmmaker}</span></div>
                  <div class="col-lg-3 fw-light text-end fw-semibold">${movie.Year}</div>
                </div>
              </div>
        </div>
        <div id="divsyno" class="col-lg-9">
            <div class="row">
                <h3 class="display-2">${movie.Title}</h3>
                <div class="col-lg-11 border border-opacity-75 rounded mb-1">    
                    <h4 class="mt-2 text-decoration-underline">Synopsis</h4>
                    <div class="textjustify text-break py-3 text-truncate">${movie.Description}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-11 border border-opacity-75 rounded my-3">    
                    <h4 class="mt-2 text-decoration-underline">Acteurs principaux</h4>
                    <div class="text-break py-3">${movie.Actor}</div>
                </div>
            </div>
            <div id="divinfo" class="row mt-2">
                <div class="col-lg-2 border border-opacity-50 rounded text-center">
                    <p class="fw-bold mt-2">Durée</p>
                    <p>${DurationInHour}</p>
                </div>
                <div class="col-lg-2 border border-opacity-50 rounded ms-3 text-center">
                    <p class="fw-bold mt-2">Temps regardé</p>
                    <p>${movie.TimeWatched} minutes</p>
                </div>
                <div class="col-lg-2 border border-opacity-50 rounded ms-3 text-center">
                <p class="fw-bold mt-2">Visionné à</p>
                <p>${Math.round((movie.TimeWatched/movie.Duration)*100)} %</p>
                </div>
                <div class="col-lg-2 border border-opacity-50 rounded ms-3">
                ${FullViewedContent}
                </div>
                <div class="col-lg-3 d-flex align-items-center ms-2">
                    <a class="btn btn-dark fs-4" href="fiche-film.html?id=${movie._id}" role="button">En savoir +</a>
                </div>
            </div>
        </div>
    </div>`
        document.getElementById("filmSynopsis").innerHTML = htmlElements;
        console.log(movie.Title);
    })



})
.catch(function(err){
    console.log(err);
});


/*

const movieFetch = fetch("http://localhost:3000/api/movies");

const displaymovieFetch = movieFetch
.then(function(res){
    if(res.ok){
        return res.json();
    }
})
.then(function(data){
      data.forEach(movie => {
        
    })
})
.catch(function(err){
    console.log(err);
});

*/