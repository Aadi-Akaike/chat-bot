export function generateUniqueId() {
  const timestamp = Date.now().toString(16); // Convert timestamp to hexadecimal string
  const randomString = Math.random().toString(16).substr(2); // Generate random hexadecimal string
  return `${timestamp}-${randomString}`;
}
