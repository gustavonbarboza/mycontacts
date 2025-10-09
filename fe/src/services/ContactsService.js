// import delay from '../utils/delay';
import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

class ContactsServices {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  // Lista todos os contatos
  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpClient.get(`/contacts/?orderBy=${orderBy}`);

    return contacts.map((contact) => ContactMapper.toDomain(contact));
  }

  // Lista o contato com base no id
  async getContactById(id) {
    // await delay(500);
    const contact = await this.httpClient.get(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);
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
