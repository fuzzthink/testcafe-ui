import path from 'path';
import globals from './globals';

const fastify = require('fastify');
const app = fastify();
const useStatic = require('fastify-static');

app.register(useStatic, {
  root: path.join(__dirname, '..', 'dist'),
})

app.get('/globals', async (req, reply) => globals);

const port = 51966; // CAFE in hex
app.listen(port).then(() => {
  console.log(`Server running at http://localhost:${port}/`);
});