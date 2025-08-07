// ========== MODAL CONTATO (WHATSAPP) ==========
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function enviarMensagem() {
  const texto = document.getElementById("mensagem").value.trim();
  if (!texto) {
    alert("Digite uma mensagem antes de enviar.");
    return;
  }
  const numero = "5524999522320";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
  fecharModal();
}

// ========== MODAL MAPA ==========
function abrirMapa() {
  document.getElementById("modalMapa").style.display = "block";
}

function fecharMapa() {
  document.getElementById("modalMapa").style.display = "none";
}

// ========== FECHAR MODAIS CLICANDO FORA ==========
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  const modalMapa = document.getElementById("modalMapa");
  const modalCardapio = document.getElementById("modalCardapio");
  const modalPedido = document.getElementById("modalPedido");
  const modalCardapioPedido = document.getElementById("modalCardapioPedido");

  if (event.target === modal) fecharModal();
  if (event.target === modalMapa) fecharMapa();
  if (event.target === modalCardapio) fecharCardapio();
  if (event.target === modalPedido) fecharModalPedido();
  if (event.target === modalCardapioPedido) fecharCardapioPedido();
};

// ========== MODAL PEDIDO (DADOS DO CLIENTE) ==========
function abrirModalPedido() {
  document.getElementById("modalPedido").style.display = "block";
  document.body.classList.add("modal-aberto");
}

function fecharModalPedido() {
  document.getElementById("modalPedido").style.display = "none";
  document.body.classList.remove("modal-aberto");
}

