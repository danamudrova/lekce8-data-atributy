/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

(click)

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/



const obrazky = document.querySelectorAll('.obrazky')


obrazky.forEach((obrazky) => {
    obrazky.addEventListener('click', vypisKalorie)
})



function vypisKalorie(udalost) {
    let obrazek = udalost.target;
    let kalorie = obrazek.dataset.ovoce;
    document.querySelector('#vysledek').textContent = kalorie;
}