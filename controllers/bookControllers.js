const { Book } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
  },

  getOne: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.json(book);
  },

  update: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    await book.update(req.body);
    res.json(book);
  },

  delete: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    await book.destroy();
    res.json({ message: 'Book deleted' });
  }
};
