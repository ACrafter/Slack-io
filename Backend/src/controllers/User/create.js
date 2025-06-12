import sql from "../../config/neonConfig.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const createUserByEmail = async function (request, reply) {
  const email = request.body.email;

  const result = await sql`SELECT * FROM users WHERE email=${email}`;

  if (result.length) {
    try {
      const loginCode = "123456";
      await sql`
                UPDATE users 
                  SET 
                    pass_code=${loginCode},
                    pass_code_expiry=${(Date.now() + 600000).toString()} 
                WHERE email = ${email}
                `;

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Your Login Code",
        text: `Your login code is ${loginCode}. It will expire in 10 minutes.`,
      };
      
      // await transporter.sendMail(mailOptions);

      reply.send({ success: true, newUser: false, loginCode });
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  } else {
    try {
      const loginCode = "123456";
      await sql`
        INSERT INTO users
        (email, pass_code, pass_code_expiry)
        VALUES
        (${email}, ${loginCode}, ${(Date.now() + 600000).toString()})
    `;

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Your Login Code",
        text: `Your login code is ${loginCode}. It will expire in 10 minutes.`,
      };
      
      // await transporter.sendMail(mailOptions);

      reply.send({ success: true, newUser: true, loginCode });
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }
};
