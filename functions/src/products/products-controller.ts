import { Products } from './products-repository';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const app = express();

// Automatically allow cross-origin requests
app.use(cors());

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get('/:id', (req, res) => res.send(Products.getById(req.params.id)));
app.post('/', (req, res) => res.send(Products.create(req.body)));
app.put('/:id', (req, res) => res.send(Products.update(req.params.id, req.body)));
app.delete('/:id', (req, res) => res.send(Products.delete(req.params.id)));
app.get('/', (req, res) => res.send(Products.list()));

// Expose Express API as a single Cloud Function:
export const productsApp = functions.https.onRequest(app);