// ========== MODAL PEDIDO (CARDÁPIO) ==========
const itensCardapio = {
  "Petiscos": [
    { nome: "Aipim Frito", preco: "24,90" },
    { nome: "Aipim Frito com Linguiça", preco: "33,90" },
    { nome: "Batata Frita (chips)", preco: "33,90" },
    { nome: "Batata Frita (palito)", preco: "39,90" },
    { nome: "Bolinho de Feijoada (12un)", preco: "39,90" },
    { nome: "Frango à Passarinho", preco: "49,90" },
    { nome: "Isca de Frango Empanada", preco: "42,90" }
  ],
  "Petiscos do Mar": [
    { nome: "Bolinho de Bacalhau", preco: "39,90" },
    { nome: "Bolinho de Camarão", preco: "39,90" },
    { nome: "Bolinho de Tilápia", preco: "39,90" },
    { nome: "Casquinha de Siri", preco: "19,90" },
    { nome: "Casquinha de Camarão", preco: "19,90" },
    { nome: "Camarão Frito (com casca)", preco: "55,90" },
    { nome: "Camarão Frito Empanado", preco: "55,90" },
    { nome: "Ceviche de Tilápia", preco: "24,90" },
    { nome: "Isca de Tilápia", preco: "59,90" },
    { nome: "Lambari", preco: "39,90" },
    { nome: "Lula Frita Empanada", preco: "65,90" },
    { nome: "Pastel de Camarão (6 un)", preco: "41,90" },
    { nome: "Pastel de Camarão com Catupiry (6un)", preco: "49,90" },
    { nome: "Trio Juca", preco: "69,90" }
  ],
  "Moquecas": [
    { nome: "Cação (2 pessoas)", preco: "129,90" },
    { nome: "Cação (3 pessoas)", preco: "149,90" },
    { nome: "Linguado (2 pessoas)", preco: "139,90" },
    { nome: "Linguado (3 pessoas)", preco: "159,90" },
    { nome: "Tilápia (2 pessoas)", preco: "129,90" },
    { nome: "Tilápia (3 pessoas)", preco: "149,90" }
  ],
  "Caldeirada de Frutos do Mar": [
    { nome: "2 pessoas", preco: "169,90" },
    { nome: "3 pessoas", preco: "189,90" }
  ],
  "Caldos": [
    { nome: "Camarão", preco: "15,90" },
    { nome: "Peixe", preco: "15,90" }
  ],
  "Prato Individual": [
    { nome: "Corvina em Posta", preco: "39,90" },
    { nome: "Filé de Frango (frito ou grelhado)", preco: "35,90" },
    { nome: "File de Tilápia (frita ou grelhada)", preco: "39,90" },
    { nome: "Strogonoff de Camarão", preco: "69,90" },
    { nome: "Strogonoff de Frango", preco: "49,90" }
  ],
  "Refeições (2 pessoas)": [
    { nome: "Bobó de Camarão", preco: "129,90" },
    { nome: "Camarão ao Catupiry", preco: "139,90" },
    { nome: "Filé de Frango (frito ou grelhado)", preco: "79,90" },
    { nome: "File de Linguado (frito)", preco: "115,90" },
    { nome: "File de Tilápia (frita ou grelhada)", preco: "109,90" },
    { nome: "Strogonoff de Camarão", preco: "119,90" },
    { nome: "Strogonoff de Frango", preco: "79,90" }
  ],
  "Guarnições": [
    { nome: "Arroz", preco: "12,50" },
    { nome: "Pirão", preco: "18,90" },
    { nome: "Purê", preco: "23,90" },
    { nome: "Salada", preco: "16,00" }
  ],
  "Sobremesas": [
    { nome: "Brownie", preco: "10,00" },
    { nome: "Brownie c/ Sorvete", preco: "20,90" },
    { nome: "Doce de Abóbora", preco: "8,00" },
    { nome: "Doce de Leite", preco: "8,00" },
    { nome: "Doce de Mamão", preco: "8,00" }
  ],
  "Bebidas sem Álcool": [
    { nome: "Água", preco: "4,50" },
    { nome: "Água com Gás", preco: "5,00" },
    { nome: "DelValle", preco: "8,50" },
    { nome: "Guaraviton", preco: "7,90" },
    { nome: "H2O (normal/limoneto)", preco: "8,90" },
    { nome: "Refrigerante (lata 350ml)", preco: "8,90" },
    { nome: "Refrigerante (1 litro)", preco: "12,90" },
    { nome: "Refrigerante (2 litros)", preco: "17,00" }
  ],
  "Cerveja Lata (350ml)": [
    { nome: "Brahma", preco: "8,00" },
    { nome: "Brahma Zero", preco: "9,00" }
  ],
  "Cerveja Long Neck": [
    { nome: "Budweiser", preco: "10,90" },
    { nome: "Heineken", preco: "11,90" }
  ],
  "Cerveja Garrafa (600ml)": [
    { nome: "Antártica/Brahma/Skol", preco: "13,90" },
    { nome: "Heineken", preco: "15,90" },
    { nome: "Original/Brama Extra", preco: "17,90" }
  ],
  "Drinks": [
    { nome: "Caipirinha (cachaça)", preco: "18,90" },
    { nome: "Caipiríssima (vodka)", preco: "19,90" }
  ],
  "Destilados": [
    { nome: "Campari, Bacardi, Gin, Martini", preco: "14,00" },
    { nome: "Tequila", preco: "19,00" },
    { nome: "Vodka", preco: "15,00" },
    { nome: "Whisky", preco: "19,00" },
    { nome: "Ypioca", preco: "9,00" }
  ],
  "Vinho": [
    { nome: "Taça", preco: "13,90" }
  ]
};

const detalhesPratos = {
  "Corvina em Posta": {
    acompanhamentos: ["arroz", "pirão", "salada"],
    escolhaUnica: ["purê", "batata chips", "mandioca frita"]
  },
  "Filé de Frango (frito ou grelhado)": {
    opcoes: ["frito", "grelhado"],
    acompanhamentos: ["arroz", "purê", "salada"]
  },
  "File de Tilápia (frita ou grelhada)": {
    opcoes: ["frita", "grelhada"],
    acompanhamentos: ["arroz", "pirão", "salada"],
    escolhaUnica: ["purê", "batata chips", "mandioca frita"]
  },
  "Strogonoff de Camarão": {
    acompanhamentos: ["arroz", "batata palha", "salada"]
  },
  "Strogonoff de Frango": {
    acompanhamentos: ["arroz", "batata palha", "salada"]
  },

  // Refeições para 2 pessoas
  "Bobó de Camarão": {
    acompanhamentos: ["arroz", "farofa", "salada"]
  },
  "Camarão ao Catupiry": {
    acompanhamentos: ["arroz", "batata palha", "salada"]
  },
  "File de Linguado (frito)": {
    acompanhamentos: ["arroz", "pirão", "salada"],
    escolhaUnica: ["purê", "batata chips", "mandioca frita"]
  },
  "File de Tilápia (frita ou grelhada)": {
    opcoes: ["frita", "grelhada"],
    acompanhamentos: ["arroz", "pirão", "salada"],
    escolhaUnica: ["purê", "batata chips", "mandioca frita"]
  }
};

