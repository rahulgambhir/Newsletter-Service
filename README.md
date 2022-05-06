
# Newsletter Service

A service which will send pre-decided content to a specific set of users[subscribers] at specified intervals/time.

Tech stack used - Express.js, MongoDB

(For testing emails, I've used Mailtrap.io)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URL`

`SMTP_HOST`

`SMTP_PORT`

`SMTP_USER`

`SMTP_PASS`


## API Reference

#### Get content & user from DB & send specific emails to specific users

```http
  GET /send
```


## Screenshots

![App Screenshot](https://github.com/rahulgambhir/Newsletter-Service/blob/main/Screenshots/email_demo.png)


## Improvements
- Code refactoring & optimization is yet to be done. (Due to some time constraints, was not able to give enogh time to this project.)
- Currently, I'm fetching the content only on the basis of date. I need to work on the logic to fetch it on the basis of specific time.
- Service to automatically send content to the subscriber of that topic at the specific time of that content is yet to be worked upon.