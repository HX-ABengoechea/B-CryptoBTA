const nodemailer = require('nodemailer');

export const AcademyBTAConfig = nodemailer.createTransport({
   host: 'smtp.1and1.es',
   port: 25,
   secure: false,
   auth: {
      user: 'info@academybta.com',
      pass: 'trader2020$$',
   },
});

const transportator = (MailOptions: any) => {
   AcademyBTAConfig.sendMail(MailOptions, (err: any, info: any) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent to: ', info.accepted);
      }
   });
};

const AcademyPromotion = (to: string, name: string) => {
   return {
      from: 'info@academybta.com',
      to: `${to}`,
      subject: '¡Obten un 10% de descuento en cualquier curso de Academy BTA!',
      text: 'nudsfosidfisdif',
   };
};

export const sendPromotion = async (EmailTo: string, Name: string) => {
   try {
      transportator(AcademyPromotion(EmailTo, Name));
   } catch (err) {
      console.log(err);
   }
};