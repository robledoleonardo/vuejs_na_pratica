<template>
	<div>
		<h3>Editar contato</h3>
		<formulario :contato="contato" tipo="editar" @submit="salvar"></formulario>
	</div>
</template>

<script>
	import Formulario from '@/components/Formulario'
	export default {
		name:'Editar',
		data(){
			return {
				contato:{}
			}
		},
		created(){
			let contatos = this.$localStorage.get('contatos')
			this.contato = contatos.find(contato=>{
				return contato.email == this.$route.params.email
			})
		},
		methods:{
			salvar(contatoSave){
				let contatos = this.$localStorage.get('contatos')
				contatos = contatos.map(contato=>{
					if(contato.email == this.$route.params.email){
						return contatoSave;
					}
					return contato;
				})
				this.$localStorage.set('contatos',contatos)
				this.$router.push({name:'home'})
			}
		},
		components:{
			Formulario
		}
	}
</script>