const bairrosPorCidade = {
  "Volta Redonda": [
    "Aero Clube", "Aterrado", "Açude", "Barreira Cravo", "Bela Vista", "Belmonte", "Belo Horizonte", "Bom Jesus",
    "Brasilândia", "Caieira", "Cailândia", "Candelária", "Casa de Pedra", "Centro", "Colorado", "Conforto", "Coqueiros",
    "Dom Bosco", "Duzentos e Quarenta e Nove", "Eldorado", "Eucaliptal", "Jardim Amália", "Jardim Belvedere",
    "Jardim Cidade do Aço", "Jardim Esperança", "Jardim Europa", "Jardim Normandia", "Jardim Paraíba",
    "Jardim Ponte Alta", "Jardim Primavera", "Jardim Suíça", "Jardim Tiradentes", "Jardim Veneza",
    "Jardim Vila Rica - Tiradentes", "Laranjal", "Limoeiro", "Mariana Torres", "Minerlândia", "Mirante do Vale",
    "Monte Castelo", "Morada do Campo", "Morro São Carlos", "Morro da Conquista", "Niterói",
    "Nossa Senhora das Graças", "Nova Esperança", "Nova Primavera", "Nova São Luiz", "Padre Josino",
    "Parque das Ilhas", "Parque Vitória", "Pinto da Serra", "Ponte Alta", "Retiro", "Rio das Flores", "Roma",
    "Rústico", "Sam Remo", "Santa Cruz", "Santa Cruz II", "Santa Rita do Zarur", "Santo Agostinho", "São Carlos",
    "São Cristóvão", "São Geraldo", "São João", "São João Batista", "São Lucas", "São Luís", "São Sebastião",
    "Sessenta", "Siderlândia", "Siderópolis", "Sidervile", "Três Poços", "Vale Verde", "Vila Americana",
    "Vila Brasília", "Vila Mury", "Vila Rica", "Vila Rica Ouro Verde", "Vila Santa Cecília", "Voldac",
    "Volta Grande", "Volta Grande II"
  ],
  "Barra Mansa": [
    "9 de Abril", "Assunção", "Boavista 2", "Mangueira", "Metalurgico", "Paraíso",
    "Santa Rosa", "São Sebastião", "Vale do Paraíba", "Vila Elmira"
  ]
};

