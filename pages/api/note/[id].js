import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = (id) => {
  const filtered = notes.filter((note) => {
    return note.id === parseInt(id);
  });
  return filtered[0];
};

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);
    console.log({ note });
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    res.json({ data: note });
  })
  .patch((req, res) => {
    const note = getNote(req.query.id);
    console.log({ note });
    if (!note) {
      res.status(404);
      res.json({ message: 'error retrirving the note' });
      res.end();
      return;
    }

    const index = notes.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...note, ...req.body };
    console.log({ updated });
    notes[index] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const index = notes.findIndex((n) => n.id === parseInt(req.query.id));
    notes.splice(index, 1);
    res.json({ data: req.query.id });
  });

export default handler;
