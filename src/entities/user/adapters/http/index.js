import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const v = await Controller.get();
    res.send(v);
}));

router.post('/access', asyncHandler(async (req, res) => {
    const { body: { name } } = req;
    const v = await Controller.get({ name });
    if (v.length == 0) {
        const r = await Controller.create({ name });
        res.send({ id: r.id });
    } else {
        res.send({ id: v[0].id });
    }
}));

export default (app, entityUrl) => app.use(entityUrl, router);
