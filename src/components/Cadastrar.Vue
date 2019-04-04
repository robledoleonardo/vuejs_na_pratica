<template>
	<div>
		<h3>Cadastro de contato</h3>
		<form action="" @submit.prevent="salvar()" >
			<div class="row">
				<div class="col-md-4 col-sm-12">
					<div class="form-group">
						<label for="nome">Nome</label>
						<input type="text" id="nome" v-model="contato.nome" class="form-control" required="required">
					</div>
				</div>
				<div class="col-md-4 col-sm-12">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" v-model="contato.email" class="form-control" required="required">
					</div>
				</div>
				<div class="col-md-4 col-sm-12">
					<div class="form-group">
						<label for="telefone">Telefone</label>
						<input type="text" id="telefone" v-model="contato.telefone" class="form-control" required="required">
					</div>
				</div>
				<div class="col-sm-12">
					<input type="submit" class="btn btn-primary" value="Salvar">
					<router-link :to="{name:'index'}" class="btn btn-light">Voltar</router-link>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				contato:{
					nome:null,
					email:null,
					telefone:null
				}
			}
		},
		methods:{
			salvar(){
				if(this.verificarEmail()){
					alert('Email já cadastrado');
					return false;
				}

				// listagem de contatos
				let contatos = this.$localStorage.get('contatos');

				// add contato na listagem de contatos
				contatos.push(this.contato)

				// salvo lista de contatos
				this.$localStorage.set('contatos',contatos)

				//retorno para pagina de listagem
				this.$router.push({name:'index'})
			},
			verificarEmail(){
				let contatos = this.$localStorage.get('contatos');
				return contatos.filter(contato=>{
					return contato.email == this.contato.email
				}).length
			}
		}
	}
</script>