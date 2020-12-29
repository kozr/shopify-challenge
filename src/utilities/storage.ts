export const saveToStorage = (key: string, value: string): boolean => {
  try {
    localStorage.setItem(key, value)
    return true
  } catch (e) {
    return false
  }
}

export const getFromStorage = (key: string): string => {
  try {
    return localStorage.getItem(key)
  } catch (e) {
    return ''
  }
}
