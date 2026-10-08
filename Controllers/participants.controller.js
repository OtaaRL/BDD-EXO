import ParticipantModel from '../Models/participants.model.js';

async function getAll(req, res) {
    try {
        const participants = await ParticipantModel.getAll();
        res.json(participants);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération de participant" });
    }
}

async function getByEventId(req, res) {
    try {
        const eventId = req.params.eventID;
        const participants = await ParticipantModel.getByEventId(eventId);
        res.json(participants);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération de participant via event id" });
    }
}
async function getByUserId(req, res) {
    try {
        const userId = req.params.userID;
        const participants = await ParticipantModel.getByUserId(userId);
        res.json(participants);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération de participant via User id" });
    }
}

async function insert(req, res) {
    try {
        const body = req.body;
        const inserted = await ParticipantModel.insert(body);
        res.status(201).json(inserted)
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de l'insertion de participant" });
    }
}

async function deleteParticipant(req, res) {
    try {
        const eventId = req.params.eventID;
        const userId = req.params.userID;
        const deleted = await ParticipantModel.deleteParticipant(eventId, userId);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la suppréssion de participant" });
    }
}

export default {
    getAll,
    getByEventId,
    getByUserId,
    insert,
    deleteParticipant
}