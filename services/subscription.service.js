import fs from 'fs';
import readline from 'readline';

const filePath = './mailDate.txt'

export async function saveEmail(email) {

  const readEmail = fs.createReadStream(filePath)

  const readInterface = readline.createInterface({
    input: readEmail,
    console: false
  });

  for await (const line of readInterface) {
    if (line === email) {
      return false;
    }
  }

  readEmail.close()

  const writeEmail = fs.createWriteStream(filePath, { flags: 'a' });

  writeEmail.write('\n' + email)
  writeEmail.end()
  return true
}