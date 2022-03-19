import { Router } from 'express';
import { adduser, create, list, listUser, read, remove, update } from '../controllers/product';
import { checkAuth } from '../middlewares/checkAuth' 
const router = Router();

// user
router.post('/user', checkAuth, adduser);
router.get('/listuser', checkAuth, listUser);
// product
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products', checkAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.put("/product/:id", checkAuth, update )

export default router;