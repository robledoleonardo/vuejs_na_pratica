<template>
	<form action="" @submit.prevent="executarSubmit()" >
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
					<input type="email" id="email" v-model="contato.email" class="form-control" required="required" :disabled="tipo!='create'">
				</div>
			</div>
			<div class="col-md-4 col-sm-12">
				<div class="form-group">
					<label for="telefone">Telefone</label>
					<input type="text" id="telefone" v-model="contato.telefone" class="form-control" required="required">
				</div>
			</div>
			<div class="col-md-3 col-sm-12">
				<div class="form-group">
					<label for="cep">CEP</label>
					<input type="text" id="cep" v-model="contato.cep" class="form-control" >
				</div>
			</div>
			<div class="col-md-7 col-sm-10">
				<div class="form-group">
					<label for="endereco">Endereço</label>
					<input type="text" id="endereco" v-model="contato.endereco" class="form-control" >
				</div>
			</div>
			<div class="col-md-2 col-sm-2">
				<div class="form-group">
					<label for="numero">Numero</label>
					<input type="text" id="numero" v-model="contato.numero" class="form-control" >
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label for="bairro">Bairro</label>
					<input type="text" id="bairro" v-model="contato.bairro" class="form-control" >
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label for="cidade">Cidade</label>
					<input type="text" id="cidade" v-model="contato.cidade" class="form-control" >
				</div>
			</div>

			<div class="col-sm-12">
				<input type="submit" class="btn btn-primary" value="Salvar">
				<router-link :to="{name:'index'}" class="btn btn-light">Voltar</router-link>
			</div>
		</div>
	</form>
</template>

<script>
	export default{
		props:{
			tipo:String,
			contato:{
				type:Object,
				default(){
					return {
						nome:null,
						email:null,
						telefone:null,
						cep:null,
						endereco:null,
						numero:null,
						bairro:null,
						cidade:null
					}
				}
			}
		},

		methods:{
			executarSubmit(){
				this.$emit('submit',this.contato);
			}
		}
	}
</script>