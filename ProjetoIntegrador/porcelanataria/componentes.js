async function carregarComponente(caminho, seletor) {
    try {
        const resposta = await fetch(caminho);
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status} ao carregar ${caminho}`);
        }
        const html = await resposta.text();
        document.querySelector(seletor).innerHTML = html;
    } catch (erro) {
        console.error('Erro ao carregar componente:', erro);
    }
}

