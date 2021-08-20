const db = require("../models");
const nodemailer = require('nodemailer');
// import fs from "fs";
// import ejs from "ejs";
// import { htmlToText } from "html-to-text";

const transporter = nodemailer.createTransport({
    port: 587,
    host: "vps.cashmets.com",
    auth: {
        user: 'help@cashmets.com',
        pass: 'Sksg@1010',
    },
    secure: 'SSL/TLS', // upgrades later with STARTTLS -- change this based on the PORT
});

sendEmailWithoutAttachment = (req, res, next) => {
    console.log("sendEmailWithoutAttachment"+req);
    // const {to, subject, text } = req.body;
    const mailData = {
        from: 'help@cashmets.com',
        to: 'saikrishnaporala@gmail.com',
        subject: 'test mail',
        text: 'test',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
    return "success";
};

sendEmailWithAttachment = (req, res, next) => {
    const {to, subject, text } = req.body;
    const mailData = {
        from: 'youremail@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
        attachments: [
            {   // file on disk as an attachment
                filename: 'nodemailer.png',
                path: 'nodemailer.png'
            },
            {   // file on disk as an attachment
                filename: 'text_file.txt',
                path: '../attachments/text_file.txt'
            }
        ]
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
};
const emailsending = {
    sendEmailWithoutAttachment: sendEmailWithoutAttachment,
    sendEmailWithAttachment: sendEmailWithAttachment
};

module.exports = emailsending;