const valorEntregaPorBairro = {
  // Volta Redonda - R$1,00
  "Açude": 1.00, "Aero Clube": 1.00, "Água Limpa": 1.00, "Área Rural de Volta Redonda": 1.00,
  "Aterrado": 1.00, "Barreira Cravo": 1.00, "Bela Vista": 1.00, "Belmonte": 1.00, "Belo Horizonte": 1.00,
  "Bom Jesus": 1.00, "Brasilândia": 1.00, "Caieira": 1.00, "Cailândia": 1.00, "Candelária": 1.00,
  "Casa de Pedra": 1.00, "Centro": 1.00, "Colorado": 1.00, "Conforto": 1.00, "Coqueiros": 1.00,
  "Dom Bosco": 1.00, "Duzentos e Quarenta e Nove": 1.00, "Eldorado": 1.00, "Eucaliptal": 1.00,
  "Jardim Amália": 1.00, "Jardim Belvedere": 1.00, "Jardim Cidade do Aço": 1.00, "Jardim Esperança": 1.00,
  "Jardim Europa": 1.00, "Jardim Normandia": 1.00, "Jardim Paraíba": 1.00, "Jardim Ponte Alta": 1.00,
  "Jardim Primavera": 1.00, "Jardim Suíça": 1.00, "Jardim Tiradentes": 1.00, "Jardim Veneza": 1.00,
  "Jardim Vila Rica - Tiradentes": 1.00, "Laranjal": 1.00, "Limoeiro": 1.00, "Mariana Torres": 1.00,
  "Minerlândia": 1.00, "Mirante do Vale": 1.00, "Monte Castelo": 1.00, "Morada do Campo": 1.00,
  "Morro da Conquista": 1.00, "Morro São Carlos": 1.00, "Niterói": 1.00, "Nossa Senhora das Graças": 1.00,
  "Nova Esperança": 1.00, "Nova Primavera": 1.00, "Nova São Luiz": 1.00, "Padre Josino": 1.00,
  "Parque das Ilhas": 1.00, "Parque Vitória": 1.00, "Pinto da Serra": 1.00, "Ponte Alta": 1.00,
  "Retiro": 1.00, "Rio das Flores": 1.00, "Roma": 1.00, "Rústico": 1.00, "Sam Remo": 1.00,
  "Santa Cruz": 1.00, "Santa Cruz II": 1.00, "Santa Rita do Zarur": 1.00, "Santo Agostinho": 1.00,
  "São Carlos": 1.00, "São Cristóvão": 1.00, "São Geraldo": 1.00, "São João": 1.00,
  "São João Batista": 1.00, "São Lucas": 1.00, "São Luís": 1.00, "São Sebastião": 1.00,
  "Sessenta": 1.00, "Siderlândia": 1.00, "Siderópolis": 1.00, "Sidervile": 1.00,
  "Três Poços": 1.00, "Vale Verde": 1.00, "Vila Americana": 1.00, "Vila Brasília": 1.00,
  "Vila Mury": 1.00, "Vila Rica": 1.00, "Vila Rica Ouro Verde": 1.00, "Vila Santa Cecília": 1.00,
  "Voldac": 1.00, "Volta Grande": 1.00, "Volta Grande II": 1.00,

  // Barra Mansa
  "9 de Abril": 8.00, "Assunção": 8.00, "Boavista 2": 8.00, "Mangueira": 8.00,
  "Metalurgico": 8.00, "Paraíso": 8.00, "São Sebastião": 8.00, "Vila Eumira": 8.00,
  "Santa Rosa": 12.00, "Vale do Paraíba": 12.00
};

function atualizarBairrosPorCidade() {
  const cidadeSelecionada = document.getElementById("cidade").value;
  const bairroSelect = document.getElementById("bairro");

  // Limpar bairros anteriores
  bairroSelect.innerHTML = "";

  // Adicionar novos bairros
  if (bairrosPorCidade[cidadeSelecionada]) {
    bairrosPorCidade[cidadeSelecionada].sort().forEach(bairro => {
      const option = document.createElement("option");
      option.value = bairro;
      option.textContent = bairro;
      bairroSelect.appendChild(option);
    });
  }

  atualizarTotal(); // atualiza total com novo bairro
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cidade").addEventListener("change", atualizarBairrosPorCidade);
  atualizarBairrosPorCidade(); // carregar bairros iniciais
});

