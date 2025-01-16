// Load the SDK for JavaScript
import  AWS from 'aws-sdk';
import http from 'http'

// Set the Region 
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
let s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});


try {
  let object = s3.getObject({Bucket: 'maxys06-bucket-test', Key: 'bucket-file.txt'}).promise();
  console.log(object)
}
catch(err) {
  console.log(err)
}

