import { db, DataTypes } from '@Application/database';

export default db.define('message', {
	remitenteId: DataTypes.INTEGER,
	destinatarioId: DataTypes.INTEGER,
	msg: DataTypes.STRING,
});

