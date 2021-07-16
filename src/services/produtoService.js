import api from "./api";

function obterTodos(){
    return api.get('/produtos');
}

function obterPorId(id){
    return api.get(`/produtos/${id}`)
}

function adicionar(produto){
    return api.post('/produtos', produto)
}

function atualizar(id, produto){
    return api.put(`/produtos/${id}`, produto)
}

function deletar(id){
    return api.delete(`/produtos/${id}`)
}

export default {
    obterTodos,
    obterPorId,
    adicionar,
    atualizar,
    deletar
}