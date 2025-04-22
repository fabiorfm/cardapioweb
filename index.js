

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formPedido');
    const tabela = document.getElementById('tabelaPedidos');
    const nomeInput = document.getElementById('nome');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const nome = nomeInput.value.trim();
      const produto = document.getElementById('produto').value;
      const quantidade = document.getElementById('quantidade').value;
  
      if (produto && quantidade > 0) {
        const linha = document.createElement('tr');
  
        linha.innerHTML = `
          <td>${produto}</td>
          <td>${quantidade}</td>
          <td><button class="remove-btn">Remover</button></td>
        `;
  
        tabela.appendChild(linha);
  
        // Mantém o nome após reset
        form.reset();
        
        nomeInput.value = nome;
      }
    });
  
    // Remover item
    tabela.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-btn")) {
        const linha = event.target.closest("tr");
        linha.remove();
      }
    });
  
    // Tornando a função acessível no botão Finalizar
    window.finalizarPedido = function() {
      const linhas = tabela.querySelectorAll('tr');
  
      if (linhas.length === 0) {
        alert('Adicione ao menos um item antes de finalizar o pedido.');
        return;
      }
  
      const nomeCliente = nomeInput.value.trim();
      if (!nomeCliente) {
        alert('Informe o nome do cliente antes de finalizar o pedido.');
        return;
      }
  
      const confirmar = confirm('Tem certeza que deseja finalizar o pedido?');
      if (!confirmar) return;
  
      alert('Pedido finalizado com sucesso!\nObrigado, ' + nomeCliente + '!');
  
      tabela.innerHTML = '';
      form.reset();
    };
  });
  
