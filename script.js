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
    { nome: "Bobó de Camarão", preco: "79,90" },
    { nome: "Corvina em Posta", preco: "58,90" },
    { nome: "Filé de Frango (frito ou grelhado)", preco: "35,90" },
    { nome: "File de Tilápia (frita ou grelhada)", preco: "39,90" },
    { nome: "File de Linguado (frito)", preco: "61,90" },
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
  "Prato Kids": [
    { nome: "File de Tilápia (frita ou grelhada)", preco: "34,90" },
    { nome: "Filé de Frango (frito ou grelhado)", preco: "31,90" }
  ],
  "Guarnições": [
    { nome: "Arroz", preco: "15,50" },
    { nome: "Batata Palha", preco: "18,90" },
    { nome: "Pirão", preco: "18,90" },
    { nome: "Purê", preco: "15,90" },
    { nome: "Farofa", preco: "15,90" },
    { nome: "Salada", preco: "16,00" },
    { nome: "Salada Especial", preco: "27,90" }
  ],
  "Sobremesas": [
    { nome: "Brownie", preco: "9,00" },
    { nome: "Cocada Artesanal", preco: "10,00" },
    { nome: "Doce de Abóbora", preco: "8,00" },
    { nome: "Doce de Leite", preco: "8,00" },
    { nome: "Doce de Mamão", preco: "8,00" },
    { nome: "Palha Italiana", preco: "10,00" },
    { nome: "Pudim", preco: "12,00" }
  ],
  "Bebidas sem Álcool": [
    { nome: "Água", preco: "4,50" },
    { nome: "Água com Gás", preco: "5,00" },
    { nome: "DelValle", preco: "8,50" },
    { nome: "Guaraviton", preco: "7,90" },
    { nome: "H2O (normal/limoneto)", preco: "8,90" },
    { nome: "Refrigerante (lata 350ml)", preco: "8,90" },
    { nome: "Refrigerante (2 litros)", preco: "17,00" }
  ],
  "Cerveja Lata (350ml)": [
    { nome: "Brahma", preco: "8,00" },
    { nome: "Brahma Zero", preco: "9,00" }
  ],
  "Cerveja Long Neck": [
    { nome: "Budweiser", preco: "10,90" },
    { nome: "Heineken", preco: "11,90" }
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
  "Bobó de Camarão": {
    acompanhamentos: ["arroz", "farofa", "salada"]
  },
  "Camarão ao Catupiry": {
    acompanhamentos: ["arroz", "batata palha", "salada"]
  },
  "File de Linguado (frito)": {
    acompanhamentos: ["arroz", "pirão", "salada"],
    escolhaUnica: ["purê", "batata chips", "mandioca frita"]
  }
};

let carrinho = [];

const categoryBar = document.getElementById("category-bar");
const productList = document.getElementById("product-list");
const btnCarrinho = document.getElementById("ver-carrinho");

// Criar botões de categoria com destaque no ativo
Object.keys(itensCardapio).forEach(cat => {
  const btn = document.createElement("button");
  btn.classList.add("category-btn");
  btn.textContent = cat;
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    mostrarProdutos(cat);
  });
  categoryBar.appendChild(btn);
});

// Ativar a primeira categoria por padrão
document.querySelector(".category-btn")?.classList.add("active");

