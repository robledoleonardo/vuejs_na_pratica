<template>
	<div>
		<h3>Editar contato</h3>
		<formulario-edit tipo="update" :contato="contato" @submit="salvar()"></formulario-edit>
	</div>
</template>

<script>
	import Formulario from './Formulario';
	export default{
		data(){
			return {
				contato:{}
			}
		},
		created(){
			let contatos = this.$localStorage.get('contatos');
			
			this.contato = contatos.find(contato=>{
				return contato.email == this.$route.params.email;
			})
		},
		methods:{
			salvar(){
				// listagem de contatos
				let contatos = this.$localStorage.get('contatos');

				// salvo lista de contatos
				this.$localStorage.set('contatos',contatos.map(contato=>{
					
					if(contato.email == this.contato.email){
						return this.contato
					}
					return contato;
				}))

				//retorno para pagina de listagem
				this.$router.push({name:'index'})
			}
		},
		components:{
			formularioEdit:Formulario
		}
	}
</script>