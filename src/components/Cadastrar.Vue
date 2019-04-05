<template>
	<div>
		<h3>Cadastro de contato</h3>
		<formulario tipo="create" @submit="salvar" ></formulario>
	</div>
</template>

<script>
	import Formulario from './Formulario';
	export default{
		
		methods:{
			salvar(contato){
				if(this.verificarEmail(contato.email)){
					alert('Email já cadastrado');
					return false;
				}

				// listagem de contatos
				let contatos = this.$localStorage.get('contatos');

				// add contato na listagem de contatos
				contatos.push(contato)

				// salvo lista de contatos
				this.$localStorage.set('contatos',contatos)

				//retorno para pagina de listagem
				this.$router.push({name:'index'})
			},
			verificarEmail(email){
				let contatos = this.$localStorage.get('contatos');
				return contatos.filter(contato=>{
					return contato.email == email
				}).length
			}
		},
		components:{
			Formulario
		}
	}
</script>