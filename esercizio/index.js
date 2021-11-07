import { data } from './data.js';
import { q } from './query.js';
import { render } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = q('form');
  const input = q('form input');
  const list = q('ul');

  //seleziono la seconda form (input utente)
  const newForm = q('#Add');
  // const Inputname = q('#nome');
  // const Inputphone = q('#tel');
  // const Inputemail = q('#email');

  render(list, data);


  input.addEventListener('keyup', (event) => {
    event.preventDefault();
    const value = input.value.toLowerCase();

    const results = data.filter((element) =>
      element.name.toLowerCase().search(value) > -1 ||
      element.email.toLowerCase().search(value) > -1
    );
    render(list, results);
  });

  // eserzio aggiungere nuovo contatto in lista

  newForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newData = {
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
      }

    data.push(newData);
    render(list, data);

    Add.reset(); // event.target.reset()

    console.log(newData);


    // come l'ho fatto io e sopra fatto in classe
    // const newData = {
    //   name: Inputname.value,
    //   phone: Inputphone.value,
    //   email: Inputemail.value,
    // }

    // data.push(newData);

    // render(list, data);
  });
});