function mostrarProdutos(categoria) {
  productList.innerHTML = "";
  itensCardapio[categoria].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    let detalhesHTML = "";

    if (detalhesPratos[item.nome]) {
      const detalhes = detalhesPratos[item.nome];

      if (detalhes.opcoes) {
        detalhesHTML += `<div class="options"><strong>Opções:</strong>`;
        detalhes.opcoes.forEach(op => {
          detalhesHTML += `<label><input type="radio" name="op_${item.nome}" value="${op}"> ${op}</label>`;
        });
        detalhesHTML += `</div>`;
      }

      if (detalhes.acompanhamentos) {
        detalhesHTML += `<div class="acompanhamentos"><strong>Acompanhamentos:</strong>`;
        detalhes.acompanhamentos.forEach(a => {
          detalhesHTML += `<label><input type="checkbox" name="acomp_${item.nome}" value="${a}"> ${a}</label>`;
        });
        detalhesHTML += `</div>`;
      }

      if (detalhes.escolhaUnica) {
        detalhesHTML += `<div class="options"><strong>Escolha 1:</strong>`;
        detalhes.escolhaUnica.forEach(op => {
          detalhesHTML += `<label><input type="radio" name="unica_${item.nome}" value="${op}"> ${op}</label>`;
        });
        detalhesHTML += `</div>`;
      }
    }

    card.innerHTML = `
      <div class="product-title">${item.nome}</div>
      <div class="product-price">R$ ${item.preco}</div>
      ${detalhesHTML}
      <button class="add-btn">Adicionar ao Carrinho</button>
    `;

    card.querySelector(".add-btn").addEventListener("click", () => {
      let extras = {};

      if (detalhesPratos[item.nome]) {
        const detalhes = detalhesPratos[item.nome];

        if (detalhes.opcoes) {
          const sel = card.querySelector(`input[name="op_${item.nome}"]:checked`);
          extras.opcao = sel ? sel.value : null;
        }

        if (detalhes.acompanhamentos) {
          const checks = [...card.querySelectorAll(`input[name="acomp_${item.nome}"]:checked`)];
          extras.acompanhamentos = checks.map(c => c.value);
        }

        if (detalhes.escolhaUnica) {
          const unica = card.querySelector(`input[name="unica_${item.nome}"]:checked`);
          extras.escolhaUnica = unica ? unica.value : null;
        }
      }

      adicionarAoCarrinho({ ...item, extras });
    });

    productList.appendChild(card);
  });
}

function adicionarAoCarrinho(item) {
  carrinho.push(item);
  atualizarBotaoCarrinho();
}

function atualizarBotaoCarrinho() {
  btnCarrinho.textContent = `Carrinho (${carrinho.length})`;
}

btnCarrinho.addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  abrirModalCarrinho();
});

function abrirModalCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    let texto = `${item.nome} - R$ ${item.preco}`;
    if (item.extras) {
      if (item.extras.opcao) texto += ` | ${item.extras.opcao}`;
      if (item.extras.acompanhamentos?.length) texto += ` | ${item.extras.acompanhamentos.join(", ")}`;
      if (item.extras.escolhaUnica) texto += ` | ${item.extras.escolhaUnica}`;
    }
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remove-item");
    btnRemover.onclick = () => {
      carrinho.splice(index, 1);
      atualizarBotaoCarrinho();
      abrirModalCarrinho();
    };
    li.appendChild(document.createTextNode(texto));
    li.appendChild(btnRemover);
    lista.appendChild(li);

    total += parseFloat(item.preco.replace(",", "."));
  });

  document.getElementById("total-carrinho").textContent = total.toFixed(2).replace(".", ",");
  document.getElementById("modal-carrinho").style.display = "flex";
}

// Controle dos modais
const modalCarrinho = document.getElementById("modal-carrinho");
const modalDados = document.getElementById("modal-dados");

document.getElementById("fechar-modal").onclick = () => {
  modalCarrinho.style.display = "none";
};
document.getElementById("continuar-comprando").onclick = () => {
  modalCarrinho.style.display = "none";
};

document.getElementById("finalizar-compra").onclick = () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio! Adicione itens antes de prosseguir.");
    return;
  }
  modalCarrinho.style.display = "none";
  modalDados.style.display = "flex";
};
document.getElementById("fechar-dados").onclick = () => {
  modalDados.style.display = "none";
};

document.getElementById("confirmar-dados").onclick = () => {
  // Aqui você pode validar e enviar os dados
  alert("Dados confirmados! Agora pode prosseguir com o pedido.");
  modalDados.style.display = "none";
};

