import express from "express";

import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/store/configureStore';
import { appActionCreator } from '../../src/actions';

const router = express.Router();
const path = require("path");


const actionIndex = (req, res, next) => {
 const store = configureStore();

 // store.dispatch(appActionCreator.setAsyncMessage("Hi, I'm from server!"))
 //     .then(() => {
 serverRenderer(store)(req, res, next);
 // });
};


// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);

// other static resources should just be served as they are
router.use(express.static(
 path.resolve(__dirname, '..', '..', 'build'),
 { maxAge: '30d' },
));

export default router;
