import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { uploadImage } from './storage'
import { getDocuments } from './firestore'

const multer = require('multer')
const bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.disable('x-powered-by')

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
})

app.use(multerMid.single('file'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/upload', async (req, res, next) => {
  try {
    const myFile = (req as any)?.file // TODO: fix
    const imageUrl = await uploadImage(myFile)
    res
      .status(200)
      .json({
        message: "Upload was successful",
        data: imageUrl
      })
  } catch (error) {
    next(error)
  }
});

app.get('/notes', async (req, res, next) => {
  try {
    const notes = await getDocuments()
    res
      .status(200)
      .json({
        message: "Upload was successful",
        data: notes
      })
  } catch (error) {
    next(error)
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});