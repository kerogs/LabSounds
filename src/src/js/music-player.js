document.addEventListener('click', function(event) {
    // Trouver l'élément le plus proche avec l'attribut data-clickToPlay
    const target = event.target.closest('[data-clicktoplay]');
    console.log("Target trouvé :", target);

    // Vérifier si on a trouvé un tel élément
    if (target && target.dataset.clicktoplay === 'true') {
        // Récupérer la valeur de data-play
        const play = target.dataset.play;
        console.log("Play:", play);

        let musicPlayArea = document.getElementById("musicPlayArea");
        // check if "active class" exist in musicPlayArea
        if (!musicPlayArea.classList.contains("active")) {
            musicPlayArea.classList.add("active");
        }
        // check for main too
        if(!document.querySelector("main").classList.contains("active")) {
            document.querySelector("main").classList.add("active");
        }
    } else {
        console.log("Aucun élément valide trouvé ou data-clicktoplay n'est pas 'true'.");
    }
});