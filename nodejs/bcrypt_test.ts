import { createCipheriv, randomBytes, createDecipheriv, createHash, verify } from 'crypto';
import _ from 'lodash';

export const encrypt = async (plainText: string) => {
  const iv = randomBytes(16);
  const key = await getKey();
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encryptedData = cipher.update(plainText);
  encryptedData = Buffer.concat([encryptedData, cipher.final()]);
  return iv.toString('hex') + ':' + encryptedData.toString('hex');
};
export const decrypt = async (text: string) => {
  const key = await getKey();
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
const getKey = async () => {
  const password = process.env.CRYPTO_PASSWORD;
  const key = createHash('sha256').update(String(password)).digest('base64').substr(0, 32);
  return key;
};