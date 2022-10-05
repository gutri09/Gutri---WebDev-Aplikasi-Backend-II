const { dataServices } = require('../services');
const { responseHelper } = require('../helper');

const getPraktikan = async (req, res) => {
    try {

        const data = await dataServices.getPraktikan();
        if(data instanceof Error) {
            throw new Error(data);
        } 
        res.status(responseHelper.status.success).json(data);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getPraktikanByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const data = await dataServices.getPraktikanByName(nama);
        res.status(responseHelper.status.success).json(data);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getPraktikanByEmailAndTelepon = async (req, res) => {
    try {
        const { email, telepon } = req.params;
        const data = await dataServices.getPraktikanByEmailAndTelepon(email, telepon);
        res.status(responseHelper.status.success).json(data);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertData = async (req, res) => {
    try {

        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi} = req.body;
        const result = await dataServices.insertData(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deleteData = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await dataServices.deleteData(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateData = async (req, res) => {
    try {
        const { nama, deskripsi} = req.body;
        const result = await dataServices.updateData(nama, deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const insertBulkData = async (req, res) => {
    try {
        const result = await dataServices.insertBulkData(JSON.stringify(req.body));
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getPraktikan,
    getPraktikanByName,
    getPraktikanByEmailAndTelepon,
    insertData,
    deleteData,
    updateData,
    insertBulkData
}