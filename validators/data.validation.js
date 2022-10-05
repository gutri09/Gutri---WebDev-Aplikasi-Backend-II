const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getPraktikanByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const getPraktikanByEmailAndTelepon = [
    param('email').isEmail(),
    param('telepon').isLength(12),
    validator
]

const insertData =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L','P']),
    body('angkatan').isNumeric({gt:2018}),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').not().isEmpty().withMessage('Deskripsi diperlukan'),
    validator
]

const deleteData = [
    body('email').isEmail(),
    validator
]

const updateData = [
    body('nama').isLength({min: 8}),
    body('deskripsi').not().isEmpty().withMessage('Deskripsi diperlukan'),
    validator
]

const insertBulkData =  [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['L','P']),
    body('*.angkatan').isNumeric({gt:2018}),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').not().isEmpty().withMessage('Deskripsi diperlukan'),
    validator
]

module.exports = {
    getPraktikanByName,
    getPraktikanByEmailAndTelepon,
    insertData,
    deleteData,
    updateData,
    insertBulkData
}