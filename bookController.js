import {books} from "../databade.js";
import { v4 as uuidv4 } from 'uuid';


function getAll(req, res){
    res.json(data);
}

function deleteBook(req, res) {
    const id = req.params.id;
      const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "No se encontrò el libro" });
  }

  const deletedBook = books.splice(index, 1)[0];
  res.json({ message: "Libro eliminado", book: deletedBook });
}

function create(req, res) {
  const body = req.body;

  const nuevo = {
    id: uuidv4(),
    title: body.title,
    author: body.author,
    yer: body.year
  };

  books.push(nuevo);
  res.status(200).json(nuevo);
}

function update(req, res) {
  const  id  = req.params.id;
  const body = req.body;

  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "No se encontrò el libro" });
  }


  books[index] = { ...books[index], ... body };
  res.json(books[index]);
}

export {
    getAll,
    deleteBook,
    create, 
    update
}

