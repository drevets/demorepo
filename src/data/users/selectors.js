import store from '../../../store';

export const getAll = () => {
  const { items } = store.getState().data.users;
  const itemsArray = Object.keys(items).map(itemKey => items[itemKey]);
  itemsArray.sort((item1, item2) => item1.id > item2.id);
  return itemsArray
}

//what does the data structure look like on the itemds that are stored on state??
