import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type contacts controller
import { DisplayAddPage, DisplayContactsListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contacts';

// import Util Functions
import { AuthGuard } from '../Util/index';

/* GET /contacts-list page. */
router.get('/', DisplayContactsListPage);

/* GET - display /contacts-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

/* GET - display /contacts-list/edit/:id page. */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* POST - process /contacts-list/add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /contacts-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /contacts-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);