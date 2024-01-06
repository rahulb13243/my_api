import twilio from 'twilio'
const accountSid = 'AC10b9a082fce16a4aa12173bf2204b93b';
const authToken = "f8132d839d2f0548fb798b0fc648efa4";
const client = twilio(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Rahul',
     from: '+18175005638',
     to: '+918210963928',
   })
   .then((message) => {
    console.log(`Message sent: ${message.sid}`);
    // res.send('SMS sent successfully');
  })
  .catch((error) => {
    console.error(`Error sending SMS: ${error.message}`);
    // res.status(500).send('Failed to send SMS');
  });