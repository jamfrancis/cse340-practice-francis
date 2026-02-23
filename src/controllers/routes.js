import { Router } from 'express';
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage} from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage} from './index.js';
import contactRoutes from './forms/contact.js';
import registrationRoutes from './forms/registration.js';

// Create a new router instance
const router = Router();

// Route configuration
router.get('/', homePage);
router.get('/about', aboutPage);

router.get('/catalog', catalogPage);
router.get('/catalog/:courseID', courseDetailPage);

// Add contact-specific styles to all contact routes
router.use('/contact', (req, res, next) => {
      res.locals.extraStyles = '<link rel="stylesheet" href="/css/contact.css">';
      next();
  });

  // Add registration-specific styles to all registration routes
router.use('/register', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/registration.css">');
    next();
});

// Contact form routes
router.use('/contact', contactRoutes);

// Registration routes
router.use('/register', registrationRoutes);

router.get('/demo', addDemoHeaders,demoPage);

router.get('/test-error', testErrorPage);

export default router;