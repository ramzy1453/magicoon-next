import nodemailer from "nodemailer";

interface Mail {
  name: string;
  from: string;
  subject: string;
  text: string;
}

export function sendMail({ name, from, subject, text }: Mail) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.host_smtp,
      port: 465,
      secure: true,
      auth: {
        user: process.env.user_smtp,
        pass: process.env.pass_smtp,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.sendMail(
      {
        to: "Contact@magicoon.com",
        subject,
        html: `
        <div>
          <h2><Send From:> ${from} - ${name}</h2>
          <p>${text}</p>
        </div>
        `,
      },
      (error, info) => {
        if (error) {
          reject({
            error: true,
            message: error.message,
          });
        } else {
          resolve(info);
        }
      }
    );
  });
}
