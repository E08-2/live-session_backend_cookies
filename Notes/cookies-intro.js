/* 

* COOKIES INTRODUCTION

- Cookies have been used for a long time!
- They are essential to the modern internet, and very commonly used.
- They are used to "remember" relevant information about us on websites that we visit.
- Cookies are text files containing small amounts of data - letters and numbers.
- Small = max 4096 bytes = 0.004mb
- Cookies are stored in the browser, and save information in key-value pairs

* - There are two types of cookie:

?   - Session - temporary - deleted when the user closes the browser
?   - Persistent - has an expiry date - remains in the browser until it expires

- By default, the browser will *automatically* send all cookies for the current domain to the server, with every request.

? Let's see how we can use cookies to store the JSON web token, instead of local storage...

=========================================================

* COOKIES - SECURITY ISSUES

* - A potential security problem with cookies is a Cross-Site Request Forgery (CSRF) attack
- This involves someone making false REQUESTS, using your cookies to pretend to be you!
? - More information: https://blog.vnaik.com/posts/web-attacks.html 

* Some options to protect against CSRF attacks: 
	1. You can set the "sameSite" option for your cookie(s) to "Strict", as we just did. 
        - This means the browser will not send the cookie if a request came from a different site. 
	2. You can also use a module called "csurf" to protect against CSRF attacks. This is out of scope for today's lesson, but may be worth looking into if you are interested in web security. :-)

*/