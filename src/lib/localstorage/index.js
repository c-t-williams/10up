export const setItem = (key, value) => {
  if (window && window.localStorage && window.localStorage.setItem) {
    window.localStorage.setItem(key, value);
  }
};

export const getItem = (key) => {
  if (window && window.localStorage && window.localStorage.getItem) {
    return window.localStorage.getItem(key);
  }
};

export const removeItem = (key) => {
  if (window && window.localStorage && window.localStorage.removeItem) {
    return window.localStorage.removeItem(key);
  }
};
