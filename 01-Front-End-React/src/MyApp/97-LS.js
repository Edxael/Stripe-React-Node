export const add = (key, value = {}) => localStorage.setItem(key, JSON.stringify(value))

export const get = key => JSON.parse(localStorage.getItem(key))

export const remove = key => localStorage.removeItem(key)

export const clear = key => localStorage.clear()