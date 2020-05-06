# CloudFront CDN Setup Guide

Follow below steps to setup CDN in front of your S3 bucket:

1. Navigate to [CloudFront CDN home page](https://console.aws.amazon.com/cloudfront/home)
2. Click _Create Distribution_ button
3. Click on the _Get Started_ button under the _Web_ category
4. Now modify the below values, and leave rest of the values same
   1. Origin Domain Name - _Your S3 bucket name_
   2. Restrict Bucket Access - _Yes_
   3. Origin Access Identity - _Create a New Identity_
   4. Grant Read Permissions on Bucket - _Yes, Update Bucket Policy_
   5. Viewer Protocol Policy - _Redirect HTTP to HTTPS_
   6. Compress Objects Automatically - _Yes_
   7. Default Root Object - _index.html_
5. Once above settins are done click _Create Distribution_
6. Now wait for the distribution to get deployed. It may take few minutes.
