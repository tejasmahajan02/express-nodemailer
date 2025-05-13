import nodemailer from 'nodemailer';
import { config } from '../../config/env.config';
import { MailOptions } from 'nodemailer/lib/json-transport';
import { compileTemplate } from './utils/helpers.util';

export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: 465,
      secure: true,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async send(options: MailOptions) {
    try {
      const info = await this.transporter.sendMail({
        ...options,
        from: options.from || config.smtp.from,
      });
      console.log('Email sent: ', info.messageId);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendTextMail(to: string, subject: string, message: string) {
    return await this.send({
      to,
      subject,
      html: `<p>${message}</p>`,
    });
  }

  async sendTemplateMail(
    to: string,
    subject: string,
    templateName: string,
    replacements: any,
  ) {
    try {
      // Generate the HTML content with replacements
      const htmlTemplate = compileTemplate(templateName, replacements);
      const info = await this.send({ to, subject, html: htmlTemplate });
      return info;
    } catch (error) {
      console.error('Error sending template email:', error);
    }
  }

  async resetPassword(to: string, verificationLink: string) {
    const subject = 'Reset Password';
    await this.sendTemplateMail(to, subject, 'email-template', {
      email: to,
      home_url: config.node.origin,
      url: verificationLink,
      subject,
    });
  }
}

// Export a singleton instance
export const mailService = new MailService();
