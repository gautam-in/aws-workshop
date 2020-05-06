# AWS Workshop - Static Blog

## Dev Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build Production Site

```bash
npm run build
# or
yarn build
```

## To Deploy

Before you start with deployment you will need to complete below steps:

1.  Setup AWS CLI on your system, follow [AWS Official Guide](https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html) for the setup
2.  Setup S3 bucket on AWS. Steps are mentioned in [S3 setup guide](SETUP_S3.md)
3.  After you have setup the S3 modify the bucket name in package.json file under deploy script
4.  Run the production build as mentioned above

Once above steps are done run below command to deploy your code on AWS S3.

```bash
npm run build
# or
yarn build
```

Once deployment is done replace the bucket name in below URL and navigate to the same to see your website:
http://your-bucket-name.s3-website-us-east-1.amazonaws.com/
