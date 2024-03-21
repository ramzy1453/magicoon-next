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
      host: "magicoon.com",
      port: 465,
      secure: true,
      auth: {
        user: "react@magicoon.com",
        pass: "Ru22io70$",
      },
    });

    // SeyfDevDz2024
    // Ru22io70$

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
          resolve({
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
