import EventModel from '../Models/events.model.js'

async function getAll(req, res) {
    try {
        const events = await EventModel.getAll();
        res.json(events);
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des evenements");
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération des evenements" })
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const event = await EventModel.getById(id);
        res.json(event[0]);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération de l'event" })
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        let eventToUpdate = await EventModel.getById(id);
        if (eventToUpdate.length === 0) {
            return res.status(404).json({ "error": "l'event que vous modifiez n'existe pas" })
        }

        eventToUpdate = eventToUpdate[0];

        if (body.title) {
            eventToUpdate.ev_title = body.title;
        }

        if (body.date) {
            eventToUpdate.ev_date = body.date;
        }

        if (body.description) {
            eventToUpdate.ev_description = body.description;
        }

        if (body.location) {
            eventToUpdate.ev_location = body.location;
        }

        await EventModel.update(id, eventToUpdate);
        res.json({ message: "Votre evenement à bien été modifier", event: eventToUpdate });
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la modification de l'event" });
    }
}

async function insert(req,res){
    try {
        const body = req.body;
        if (!body.title || !body.owner) {
            return res.status(403).json({error : "Le titre et le owner sont obligatoire !"})
        }

        const inserted = await EventModel.insert(body);
        res.status(201).json(inserted);
    } catch (error) {
        res.status(500).json({error : "Erreur lors de l'insertion de l'event"});
    }
}


async function deleteEvent(req,res) {
    try {
        const id = req.params.id;
        const deleted = await EventModel.deleteEvent(id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({error : "Une erreur est survenue lors de la suppression de l'event"})
    }
}

export default {
    getAll,
    getById,
    update,
    insert,
    deleteEvent
}
