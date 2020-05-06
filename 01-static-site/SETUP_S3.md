# Steps to setup AWS S3 bucket for static hosting

1. Navigate to [S3 bucket home page](https://s3.console.aws.amazon.com/s3/home)
2. Click "_Create Bucket_" link on top
3. Input the bucket name and untick the "_Block all public access_" checkbox, and click "_Create Bucket_" button
4. The new bucket will be visible in S3 bucket listing. Click on the bucket name to explore it
5. Inside the bucket view click on the _Properties_ tab
6. Then click on the _Static website hosting_ option
7. Select radio button for "Use this bucket to host a website"
8. Enter _Index document_ as _index.html_ and _Error document_ as _404/index.html_ and click _Save_
9. Now open _Permissions_ tab
10. Edit the _Block Public Access_ setting
11. Untick _Block all public access_ checkbox and click _Save_
12. Now navigate to _Bucket Policy_ tab and copy paste the below snippet over there, and replace the bucket name with your bucket name

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

13. Click _Save_

## Setting up CDN

Serving resources through S3 bucket directly is not recommended. You should ideally serve all assets through a CDN.

See the [CDN setup guide](SETUP_CDN.md) to setup the CloudFront CDN on AWS.
