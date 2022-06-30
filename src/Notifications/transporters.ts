import { AcademyBTAConfig } from './configurations';

// export const transportator = (MailOptions: any) => {
//    BTAProtocolConfig.sendMail(MailOptions, (err: any, info: any) => {
//       if (err) {
//          console.log(err);
//       } else {
//          console.log('Email sent to: ', info.accepted);
//       }
//    });
// };

export const transportator = (MailOptions: any) => {
   AcademyBTAConfig.sendMail(MailOptions, (err: any, info: any) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent to: ', info.accepted);
      }
   });
};
