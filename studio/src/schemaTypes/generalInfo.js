export default {
  name: 'generalInfo',
  title: 'Informacje Ogólne',
  type: 'document',
  fields: [
    { name: 'welcomeTitle', title: 'Tytuł powitalny', type: 'string' },
    { name: 'welcomeMessage', title: 'Wiadomość powitalna', type: 'text' },
    { name: 'wifiNetwork', title: 'Nazwa sieci Wi-Fi', type: 'string' },
    { name: 'wifiPassword', title: 'Hasło do Wi-Fi', type: 'string' },
    { name: 'address', title: 'Adres mieszkania', type: 'string' },
  ],
}
