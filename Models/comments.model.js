import Db from '../Config/db.js'

async function getAll() {
    const [rows] = await Db.query('SELECT co_id, co_comments, co_user, co_event FROM comments');
    return rows;
}
async function getById(id) {
    const [rows] = await Db.query('SELECT co_id, co_comments, co_user, co_event FROM comments WHERE co_id = ?', [id]);
    return rows;
}

async function update(id, comments) {
    const updated = await Db.query('UPDATE comments SET co_comments = ? WHERE co_id = ?', [comments.co_comments,id]);
    return updated;
}

async function insert(comment) {
    const inserted = await Db.query('INSERT INTO comments(co_comments, co_user, co_event) VALUES (?,?,?)', [comment.comment, comment.user, comment.event]);
    return inserted;
}
async function deleteComments(id) {
    const deleted = await Db.query('DELETE FROM comments WHERE co_id = ?', [id]);
    return deleted;
}

export default {
    getAll,
    getById,
    update,
    insert, 
    deleteComments
}
