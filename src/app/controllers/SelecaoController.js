import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
    // Criar
    async store(req, res) {
        const { selecao, grupo } = req.body;

        try {
        const criar = await SelecaoRepository.create({ selecao, grupo });
        res.status(201).json(criar);
        } catch (erro) {
            res.status(400).json({ erro });
        }
    };

    // Listar
    async index(req, res){
        
        try{
            const listar = await SelecaoRepository.findAll()
            res.status(200).json(listar)
        } catch (erro) {
            res.status(500).json({ erro });
        }
    };

    // Buscar por ID
    async show(req, res) {
        const { id } = req.params;
    
        try {
            const listarId = await SelecaoRepository.findById(id);
            if (!listarId || listarId.length === 0) {
                return res.status(404).json({ erro: "Seleção não encontrada" });
            }

            res.status(200).json(listarId);
        } catch (erro) {
            res.status(500).json({ erro });
        }
    };

    // Atualiza dados
    async update(req, res) {
        const { id } = req.params;
        const { selecao, grupo } = req.body;
        try {
            const atualizarPorId = await SelecaoRepository.update(id, { selecao, grupo });
    
            if (!atualizarPorId || atualizarPorId.length === 0) {
                return res.status(400).json({ erro: "Campos obrigatórios não enviados ou não encontrado" });
            }
    
            res.status(200).json(atualizarPorId);
        } catch (erro) {
            res.status(500).json({ erro });
        }
    };

    // Deleta dados
    async delete(req, res){
        const { id } = req.params;
    
        try {
            const deletarPorId = await SelecaoRepository.delete(id);
            if (!deletarPorId) {
                return res.status(404).json({ erro: "Seleção não encontrada!" });
            }

            res.status(200).json(deletarPorId);
        } catch (erro) {
            res.status(500).json({ erro });
        }
    };

};

// Padrão Singleton
export default new SelecaoController()