import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const { params: { id } } = req;
    const messages = await Controller.get({ destinatarioId: id });
    res.send(messages);
}));

router.post('/', asyncHandler(async (req, res) => {
    const { body: { remitenteId, destinatarioId, msg } } = req;

    await Controller.create({ remitenteId, destinatarioId, msg });
    res.send('Llegamos a user');
}));

export default (app, entityUrl) => app.use(entityUrl, router);
