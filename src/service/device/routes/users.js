import express from 'express';

import { createUser } from '../../device/controllers/users.js';
import { getUsers } from '../../device/controllers/users.js';
import { patchUser } from '../../device/controllers/users.js';
import { getUser } from '../../device/controllers/users.js';
import { deleteUser } from '../../device/controllers/users.js';



const router = express.Router();


router.get('/', getUsers);
router.post('/', createUser ); 
router.patch('/:id', patchUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);

export default router;