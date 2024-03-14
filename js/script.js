// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.

const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

const container = (document.getElementById('first-container'))
console.log(container)

for (let i = 0; i < list.length; i++) {
    let thisItem = list[i];
    console.log(thisItem);
    container.innerHTML += ('<li>' + thisItem + '</li>')
}

const secondList = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

