import { Router } from 'express';
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage} from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage} from './index.js';

// Create a new router instance
const router = Router();

// Route configuration
router.get('/', homePage);
router.get('/about', aboutPage);

router.get('/catalog', catalogPage);
router.get('/catalog/:courseID', courseDetailPage);

router.get('/demo', addDemoHeaders,demoPage);

router.get('/test-error', testErrorPage);

export default router;