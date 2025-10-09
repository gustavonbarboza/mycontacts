// import delay from '../utils/delay';
import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

class ContactsServices {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  // Lista todos os contatos
  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`);
  }

  // Lista o contato com base no id
  async getContactById(id) {
    // await delay(500);
    return this.httpClient.get(`/contacts/${id}`);
  }

  // Cria um novo contato
  createContacts(contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.post('/contacts', { body });
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsServices();
