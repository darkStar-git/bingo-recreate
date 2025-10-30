let sorteador = [];

function sort() {
    const numero = Math.floor(Math.random() * 75) + 1;

    if (sorteador.includes(numero)) {
        sort(); // se já saiu, tenta de novo
        return;
    }

    sorteador.push(numero);

    // mantém apenas os últimos 5
    const ultimos5 = sorteador.filter((_, i) => i >= sorteador.length - 5);

    mostrarUltimos5(ultimos5);
    mostrarUltimo(numero);
    mostrarTodos();
}

function mostrarUltimos5(ultimos) {
    const resultado = document.getElementById('sorted5');
    resultado.innerHTML = '';

    ultimos.forEach(num => {
        const span = document.createElement('span');
        span.classList.add('sorted');
        span.textContent = num;
        resultado.appendChild(span);
    });
}

function mostrarUltimo(numero) {
    const last = document.getElementById('lastSort');
    last.textContent = numero;
    last.classList.add('show');

    // efeito de pulinho
    setTimeout(() => last.classList.remove('show'), 400);
}

function mostrarTodos() {
    const todos = document.getElementById('allSorted');
    todos.innerHTML = '';

    sorteador.forEach(num => {
        const span = document.createElement('span');
        span.classList.add('sorted');
        span.textContent = num;
        todos.appendChild(span);
    });
}

function restart() {
    sorteador = [];
    document.getElementById('sorted5').innerHTML = '';
    document.getElementById('lastSort').innerHTML = '';
    document.getElementById('allSorted').innerHTML = '';
}