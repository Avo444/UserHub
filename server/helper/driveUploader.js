const { Readable } = require("stream");
const { google } = require("googleapis");

const driveUploader = async (file, filename, avatar) => {
    const {
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET,
        GOOGLE_REFRESH_TOKEN,
        GOOGLE_REDIRECT_URI,
        GOOGLE_DRIVE_FOLDER_ID,
    } = process.env;

    const oauth2Client = new google.auth.OAuth2(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET,
        GOOGLE_REDIRECT_URI,
    );

    oauth2Client.setCredentials({
        refresh_token: GOOGLE_REFRESH_TOKEN,
    });

    const drive = google.drive({
        version: "v3",
        auth: oauth2Client,
    });
    if (avatar) {
        await drive.files.delete({
            fileId: avatar,
        });
    }
    const response = await drive.files.create({
        requestBody: {
            name: filename,
            parents: [GOOGLE_DRIVE_FOLDER_ID],
        },
        media: {
            mimeType: file.mimetype,
            body: Readable.from(file.buffer),
        },
        fields: "id",
    });

    const fileId = response.data.id;

    await drive.permissions.create({
        fileId: fileId,
        requestBody: {
            role: "reader",
            type: "anyone",
        },
    });
    return fileId;
};

module.exports = driveUploader;
