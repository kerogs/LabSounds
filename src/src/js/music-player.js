document.addEventListener('click', function (event) {
    // Trouver l'élément le plus proche avec l'attribut data-clickToPlay
    const target = event.target.closest('[data-clicktoplay]');
    console.log("Target trouvé :", target);

    // Vérifier si on a trouvé un tel élément
    if (target && target.dataset.clicktoplay === 'true') {
        // Récupérer la valeur de data-play
        const play = target.dataset.play;
        console.log("Play:", play);

        // send outside iframe
        // send outside iframe
        const kstp = {
            "header": "musicChange",
            "data": {
                "action":"newPlay",
                "id": play
            },
            "footer": {
                "protocol": "kstp",
                "version": "1.0",
            }
        }
        window.top.postMessage(kstp, '*')
    }
});