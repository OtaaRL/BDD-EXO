import Db from '../Config/db.js'

async function getAll() {
    const [rows] = await Db.query("SELECT pa_user, pa_event FROM participants;");
    return rows;
}

async function getByEventId(eventId) {
    const [rows] = await Db.query("SELECT pa_user, pa_event FROM participants WHERE pa_event = ?;", [eventId]);
    return rows;
}

async function getByUserId(userId) {
    const [rows] = await Db.query("SELECT pa_user, pa_event FROM participants WHERE pa_user = ?;", [userId]);
    return rows;
}

// participants -> {user : 1, event:1 }
async function insert(participant) {
    const inserted = await Db.query("INSERT INTO participants(pa_user, pa_event) VALUES(?,?)", [participant.user, participant.event]);
    return inserted;
}

async function deleteParticipant(event, user) {
    const deleted = await Db.query("DELETE FROM participants WHERE pa_user = ? AND pa_event= ?",[user,event]);
    return deleted;
}

export default{
    getAll,
    getByEventId,
    getByUserId,
    insert,
    deleteParticipant
}