function abrirCardapioPedido() {
  const nome = document.getElementById("nome").value.trim();
  const cidade = document.getElementById("cidade").value;
  const bairro = document.getElementById("bairro").value;
  const rua = document.getElementById("rua").value.trim();
  const numero = document.getElementById("numero").value.trim();

  if (!nome || !cidade || !bairro || !rua || !numero) {
    alert("Por favor, preencha todos os campos antes de continuar.");
    return;
  }

  fecharModalPedido();

  const lista = document.getElementById("listaItens");
  lista.innerHTML = "";

  let index = 0;

  for (const categoria in itensCardapio) {
	const titulo = document.createElement("h3");
	titulo.className = "titulo-categoria";
	titulo.textContent = categoria;
	lista.appendChild(titulo);
	
    if (categoria === "Caldeirada de Frutos do Mar") {
      const descricao = document.createElement("p");
      descricao.style.fontSize = "0.95em";
      descricao.style.marginTop = "-8px";
      descricao.style.marginBottom = "12px";
      descricao.style.color = "#2B5C6B";
      descricao.innerText = "(peixe, polvo, lula, camarão e mexilhão)";
      lista.appendChild(descricao);
    }

    itensCardapio[categoria].forEach(item => {
      const div = document.createElement("div");
      div.className = "item-pedido";

	let html = `
	  <span>${item.nome} - R$${item.preco}</span>
	  <div class="controle-quantidade">
		<button onclick="alterarQtd(${index}, -1)">-</button>
		<span id="qtd-${index}">0</span>
		<button onclick="alterarQtd(${index}, 1)">+</button>
	  </div>
	`;

	const detalhes = detalhesPratos[item.nome];
	if (detalhes) {
	  html += `<div id="detalhes-${index}" class="detalhes-prato" style="display: none;">`;
	  
	  if (detalhes.opcoes) {
		html += `<div style="margin-bottom: 5px;">
          <strong>Como deseja o preparo?</strong>
          <div class="grupo-opcoes" data-grupo="opcao-${index}">`;

        detalhes.opcoes.forEach((op) => {
          html += `<button type="button" class="botao-opcao" onclick="selecionarOpcao(this, 'opcao-${index}')">${op}</button>`;
        });

        html += `</div></div>`;

	  }

	  if (detalhes.acompanhamentos) {
		html += `<div style="margin-top: 8px;"><strong>Acompanhamentos:</strong><ul style="margin: 5px 0;">`;
		detalhes.acompanhamentos.forEach(acc => {
		  html += `<li>${acc}</li>`;
		});
		html += `</ul></div>`;
	  }

	  if (detalhes.escolhaUnica) {
		html += `<div style="margin-top: 8px;">
          <strong>Escolha 1:</strong>
          <div class="grupo-opcoes" data-grupo="acompExtra-${index}">`;

        detalhes.escolhaUnica.forEach((op) => {
          html += `<button type="button" class="botao-opcao" onclick="selecionarOpcao(this, 'acompExtra-${index}')">${op}</button>`;
        });

        html += `</div></div>`;
	  }

	  html += `</div>`; // fecha div de detalhes
	}

	div.innerHTML = html;

      lista.appendChild(div);
      index++;
    });
  }

  document.getElementById("modalCardapioPedido").style.display = "block";
  document.body.classList.add("modal-aberto");
  document.getElementById("bairro").addEventListener("change", atualizarTotal);
  atualizarTotal(); // mostra o total inicial (R$ 0,00)
}

function fecharCardapioPedido() {
  document.getElementById("modalCardapioPedido").style.display = "none";
  document.body.classList.remove("modal-aberto");
}

function alterarQtd(index, delta) {
  const span = document.getElementById(`qtd-${index}`);
  let valor = parseInt(span.innerText);
  valor = Math.max(0, valor + delta);
  span.innerText = valor;

  const divDetalhes = document.getElementById(`detalhes-${index}`);
  if (divDetalhes) {
    divDetalhes.style.display = valor > 0 ? "block" : "none";
  }

  atualizarTotal();
}

function selecionarOpcao(botao, grupoNome) {
  const grupo = document.querySelectorAll(`[data-grupo="${grupoNome}"] .botao-opcao`);
  grupo.forEach(btn => btn.classList.remove("selecionado"));
  botao.classList.add("selecionado");
}

