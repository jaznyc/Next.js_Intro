import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({ message: 'all good' });
  })
  .post((req, res) => {
    res.json({ message: 'posted something' });
  });

export default handler;
