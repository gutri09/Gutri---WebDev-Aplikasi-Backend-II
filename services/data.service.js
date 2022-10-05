const { databaseQuery } = require('../database');

const getPraktikan = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getPraktikanByName = async (nama) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM praktikan_webdev WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getPraktikanByEmailAndTelepon = async (email, telepon) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM praktikan_webdev WHERE email='${email}' AND telepon='${telepon}'`;
        const result = await databaseQuery(query);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertData = async (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO praktikan_webdev (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) VALUES ('${nama}', '${jenis_kelamin}', ${angkatan}, '${email}', '${telepon}', '${ deskripsi}')`;
        const result = await databaseQuery(query);

        if (!result) {
            throw new Error('Error inserting Data');
        }
        return {
            message: 'Data berhasil ditambahkan ke database',
        }; 
    } catch (error) {
        return error 
    }
}

const deleteData = async (email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM praktikan_webdev WHERE email='${email}'`;
        const result = await databaseQuery(query);

        if (!result) {
            throw new Error('Error deleting Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Email not found');
        }
        return {
            message: 'Data berhasil dihapus',
        }; 
    } catch (error) {
        return error
    }
}

const updateData = async (nama, deskripsi) => {
    try {
        const query = `UPDATE praktikan_webdev SET deskripsi='${deskripsi}' WHERE nama='${nama}'`;
        const result = await databaseQuery(query);
        if (!result) {
            throw new Error('Error update Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data berhasil diperbarui',
        };
    } catch (error) {
        return error
    }
}

const insertBulkData = async (data) => {
    try {
        let value = []
        JSON.parse(data,(a,b)=>{value.push(b)})
        for(let a=0; a<(value.length-1)/7;a++){
            const query = `INSERT INTO praktikan_webdev (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) VALUES ('${value[a*7]}', '${value[(a*7)+1]}', ${value[(a*7)+2]}, '${value[(a*7)+3]}', '${value[(a*7)+4]}', '${ value[(a*7)+5]}')`;
            const result = await databaseQuery(query);

            if (!result) {
                throw new Error('Error inserting Data');
            }
        }
        return {
            message: 'Data berhasil ditambahkan ke database',
        }; 
    } catch (error) {
        return error 
    }
}

module.exports =  {
    getPraktikan,
    getPraktikanByName,
    getPraktikanByEmailAndTelepon,
    insertData,
    deleteData,
    updateData,
    insertBulkData
}