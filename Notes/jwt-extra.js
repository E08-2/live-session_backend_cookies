/* 

* JSON WEB TOKENS (JWT) - EXTRA INFORMATION

? What can "jsonwebtokens" be used for?

1. It lets us CREATE a token   - jwt.sign()
2. It can also VERIFY a token  - jwt.verify() - "is this a valid token?"
3. It can DECODE a token       - jwt.verify()

? What parts do a JSON Web Token have?

Example token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTlmN2YzMzVhNGQyNWJjODQzZDc5YTEiLCJpYXQiOjE2Mzc4NTE4MjMsImV4cCI6MTYzNzg1NTQyM30.dq4X67jTZtgo-mMlBrZpewWV36BZxyqUfloTkTcpX_s"

* In fact, tokens have 3 parts, separated by a full stop/dot/period.

* This 3-part structure follows a pattern:

- Part 1: HEADER - metadata about the token itself - includes the type of token (JWT) and the signing algorithm used.

- Part 2: PAYLOAD - Contains the "claims" (the data contained in the token - usually data about the user and extra relevant data)

- Part 3: SIGNATURE - The signed combination of (encoded header + encoded payload + secret + signing algorithm)
    - The signature can be used to make sure the token hasn't been changed since it was issued
    - As the signature contains the "secret" key, it can also prove the token was issued by your server      

? Summary:

* Part 1: HEADER
* Part 2: PAYLOAD
* Part 3: SIGNATURE

? Extra resources:

- Useful JWT summary: https://stackoverflow.com/a/62095056
- Useful documentation: https://jwt.io/

*/