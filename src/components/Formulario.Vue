<template>
    <form @submit.prevent="salvar()">
        <div class="form-row">
            <div class="form-group col-12 col-md-4">
                <label for="nome">Nome</label>
                <input type="text" id="nome" class="form-control" required="required" v-model="contato.nome">
            </div>
            <div class="form-group col-12 col-md-4">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" required="required" v-model="contato.email" :disabled="tipo == 'editar'">
            </div>
            <div class="form-group col-12 col-md-4">
                <label for="telefone">Telefone</label>
                <input type="text" id="telefone" class="form-control" required="required" v-model="contato.telefone">
            </div>
            <div class="form-group col-12 col-md-4">
                <label for="cep">CEP</label>
                <input type="text" id="cep" class="form-control" v-model="contato.cep">
            </div>
            <div class="form-group col-8 col-md-6">
                <label for="endereco">Endereço</label>
                <input type="text" id="endereco" class="form-control" v-model="contato.endereco">
            </div>
            <div class="form-group col-4 col-md-2">
                <label for="numero">Número</label>
                <input type="text" id="numero" class="form-control" v-model="contato.numero">
            </div>
            <div class="form-group col-12 col-md-4">
                <label for="bairro">Bairro</label>
                <input type="text" id="bairro" class="form-control" v-model="contato.bairro">
            </div>
            <div class="form-group col-12 col-md-4">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" class="form-control" v-model="contato.cidade">
            </div>
        </div>
        <input type="submit" value="Salvar" class="btn btn-success mr-3">
        <router-link :to="{name:'home'}" class="btn btn-light">Voltar</router-link>
    </form>
</template>

<script>
    export default {
        name: 'Formulario',
        props: {
            tipo: {
                type:String,
                default:'cadastrar'
            },
            contato:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            salvar(){
                this.$emit('submit',this.contato)
            }
        }
    }
</script>