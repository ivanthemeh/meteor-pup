import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import sendContactEmail from './send-contact-email';

Meteor.methods({
  'contact.sendContactEmail': function contactSendContactEmail(options) {
    check(options, {
      emailAddress: String,
      name: String
    });
    // return console.log('working', options);
    return sendContactEmail(options);
  }
})