// Dados de bairros e valores
const bairrosPorCidade = {
  "Volta Redonda": [
    "Aero","Agua Limpa","Aterrado","Barreira Cravo","Bela Vista","Belmonte","Bom Jesus","Casa de Pedra","Centro","Conforto","Duzentos e Quarenta e Nove","Eucaliptal","Jardim Amália I","Jardim Amália II","Jardim Belvedere","Jardim Cidade do Aço","Jardim Esperança","Jardim Europa","Jardim Normandia","Jardim Paraíba","Jardim Ponte Alta","Jardim Primavera","Jardim Suíça","Jardim Tiradentes","Jardim Veneza","Jardim Vila Rica - Tiradentes","Laranjal","Limoeiro","Minerlândia","Mirante do Vale","Monte Castelo","Morro São Carlos","Niterói","Nossa Senhora das Graças","Nova São Luiz","Parque das Ilhas","Pinto da Serra","Ponte Alta","Retiro","Rústico","Sam Remo","Santo Agostinho","São Cristóvão","São Geraldo","São João","São João Batista","São Lucas","São Luís","Sessenta","Siderlândia","Siderópolis","Sidervile","Vila Americana","Vila Mury","Vila Santa Cecília","Voldac","Volta Grande I","Volta Grande II","Volta Grande III"
  ],
  "Barra Mansa": [
    "9 de Abril","Assunção","Boavista 2","Mangueira","Metalúrgico","Paraíso","Santa Rosa","São Sebastião","Vale do Paraíba","Vila Elmira"
  ]
};

const valorEntregaPorBairro = {
  "Aero": 9.00, "Agua Limpa": 10.00, "Aterrado": 9.00, "Barreira Cravo": 10.00,
  "Bela Vista": 9.00, "Belmonte": 8.00, "Bom Jesus": 8.00, "Casa de Pedra": 10.00,
  "Centro": 9.00, "Conforto": 6.00, "Duzentos e Quarenta e Nove": 6.00,
  "Eucaliptal": 4.00, "Jardim Amália I": 10.00, "Jardim Amália II": 10.00,
  "Jardim Belvedere": 10.00, "Jardim Cidade do Aço": 8.00, "Jardim Esperança": 10.00,
  "Jardim Europa": 7.00, "Jardim Normandia": 10.00, "Jardim Paraíba": 9.00,
  "Jardim Ponte Alta": 8.00, "Jardim Primavera": 9.00, "Jardim Suíça": 7.00,
  "Jardim Tiradentes": 10.00, "Jardim Veneza": 10.00, "Jardim Vila Rica - Tiradentes": 10.00,
  "Laranjal": 9.00, "Limoeiro": 9.00, "Minerlândia": 8.00, "Mirante do Vale": 10.00,
  "Monte Castelo": 9.00, "Morro São Carlos": 8.00, "Niterói": 9.00, "Nossa Senhora das Graças": 9.00,
  "Nova São Luiz": 12.00, "Parque das Ilhas": 10.00, "Pinto da Serra": 12.00, "Ponte Alta": 8.00,
  "Retiro": 8.00, "Rústico": 8.00, "Sam Remo": 10.00, "Santo Agostinho": 10.00,
  "São Cristóvão": 7.00, "São Geraldo": 10.00, "São João": 8.00, "São João Batista": 10.00,
  "São Lucas": 7.00, "São Luís": 12.00, "Sessenta": 9.00, "Siderlândia": 8.00,
  "Siderópolis": 10.00, "Sidervile": 8.00, "Vila Americana": 10.00, "Vila Mury": 9.00,
  "Vila Santa Cecília": 9.00, "Voldac": 10.00, "Volta Grande I": 10.00,
  "Volta Grande II": 10.00, "Volta Grande III": 10.00,

  "9 de Abril": 8.00, "Assunção": 8.00, "Boavista 2": 8.00, "Mangueira": 8.00,
  "Metalúrgico": 8.00, "Paraíso": 8.00, "São Sebastião": 8.00, "Vila Elmira": 8.00,
  "Santa Rosa": 12.00, "Vale do Paraíba": 12.00
};

// Elementos
const selectCidade = document.getElementById("cidade");
const selectBairro = document.getElementById("bairro");

