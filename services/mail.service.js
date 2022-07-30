import nodemailer from 'nodemailer';
import { getRate } from './rate.service.js';
import readline from 'readline';
import fs from 'fs'

export async function nodeMailer() {

  const price = await getRate()
  const filePath = './mailDate.txt'

  const readEmail = fs.createReadStream(filePath, 'utf-8')
  
  const readInterface = readline.createInterface({
    input: readEmail,
    crlfDelay: Infinity,
    console: false
  });


  let pass = 'zlbbsnqcpsdbwcmh'
  let userAdmin = 'Andrewponomare@gmail.com'

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: userAdmin, 
      pass: pass, 
    },
  });

  for await (let email of readInterface) {
    console.log(email);
    let info = await transporter.sendMail({
      from: '"BTC rate"', // sender address
      to: `${email}`, // list of receivers
      subject: "BTC/UAH", // Subject line
      text: `${price.value} UAH`, // plain text body
    });
  
  }


  return true

}
