const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    '996170038177-fabbae5732ndibmocqs50qa4isctkr70.apps.googleusercontent.com',
    'HJtRprleMbelj-Cpe6R5C7ne',
    'http://brown.edu'
  );

const gmail = google.gmail({
    version: 'v1',
    auth: oauth2Client
  });
  
  async function runSample() {
    const res = await gmail.users.watch({
        userId: 'me',
        requestBody: {
          // Replace with `projects/${PROJECT_ID}/topics/${TOPIC_NAME}`
          topicName: `projects/productiv-rampup-272115/topics/gmail`
        }
      });
      console.log(res.data);
  }
  runSample().catch(console.error);

  