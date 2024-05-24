document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os itens do dropdown
    var dropdowns = document.querySelectorAll('.dropdown');

    // Adiciona um event listener a cada dropdown
    dropdowns.forEach(function (dropdown) {
        // Adiciona um event listener para o evento de clique
        dropdown.addEventListener('click', function (event) {
            // Previne o comportamento padrão do link
            event.preventDefault();

            // Verifica se o item clicado é um dropdown
            if (event.target.classList.contains('mainmenubtn')) {
                // Obtém o elemento filho ul do dropdown clicado
                var dropdownContent = dropdown.querySelector('.dropdown-content');
                // Alterna a visibilidade do menu dropdown
                dropdownContent.classList.toggle('show');
            } else {
                // Verifica se o item clicado é um item do dropdown com href
                if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
                    var targetId = event.target.getAttribute('href').substr(1); // Remove o '#' do href
                    // Rola a página até a apresentação correspondente
                    var targetElement = document.getElementById(targetId);
                    // Rola a página suavemente até o elemento alvo
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        });
    });

    // Adiciona um event listener para fechar o dropdown se clicar fora dele
    window.addEventListener('click', function (event) {
        dropdowns.forEach(function (dropdown) {
            // Verifica se o item clicado não está dentro do dropdown
            if (!dropdown.contains(event.target)) {
                // Obtém o elemento filho ul do dropdown clicado
                var dropdownContent = dropdown.querySelector('.dropdown-content');
                // Fecha o menu dropdown se estiver aberto
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    });
});