// Quando a cidade muda, atualizar lista de bairros
if (selectCidade) {
  selectCidade.addEventListener("change", () => {
    const cidade = selectCidade.value;
    selectBairro.innerHTML = "<option value=''>Selecione seu bairro</option>";

    if (bairrosPorCidade[cidade]) {
      bairrosPorCidade[cidade].forEach(bairro => {
        const opt = document.createElement("option");
        opt.value = bairro;
        opt.textContent = bairro; // apenas o nome
        selectBairro.appendChild(opt);
      });
    }
  });
}

const modalFinal = document.getElementById("modal-final");
const resumoFinal = document.getElementById("resumo-final");
const totalFinal = document.getElementById("total-final");

document.getElementById("confirmar-dados").onclick = () => {
  const cidade = selectCidade.value;
  const bairro = selectBairro.value;
  const endereco = document.getElementById("endereco").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const nome = document.getElementById("nome").value.trim();

  // validação
  if (!cidade || !bairro || !endereco || !numero || !nome) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  modalDados.style.display = "none";

  let totalPedido = carrinho.reduce((sum, i) => sum + parseFloat(i.preco.replace(",", ".")), 0);
  let taxaEntrega = valorEntregaPorBairro[bairro] || 0;
  let totalComEntrega = totalPedido + taxaEntrega;

  let itensTexto = carrinho.map(i => {
    let txt = `${i.nome} - R$ ${i.preco}`;
    if (i.extras) {
      if (i.extras.opcao) txt += ` | Opção: ${i.extras.opcao}`;
      if (i.extras.acompanhamentos?.length) txt += ` | Acompanhamentos: ${i.extras.acompanhamentos.join(", ")}`;
      if (i.extras.escolhaUnica) txt += ` | Escolha: ${i.extras.escolhaUnica}`;
    }
    return txt;
  }).join("<br>");

  resumoFinal.innerHTML = `
    <p><strong>Cliente:</strong> ${nome}</p>
    <p><strong>Endereço:</strong> ${endereco}, ${numero} ${complemento ? ` - ${complemento}` : ""}</p>
    <p><strong>Bairro:</strong> ${bairro}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Itens:</strong><br>${itensTexto}</p>
    <p><strong>Taxa de entrega:</strong> R$ ${taxaEntrega.toFixed(2).replace(".", ",")}</p>
  `;

  totalFinal.textContent = totalComEntrega.toFixed(2).replace(".", ",");

  modalFinal.style.display = "flex";
};

document.getElementById("fechar-final").onclick = () => {
  modalFinal.style.display = "none";
};

document.getElementById("enviar-whatsapp").onclick = () => {
  const cidade = selectCidade.value;
  const bairro = selectBairro.value;
  const endereco = document.getElementById("endereco").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const nome = document.getElementById("nome").value.trim();
  let taxaEntrega = valorEntregaPorBairro[bairro] || 0;

  let resumo = carrinho.map(i => {
    let txt = `${i.nome} - R$ ${i.preco}`;
    if (i.extras) {
      if (i.extras.opcao) txt += ` | Opção: ${i.extras.opcao}`;
      if (i.extras.acompanhamentos?.length) txt += ` | Acompanhamentos: ${i.extras.acompanhamentos.join(", ")}`;
      if (i.extras.escolhaUnica) txt += ` | Escolha: ${i.extras.escolhaUnica}`;
    }
    return txt;
  }).join("\n");

  const totalPedido = carrinho.reduce((sum, i) => sum + parseFloat(i.preco.replace(",", ".")), 0) + taxaEntrega;

  const mensagem = `*Pedido de ${nome}*\nEndereço: ${endereco}, ${numero} ${complemento}\nBairro: ${bairro}\nCidade: ${cidade}\n\nItens:\n${resumo}\n\nTaxa de entrega: R$ ${taxaEntrega.toFixed(2)}\nTotal com entrega: R$ ${totalPedido.toFixed(2)}`;

  const url = `https://wa.me/5524999787233?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
};

