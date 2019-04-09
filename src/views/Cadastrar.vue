<template>
	<div>
		<h3>Cadastrar contato</h3>
		<formulario @submit="salvar"></formulario>
	</div>
</template>

<script>
	import Formulario from '@/components/Formulario'
	export default {
		name:'Cadastrar',
		methods:{
			salvar(contato){
				if(this.verificarEmail(contato.email)){
					alert('Email ja cadastrado');
					return false;
				}

				let contatos = this.$localStorage.get('contatos')
				contatos.push(contato)
				this.$localStorage.set('contatos',contatos)
				this.$router.push({name:'home'})
			},
			verificarEmail(email){
				let contatos = this.$localStorage.get('contatos')
				return contatos.filter(contato=>{
					return contato.email == email
				}).length?true:false
			}
		},
		components:{
			Formulario
		}
	}
</script>
