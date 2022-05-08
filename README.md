
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

#### To add new user

```http
  POST /add/user
```

#### To add new content

```http
  POST /add/content
```


## Screenshots

![App Screenshot](https://github.com/rahulgambhir/Newsletter-Service/blob/main/Screenshots/email_demo.png)


## Improvements
- Date and time for content can be handled in a better way.
- To handle - Addition of new topics in a better way.