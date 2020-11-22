const getUserToken = (state) => state.userBook.token;
const getUserInfo = (state) => state.userBook.user;
const getUserContacts = (state) => state.userBook.contacts;
const getContactsFilter = (state) => state.userBook.filter;
const getErrorMessage = (state) => state.userBook.error;

export {
  getUserToken,
  getUserInfo,
  getUserContacts,
  getContactsFilter,
  getErrorMessage,
};
