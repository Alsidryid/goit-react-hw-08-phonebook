import authInstance from './auth-api';

export const requestLoadContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await authInstance.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
