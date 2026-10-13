# React Auth App

This project is a tiny authentication frontend used to better understand how work React features like contexts, hooks, props and component lifecycle.

## Auth part

Initally, the auth state was store in a react context but I later added redux and redux persite to manage it. Eventually I also added Tanstack (React query) and I refactored the Post Service but the Auth Service. I could get rid of the error part in the Auth Service but I'll keep it as an exemple.

## Posts part

Same as Auth, initally I was work a little different with the usePosts custom hooks, but later when I introduced React query the hook became useless. I kept it just to remember that there are many ways to achive the same goal but using libs can reduce significantly the boilerplate code.

Also, this service is not currently fetching any data from the backend. It could be imporved.

## Test part

Todo: I would like to cover this part, especially because I thought about the clean code practice while developping for exemple the services are not directly get in the components LoginPage or PostPage but given through props so it's easy to mock.

## CI/CD

Todo: I would like to cover this part later too.
