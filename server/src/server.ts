import express from 'express';
import cors from 'cors';
import routes from './routes';

// tudo vai partir de deste app (conexões...)
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//fará nossa aplicação ouvir um endereço HTTP... Requisições HTTP... parms a porta utilizada
//localhost:3333
app.listen(3333);