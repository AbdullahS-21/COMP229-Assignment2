import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET - display Login page - /login */
router.get('/login', DisplayLoginPage);

/* GET - display Register page - /register */
router.get('/register', DisplayRegisterPage);

/* POST - process Login page when user presses Login button */
router.post('/login', ProcessLoginPage);

/* POST - process Register page when user presses Register button */
router.post('/register', ProcessRegisterPage);

/* GET - process the Logout page - /logout */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;
