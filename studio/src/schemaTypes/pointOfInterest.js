export default {
  name: 'pointOfInterest',
  title: 'Ciekawe Miejsce w Okolicy',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nazwa miejsca', type: 'string' },
    { name: 'description', title: 'Krótki opis', type: 'string' },
    {
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Restauracja/Kawiarnia', value: 'food' },
          { title: 'Sklep', value: 'shop' },
          { title: 'Atrakcja', value: 'attraction' },
          { title: 'Transport', value: 'transport' },
        ],
        layout: 'radio',
      },
    },
  ],
}