function atualizarTotal() {
  const itens = document.querySelectorAll(".item-pedido");
  let total = 0;

  let index = 0;
  for (const categoria in itensCardapio) {
    itensCardapio[categoria].forEach(item => {
      const spanQtd = document.getElementById(`qtd-${index}`);
      const qtd = parseInt(spanQtd?.innerText || "0");
      const preco = parseFloat(item.preco.replace(",", "."));
      total += qtd * preco;
      index++;
    });
  }

  const bairroSelecionado = document.getElementById("bairro")?.value;
  const valorEntrega = valorEntregaPorBairro[bairroSelecionado] || 0;
  total += valorEntrega;

  const valorTotal = document.getElementById("valorTotal");
  if (valorTotal) {
    valorTotal.innerHTML = `Total: R$ ${total.toFixed(2).replace(".", ",")} <br><small style="font-size:0.9em; font-weight:normal;">(Entrega ${bairroSelecionado} R$ ${valorEntrega.toFixed(2).replace(".", ",")})</small>`;
  }
}

// ========== ENVIO DO PEDIDO PARA WHATSAPP ==========
document.addEventListener("DOMContentLoaded", function () {
  const btnEnviar = document.getElementById("enviarPedido");
  if (btnEnviar) {
	btnEnviar.addEventListener("click", function () {
	  const cidade = document.getElementById("cidade").value.trim();
	  const bairro = document.getElementById("bairro").value.trim();
	  const rua = document.getElementById("rua").value.trim();
	  const numero = document.getElementById("numero").value.trim();
	  const nome = document.getElementById("nome").value.trim();

	  if (!cidade || !bairro || !rua || !numero || !nome) {
		alert("Por favor, preencha todos os campos do endereço antes de continuar.");
		return;
	  }

	  const itens = document.querySelectorAll(".item-pedido");
	  let mensagem = `Olá, meu nome é ${nome} e gostaria de fazer um pedido:\n\n📍 *Endereço:*\n${rua}, nº ${numero} - ${bairro}, ${cidade}\n\n📝 *Itens:*\n`;
	  let algumItemSelecionado = false;
	  let index = 0;
	  let total = 0;

	  for (const categoria in itensCardapio) {
		itensCardapio[categoria].forEach(item => {
		  const qtd = parseInt(document.getElementById(`qtd-${index}`)?.innerText || "0");
		  if (qtd > 0) {
			algumItemSelecionado = true;

			const precoUnitario = parseFloat(item.preco.replace(",", "."));
			const subtotal = qtd * precoUnitario;
			total += subtotal;

			mensagem += `\n🍽️ *${item.nome}* (x${qtd}) - R$ ${subtotal.toFixed(2).replace(".", ",")}`;

			// Verifica se tem detalhes extras
			const detalhes = detalhesPratos[item.nome];
			if (detalhes) {
			  // opção frito/grelhado
			  const btnOpSelecionado = document.querySelector(`[data-grupo="opcao-${index}"] .botao-opcao.selecionado`);
                if (btnOpSelecionado) {
                  mensagem += `\n  ➤ Preparo: ${btnOpSelecionado.textContent}`;
                }


			  // acompanhamentos fixos
			  if (detalhes.acompanhamentos) {
				mensagem += `\n  ➤ Acompanhamentos: ${detalhes.acompanhamentos.join(", ")}`;
			  }

			  // escolha única
			  const btnExtraSelecionado = document.querySelector(`[data-grupo="acompExtra-${index}"] .botao-opcao.selecionado`);
                if (btnExtraSelecionado) {
                  mensagem += `\n  ➤ Escolha adicional: ${btnExtraSelecionado.textContent}`;
                }

			}
		  }
		  index++;
		});
	  }

	  if (!algumItemSelecionado) {
		alert("Por favor, selecione ao menos um item do cardápio.");
		return;
	  }

	  // Calcular e somar valor da entrega
	  const valorEntrega = valorEntregaPorBairro[bairro] || 0;
	  total += valorEntrega;

	  mensagem += `\n\n🚚 *Taxa de entrega (${bairro}):* R$ ${valorEntrega.toFixed(2).replace(".", ",")}`;
	  mensagem += `\n💵 *Total geral:* R$ ${total.toFixed(2).replace(".", ",")}`;

	  const numeroWhatsApp = "5524999522320";
	  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
	  window.open(url, "_blank");
	});
  }
});
