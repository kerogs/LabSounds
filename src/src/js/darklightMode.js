function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Convertir les jours en millisecondes
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

// Fonction pour modifier un cookie (identique à la création, car on écrase l'ancien avec le nouveau)
function modifyCookie(name, value, days) {
    setCookie(name, value, days); // Réutilisation de setCookie
}

// Fonction pour supprimer un cookie
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`; // Date d'expiration passée
}

function getCookie(name) {
    const cookies = document.cookie.split(';'); // Sépare tous les cookies
    for (let cookie of cookies) {
        cookie = cookie.trim(); // Supprime les espaces inutiles
        if (cookie.startsWith(`${name}=`)) {
            return decodeURIComponent(cookie.split('=')[1]); // Retourne la valeur décodée
        }
    }
    return null; // Retourne null si le cookie n'existe pas
}

let buttonLightDark = document.querySelector('#buttonLightDark');

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"/></g></svg>`;
const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"/></svg>`;

// check for mode
if (getCookie('mode') === 'dark') {
    document.querySelector('html').setAttribute('data-theme', 'default_dark');
    buttonLightDark.innerHTML = lightIcon;
} else{
    document.querySelector('html').setAttribute('data-theme', 'default_light');
    buttonLightDark.innerHTML = darkIcon;
}
console.log("Theme mode: " + getCookie('mode'));

function toggleDarkLightMode(){
    if (getCookie('mode') === 'dark') {
        modifyCookie('mode', 'light', 365);
        document.querySelector('html').setAttribute('data-theme', 'light');
        document.querySelector('html').setAttribute('data-theme', 'default_light');
        buttonLightDark.innerHTML = darkIcon;
    } else {
        modifyCookie('mode', 'dark', 365);
        document.querySelector('html').setAttribute('data-theme', 'dark');
        document.querySelector('html').setAttribute('data-theme', 'default_dark');
        buttonLightDark.innerHTML = lightIcon;

    }

    console.log("Theme mode: " + getCookie('mode'));
}