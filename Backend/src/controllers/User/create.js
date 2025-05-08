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
  console.log(result);

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

      reply.send({ success: true, newUser: false });
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

      reply.send({ success: true, newUser: true });
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }
};
