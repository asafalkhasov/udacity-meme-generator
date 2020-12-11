# Udacity Meme Generator APP

## Running frontend
If you want to run the frontend:
```bash
cd frontend
npm run serve
```


## Running backend
If you want to run the backend yourself:
```bash
cd backend
sls deploy
```
If will create all the nessesary resources:
- DynamoDB
- S3 bucket
- API gateway
- Lambda functions

## Authentication
Authentication is done using Auth0 service.

## API
You can find the postman collection in the root of this repo to explore the API:

 https://2xv1fekv86.execute-api.eu-central-1.amazonaws.com/dev/

- Get all Memes (without authentication)
- Get my memes - with access token
- Delete my meme
- Create new code