### Git/GitHub

- Why do we use Git?

To assist in version controlling. Revert broken changes, work asyncronously and blame xD

- What’s the difference between Git and GitHub?

Git is the program/CLI that allows us to version control. GitHub is a website that stores all the info.

- What happens when you clone a repository?

As the name suggests, we are creating a local clone of the repository. We are essentially downloading a copy of the repository to our device.

- What happens when we do `git pull origin main` ?

This will make it so our local copy is updated to match the latest version of the main branch

- How do we create a new branch on our local machine?

git checkout -b [branch name]

- How do we control which changes will be included in the next commit?

```
git add [fileNames]
git commit -m 'Message describing the changes'
```

- When might git add . be inappropriate?

When we don't want to include all the local files changed to the commit

- How do we make sure our local changes don’t conflict with main?

By running `git pull` before we start working on the code

- What does git push origin [branch-name] do?

It pushes the changes to the selected branch

- Why do we make pull requests instead of just changing `main` directly?

This is to allow other collaborators to review the code prior to submission. Helps prevent breaking changes to the codebase.

- Why should you review your teammates’ pull requests?

It helps prevent breaking changes to the codebase, we can check if the codebase standards are being followed and serves as a good learning opportunity.

### HTML

- Why is accessibility important?

It increases the number of users which can access the website. For insensitive and disconnected companies: More users = more 🤑🤑🤑

- How can you quickly find simple accessibility problems?

Manual testing and Chromium's lighthouse check are good starting points.

- What is semantic HTML?

HTML tags that give meaning to the content. This helps developers and screen readers interpret what the content is. Ex: `<article>` instead of `<div>`

- Why is it important to use the “correct” semantic element?

Improves the screen-reader user's experience and depending on the tag used, can have some inbuilt functionality which saves the devs time.

- What is the <form> element used for?

For content which requires user input and submission.

### CSS

- How would you use CSS variables to make a reusable colour palette?

  ```:root {
    --colour-name: 'colour-value';// hsl | rgb | hex | string
  }

  element {
    color: var(--colour-name)
  }
  ```

- How would you use flexbox to make elements sit on a single line?

```
    element {
        display: flex;
        flex-direction: row;
    }
```

- How would you use grid to make a layout that automatically adds columns as the screen gets wider?

  ```
  element {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(size, 1fr)));
  }
  ```

- Why is it important to create a responsive design?

It allows our service/website to be accessed across multiple devices and resolutions. It's essential to give all users a good experience using our website.

- How would you structure your CSS to make it “mobile-first”?

Avoid using fixed sizes for elements, use flex and grid whenever possible. The main css would be developed for mobiles, then at the end I would add media queries for higher resolutions.

### Javascript

- Why should we avoid using `var` to define variables?

It has scope issues which `const` and `let` do not have.

- How might you make a long, complex chunk of code easier to read?

  Breaking it down into smaller steps and functions.

- What is a “callback”?
  A function which is not immediately called and is only run after conditions have been met.

#### Array methods

- How would you use `array.map()` to create a new array with transformed values?

  Create a callback function to be invoked for each iteration of the array.
  `array.map(callback)`

- How would you use array.filter() to create a new array with certain values removed?

  Create a callback function which returns a boolean to be invoked for each iteration of the array.
  `array.filter(callback)`

How would you use array.find() to get a single value from an array?

    `array.find(item => conditionFn(item))`

#### Promises & fetch

- What is a promise?

It is something which returns only when requirements have been met.

- How do promises help manage asynchronous code?

They allow other pieces of our code to run while our Promise is being executed.

- What does a promise’s `.then` method return?

It returns a fulfilled promise.

- How could you chain promises together to avoid “callback hell”?

By the use of `async`, `await`, `.then()`, `.catch`

- How would you handle a `fetch` request that failed to get a response from the server?

By catching and handling the error.

- How would you handle a fetch request that received a 404 response from the server?

Catch the error and notify the user, depending on the request being made.

HTTP

- What is an HTTP request?
  It is a request that interacts with a website, I could send or get data with a HTTP request.

- What kind of request is sent when you click a link in your browser?

  I don't know. I would guess a GET request

- What kind of request is sent when you submit a form in your browser?

POST

- What is an HTTP response?

  After the user has interacted with the website and made a request, the hosting service then sends a reply to the user's browser. That reply is what I would call a HTTP response.
  I have no clue what I'm saying though.

- What does the status code of an HTTP response tell us?

  Tells us the request has been fulfilled successfully or not and if not, why.

- What are some common status codes?

  I just remember 404 and 400 lololol

- What are HTTP methods for?

For interacting with the end point/service [?]

- What kind of request should have a GET method?

  Fetching data from a database.

- What kind of request should have a POST method?

  Creating a new user account

- What kind of request should have a PUT method?

  Updating a user's profile

- What kind of request should have a DELETE method?

  Removing data form the database

- What is the “body” of an HTTP request for?

  It is the part of the request which contains the content being transferred.

  DOM

- How would you get a reference to a DOM element in your JS?

  `element.querySelector(identifier)`

- How would you get references to multiple DOM elements at once in your JS?

  `element.querySelectorAll(identifier)`

- How would you update properties of a DOM element?

  `element.querySelectorAll(identifier).property = value`

- What’s the difference between a “property” and an “attribute”?

  No clue. I thought they were the same at some instances. If I were to guess, I'd say attribute is something inherent to the HTML element whereas property is something that can be accessed only through the JS Object [???]

- What are some different ways to add content inside a DOM element?

  ````element.textContent = 'content';
   element.innerText = 'content';
   element.innerHTML = 'content';
   element.append(child);```

  ````

- When might the <template> element be useful?

  Whenever we have content that would need to be created dynamically however it has a set structure to it.

- What are the different ways to add event handlers to elements?

  ````element.onEvent = function;
  element.addEventListener('event', function)```

  ````

- Why is addEventListener the safest way to add an event handler?

  I can't even speculate about this one lol.

- How can you access submitted form values in your JS?

  Depending on the method used, I could access the params of the submission using `window.location.search`

### Testing

- Why are tests useful?

  It allows us to know whenever a breaking change has been made without sending it to production.

- What is the difference between unit and integration tests?

  Unit testing tests a single component. Integration tests test the implementation of multiple components and test whether they work together.

- What kind of code is easier to test?

  I don't know how to answer this one. Pure functions without side effects are the best in my experience.

- Why should your tests be isolated from each other?

  Otherwise one test could interfer with another giving false positives/negatives

- What is Test Driven Development (TDD)?

  A system of development which requires the devs to write tests first, the code later.

- When might TDD be a useful process to follow?

  When a service is very complex, with multiple possible points of error.

  Debugging

- What process would you take to find out why your code isn’t working?

  Use the browser debugger and/or log stuff

- What tools do JS/dev tools have to help debug your code?

  coderunner extension on VS Code, debugger and the browser's developer tools

- At what point should you ask for someone else’s help?

After I have tried a couple of solution alternatives, looked it up for a while and am still unable to find a solution
