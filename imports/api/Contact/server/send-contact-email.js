import { Meteor } from 'meteor/meteor';
import sendEmail from '../../../modules/server/send-email';

export default (options) => {

  const emailAddress = options.email;
  const applicationName = "Application Name";
  const firstName = "Ivan";

  return sendEmail({
    to: "imarik81@gmail.com",
    from: `testcontact<support@application.com>`,
    subject: `Welcome, testing contact!`,
    template: 'welcome',
    templateVars: {
      welcomeUrl: Meteor.absoluteUrl('documents'), // e.g., returns http://localhost:3000/documents
    },
  })
    .catch((error) => {
      throw new Meteor.Error('500', `${error}`);
    });
};
