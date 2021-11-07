import { data } from './data.js';

export const render = (container, items) => {
    // esercizio opzionale ordina in ordine alfabetico i contatti del data.js e nuovi anche se scritti minuscoli
    data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
  
  
    const elements = items.map((element) =>
      `<li>
      <i class="fas fa-id-badge fa-7x"></i><h3>${element.name}</h3>
        <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
      </li>`
    );
  
    const content = elements.join('');
  
    container.innerHTML = content;
  };
