const Produto = require('../models/produto');

const produtoController = {
    findAll: async(req, res) => {
        try {
            const produtos = await Produto.findAll();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findOne: async(req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    create: async(req, res) => {
        try {
            const produto = await Produto.create(req.body);
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    update: async(req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            await produto.update(req.body);
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    delete: async(req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            await produto.destroy();
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};

module.exports = produtoController;