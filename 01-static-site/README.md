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

You will need to setup bucket on AWS S3. Steps are mentioned in [S3 setup guide](SETUP_S3.md).
After you have setup the S3 modify the bucket name in package.json file and before deployment do a production build as mentioned earlier. And then run below command to deploy code on S3.

```bash
npm run build
# or
yarn build
```

Once deployment is done replace the bucket name in below URL and navigate to the same to see your website:
http://your-bucket-name.s3-website-us-east-1.amazonaws.com/
