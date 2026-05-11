const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

export function sanitizeInput(value) {
  return String(value ?? '')
    .trim()
    .replace(/[&<>"']/g, (char) => entityMap[char]);
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
