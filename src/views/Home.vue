<template>
	<div class="">
		<h3>Lista de contatos</h3>
		
		<router-link :to="{name:'cadastrar'}" class="btn btn-primary pull-right mt-3 mb-3"><i class="fa fa-plus"></i> Cadastrar</router-link>

		<table class="table table-bordered">
			<thead>
				<tr>
					<th>Nome</th>
					<th width="200" class="text-center">Telefone</th>
					<th width="100"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="contato in contatos">
					<td>{{contato.nome}}</td>
					<td class="text-center">{{contato.telefone}}</td>
					<td class="text-center">
						<router-link :to="{name:'editar',params:{email:contato.email}}" class="btn btn-info btn-sm mr-1"><i class="fa fa-pencil"></i></router-link>
						<button @click="remover(contato.email)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
					</td>
				</tr>
				<tr v-if="contatos.length == 0">
					<td colspan="3" class="text-center">
						<strong>
							Sem contato cadastrado. <router-link :to="{name:'cadastrar'}" >Cadastrar</router-link>
						</strong>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data(){
		return {
			contatos:[]
		}
	},
	created(){
		this.load()
	},
	methods:{
		load(){
			if(!this.$localStorage.hasKey('contatos')){
				this.$localStorage.set('contatos',[])
			}

			this.contatos = this.$localStorage.get('contatos')
		},
		remover(email){
			let contatos = this.$localStorage.get('contatos')
			contatos = contatos.filter(contato=>{
				return contato.email != email
			})
			this.$localStorage.set('contatos',contatos)
			this.load()
		}
	}
}
</script>
