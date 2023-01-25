var pool = require('./bd');

async function getClientes() {
    var query = "select * from clientes order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertCliente(obj) {
    try {
        var query = " insert into clientes set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteClienteById(id) {
    var query = "delete from clientes where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getClienteById(id) {
    var query = "select * from clientes where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarClienteById(obj, id) {
    try {
        var query = "update clientes set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getClientes, insertCliente, deleteClienteById, getClienteById, modificarClienteById }