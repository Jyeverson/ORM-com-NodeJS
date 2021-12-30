const database = require('../models')

class PessoaController {
   static async pegaTodasAsPessoas(req, res){
       try {
        const todasAsPessoas = await database.Pessoas.findAll()
        return res.statusCode(200).json(todasAsPessoas)
       } catch (error) {
           return res.statusCode(500).json(error.message)
       }
    }
}

module.exports = PessoaController