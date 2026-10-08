import Db from '../Config/db.js'

async function getAll() {
    const [rows] = await Db.query("SELECT us_id, us_username, us_password, us_email FROM users");
    return rows;
}

async function getById(id) {
    const [rows] = await Db.query(`SELECT us_id, us_username, us_password, us_email 
                                    FROM users WHERE us_id = ?`, [id]);
    return rows;
}

async function getByLogin(login) {
    const [rows] = await Db.query(`SELECT us_id, us_username, us_password, us_email 
                                    FROM users WHERE us_username = ?`, [login]);
    return rows[0];
}

async function update(id, user) {
    const updated = await Db.query("UPDATE users SET us_username = ?, us_email=? WHERE us_id=?",
        [user.us_username, user.us_email, id]);
    return updated;
}
async function insert(user) {
    const inserted = await Db.query("INSERT INTO users (us_username, us_email, us_password) VALUES (?,?,?)",
                                    [user.username, user.email, user.password]);
    return inserted;
}

async function deleteUser(id) {
    const deleted = await Db.query("DELETE FROM users WHERE us_id = ?" , [id]);
    return deleted;
}

export default {
    getAll,
    getById,
    update,
    insert,
    deleteUser,
    getByLogin
}