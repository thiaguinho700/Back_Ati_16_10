const mongose = require("mongoose")

const ProdutoSchema = new mongose.Schema({
    nomeProduto:{
        type: String, required:true
    },
    qtde:{
        type: Number, required:true
    },
    valor:{
        type: Number, required:true
    },
    dataValidade:{
        type:String
    }
})

module.exports = mongose.model("Produto", ProdutoSchema)