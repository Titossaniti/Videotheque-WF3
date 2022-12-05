let injectionHeader = document.getElementById("header");

injectionHeader.innerHTML =`<section class="container"><div class="row d-flex justify-content-between">

<div class="col-lg-4 col-ms-5"><p><a href="exo.html" class="fw-bold fs-2 text-decoration-none text-dark" id="logo">Ma Vidéothèque</a></p></div>
    <div class="col-lg-4 col-sm-7 text-end fs-5 pt-3">
        <label for="site-search"></label>
        <input type="search" id="site-search" name="q" placeholder="Rechercher" class="rechercher px-4">
        <button class="site-search"><i class="fa-solid fa-magnifying-glass-arrow-right"></i></button>
        </div></div></section>`