<template>
	<div class="row">
		<div class="col-sm-12">
			<h3>Listagem de contatos</h3>

			<!-- BTN PARA IR CADASTRAR CONTATO -->
			<router-link :to="{name:'cadastrar'}" class="btn btn-sm btn-primary pull-right mt-2 mb-2"><i class="fa fa-plus"></i> Cadastrar</router-link>

			<!-- TABELA PARA LISTAR CONTATO -->
			<table class="table table-bordered ">
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
						<td>{{contato.telefone}}</td>
						<td class="text-center">
							<router-link :to="{name:'editar', params:{email:contato.email}}" class="btn btn-sm btn-info"><i class="fa fa-pencil"></i></router-link>
							<button type="button" @click="remover(contato.email)" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
						</td>
					</tr>
					<tr v-if="contatos.length == 0">
						<td class="text-center" colspan="3">
							<strong>Sem contato cadastado. <router-link :to="{name:'cadastrar'}" >Cadastrar</router-link> </strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>	
</template>

<script>
	export default {
		name:'Index',
		data(){
			return{
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

				this.contatos = this.$localStorage.get('contatos');
				console.log(this.contatos,'=')
			},
			remover(email){
				let novos_contatos = this.contatos.filter(contato=>{
					return contato.email != email
				})
				this.$localStorage.set('contatos',novos_contatos)
				this.load();
			}
		}
	}
</script>

