# FoodRecipes

Gotov izgled stranice možete pronaći na linku: https://dainty-youtiao-66c90b.netlify.app/

U slučaju da želite pokrenuti stranicu preko localhosta potrebno je da uradite sljedeće:
1. Izabrati folder na lokalnom računaru i klonirati ovaj repozitorij 
```
git clone https://github.com/sdziho/recipes-app
```
2. otvoriti folder recipes-app i node module
```
npm install 
```
3. instalirati Font Awesome 6 dependecie za prikaz ikona (potrebno izabrati free-regular i free-solid ikone)
```
ng add @fortawesome/angular-fontawesome
ng add @fortawesome/free-regular-svg-icons 
ng add @fortawesome/free-solid-svg-icons
```
4. pokrenuti aplikaciju
```
ng serve
```

## Napomena
U slučaju da se pređe dnevni limit requesta sa API-ja, potrebno je kopirati neki drugi api ključ od onih koji su zakomentarisani u datoteci data.service.ts
