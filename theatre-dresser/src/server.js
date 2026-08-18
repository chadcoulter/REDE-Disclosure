const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`theatre-dresser listening on port ${PORT}`);
});
