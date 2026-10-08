import commentModel from '../Models/comments.model.js'

async function getAll(req, res) {
    try {
        const comments = await commentModel.getAll();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération des commentaires" })
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const comments = await commentModel.getById(id);
        res.json(comments[0]);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération du commentaire" })
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        let commentToUpdate = await commentModel.getById(id);
        if (commentToUpdate.length === 0) {
            return res.status(404).json({error : "Le commentaire n'existe pas"});
        }
        commentToUpdate = commentToUpdate[0];

        if(body.comment){
            commentToUpdate.co_comments = body.comment;
        }

        const updated = await commentModel.update(id, commentToUpdate);
        res.json(updated);
    } catch (error) {
        console.error(error);
        
        res.status(500).json({ error: "Une erreur est survenue lors de la modification du commentaire" })
    }
}

async function insert(req, res) {
    try {
        const body = req.body;
        const inserted = await commentModel.insert(body);
        res.status(201).json(inserted);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de l'insertion du commentaire" })
    }
}

async function deleteComments(req, res) {
    try {
        const id = req.params.id;
        const deleted = await commentModel.deleteComments(id);
        res.json(deleted);
    } catch (error) {
        res.status(500).json({ error: "Une erreur est survenue lors de la suppression du commentaire" })
    }
}

export default {
    getAll,
    getById,
    update,
    insert,
    deleteComments
}