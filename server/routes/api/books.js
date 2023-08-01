import express from 'express'
import Book from '../../models/Book.js'

const router = express.Router()

// tests books route
router.get('/test', (req, res) => res.send('TESTING WROKS!!'))

// Get all books
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }))
})

// Get single book by id
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
})

// add/save book
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this book' }))
})

// Update book
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        )
})

// Delete book by id
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book' }))
})

export default router