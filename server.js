import express from 'express';
import fallback from 'express-history-api-fallback';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

let root = path.join(__dirname, 'dist');
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
