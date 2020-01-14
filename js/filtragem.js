// Adicionando a class selected ao botao que foi pressionado
const $links = document.querySelectorAll('.links');
const $nav = document.querySelector('.portfolio__nav');

for(let i = 0; i < $links.length; i++){
	$links[i].addEventListener('click', function(){
					let current = document.getElementsByClassName("selected"); // salva na variavel current o elemento que esta com a class "selected"
					current[0].className = current[0].className.replace(" selected", ""); // apos verificar qual elemento possui a class "selected" remove a mesma por uma class vazia
					this.className += " selected"; // adiciona a class "selected" ao botao que foi acionado com o click.
	});
}

filterSelected("all");

// Função para filtrar as imagens que serão selecionadas
function filterSelected(c) {				
	const $filter = document.getElementsByClassName("all"); // Faz referencia a cada uma das imagens e salva na variavel

	// verifica cada um dos elementos da coleção criada		
	for(let i = 0; i < $filter.length; i++){
		let filtrando = $filter[i].className.split(" "); // Transforma em um array cada uma das classes que esta dentro de $filter

		// Faz uma verificação se existe pelo menos um elemento com a classe igual ao parametro definido na função
		let filtroType = filtrando.some(function(f){
			return f === c;
		})

		// Se for false, ele atribui a classe "hide" a $filter on indice que nao tiver
		if(!filtroType) {
			$filter[i].classList.add('hide');
		}
		else {
			$filter[i].classList.remove('hide');
		}
	}					
}