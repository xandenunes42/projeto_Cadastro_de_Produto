class Produto {
	constructor(nome,codigo,quantidade,valor) {
		this.codigo = codigo;
		this.nome = nome;
		this.quantidade = quantidade;
		this.valor = valor;
	}
}

function montarTabela(listaProdutos) {
	let auxHtml = '';
	for (let i = 0; i < listaProdutos.length; i++) {
		auxHtml += '<tr>'+
							 '<td>'+ listaProdutos[i].nome +'</td>'+
							 '<td>'+ listaProdutos[i].codigo +'</td>'+
							 '<td>'+ listaProdutos[i].quantidade +'</td>'+
							 '<td>R$ '+ listaProdutos[i].valor.toFixed(2).replace('.',',') +'</td>'+
							 '</tr>';
	}
	return auxHtml;
}

function validar(valor) {
	if (!isNaN(valor) && valor != '') {
		return true;
	} else {
		return false;
	}
}

listaProdutos = [];


window.onload = function() {
	
	document.getElementById('btnSalvar').onclick = function() {
		let nome = document.getElementById('nome').value;
		let codigo = document.getElementById('codigo').value;
		let quantidade = document.getElementById('quantidade').value;
		let valor = document.getElementById('valor').value;
		if (validar(codigo) && nome != '' && validar(quantidade)
				&& validar(valor) && isNaN(nome)) {
			codigo = parseInt(codigo);
			quantidade = parseFloat(quantidade);
			valor = parseFloat(valor);
			let novoProduto = new Produto(nome,codigo,quantidade,valor);
			listaProdutos.push(novoProduto);
			document.getElementById('tabela').innerHTML = montarTabela(listaProdutos);
		} else {
			alert('Informe os dados corretamente!');
		}
	}
}