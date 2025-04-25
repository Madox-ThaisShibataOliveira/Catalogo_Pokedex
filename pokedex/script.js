document.addEventListener('DOMContentLoaded', () => {
    const pokemonBotoes = document.querySelectorAll('.pokemon-botao');
    const overlays = document.querySelectorAll('.overlay');
    const paineisPokemon = document.querySelectorAll('.painel-pokemon');
    const botoesFechar = document.querySelectorAll('.fechar-painel');

    pokemonBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const pokemonId = botao.id.replace('-btn', '');
            const overlay = document.getElementById(`overlay-${pokemonId}`);
            const painel = document.getElementById(`painel-${pokemonId}`);

            if (overlay && painel) {
                overlay.style.display = 'block';
                painel.style.display = 'block';
            }
        });
    });

    botoesFechar.forEach(botao => {
        botao.addEventListener('click', () => {
            const pokemonId = botao.dataset.pokemon;
            const overlay = document.getElementById(`overlay-${pokemonId}`);
            const painel = document.getElementById(`painel-${pokemonId}`);

            if (overlay && painel) {
                overlay.style.display = 'none';
                painel.style.display = 'none';
            }
        });
    });
});
