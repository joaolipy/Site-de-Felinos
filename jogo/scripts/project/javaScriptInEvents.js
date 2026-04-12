

const scriptsInEvents = {

	async FolhaDeEventosJogo_Event21_Act1(runtime, localVars)
	{
		// Pega o peixe que colidiu
		const peixeColidido = runtime.objects.peixe.getFirstPickedInstance();
		const textoPonto = runtime.objects.PONTO.getFirstInstance();
		
		if (peixeColidido) {
		    // Desabilita a colisão
		    peixeColidido.isEnabled = false; 
		
		    // Muda a animação dele
		    peixeColidido.setAnimation("coletado");
		
		    // Soma na variável global
		    runtime.globalVars.pontuacao += 1;
		
		    // Atualiza o texto
		    textoPonto.text = runtime.globalVars.pontuacao.toString();
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
