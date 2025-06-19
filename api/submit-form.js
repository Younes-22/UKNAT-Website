
// Vercel will automatically bundle this with its dependencies.

import { google } from 'googleapis';

export default async function handler(request, response) {
    // 1. We only want to handle POST requests.
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Only POST requests are allowed' });
    }

    try {
        // 2. Get the form data from the request body.
        const formData = request.body;

        // 3. Authenticate with the Google Sheets API.
        // These environment variables are configured in Vercel.
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                // The private key needs to have its newlines escaped in the Vercel dashboard.
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // 4. Append the data to your spreadsheet.
        const spreadsheetId = process.env.SPREADSHEET_ID;
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:F', // The sheet and range to append to.
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[
                    new Date().toISOString(), // Add a timestamp
                    formData.name,
                    formData.email,
                    formData.phone,
                    formData.interest,
                    formData.availability.join(', '),
                    formData.message
                ]],
            },
        });

        // 5. Send a success response back to the frontend.
        return response.status(200).json({ message: 'Submission successful!' });

    } catch (error) {
        console.error(error);
        // 6. Send an error response back to the frontend.
        return response.status(500).json({ message: 'Something went wrong.' });
    }
}