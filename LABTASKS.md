#Lab Tasks

For lab tasks from here on out, questions that require exploration and responding to on this markdown page will be in bolded text. You should respond to them directly within this markdown file. Markdown is effectively a plaintext, lighweight markup language that is designed to be converted into HTML; more simply, it's some text and symbols you can put into a document that will turn into pretty HTML.
Tasks that specify work to do without a written response will be bulleted.
If you're ever confused about what you need to do for a given task, ask.

## Part #1: exploring the node.js project
Study the project you have cloned. Run it according to the instrucitons in the README, including running the tests. Answer the following questions by editing this file.  This will give you a chance to play with markdown.

> Protip: Using Google to gain additional knowledge or support your conjectures about how something works is great! It's important that you think about everything and come to an understanding, though, so don't use Google as a scapegoat to get the questions done quickly or you will regret it!

#####What is the purpose of app.js? Explain what happens when a user is trying to access a page "kittens", when a user is trying to access the page "petForm", and when the user submits a form on "petForm". Explain what a "route" is.

> Takes input from the client and sends the client to the correct webpage on request. Also handles things such as root directory for the website and where to find variables. When going to the kittens page it simply says the page is under construction. Petform redirects the user to a form with a field to enter a new pet name. Submitting a form sends the server a message with the submitted text and prints out the text along with the length of the string. A route is... a route? It's like an internet rode. It specifies where to send the user.

#####What is the contents of the "public" folder? What is each of the html files there and how are they referenced in app.js?

> It contains the home page (index.html), the about page (about.html), and the petForm page with the submissible form. They are referenced with a singular slash in front signifying they are in the parent directory, followed by their name.

#####In your project change the message that appears when the user is trying to access the page "kittens". Describe what you did and how it worked.

> We simply changed the text, restarted the server, and refreshed the webpage. It worked great. There were many happy kittens.

#####Also change the message that a user sees when they are trying to find a page that doesn't exist.
> Same idea as the kittens page. We simply changed the text, restarted the server, and refreshed the webpage.

#####Describe what happens when you submit a form on petForm page. What are the form parameters in petForm? What is the method for the form? Where is the form submission handled in the project? How are parameters extracted? How is the resulting message generated? How is this different from accessing the page petForm the first time (to see the form)?
> Upon submitting a form, the server console prints the submitted string and tells the client to display the string along with its length.

#####Where is client-side Javascript defined? Name file(s) in which it is used.
> It is defined in clientJavaScript.js and clientJavaScript.spec.js and is referenced in index.html.

#####Where is server-side Javascript helper file defined? Where can it be used? Add a function to it and experiment with where you can call this function.
> It's defined in serverJavascript.js and used in both app.js and karma.conf.js.

#####What is the purpose of package.json file? What's in it, and what does it mean?
> We're pretty sure it talks about required versions of dependencies and information about packaged contents.

#####What's in .gitgnore file? What's the purpose of it?
> The .gitignore file contains the paths/names of files which should never be committed/pushed to git. It's got the files that WebStorm makes.

## Part #2: exploring testing

#####Find the testing file, describe where it is located and what it is testing. Run karma (the testing engine) as specified in the Readme and describe results. Do not edit any files at this time.

#####After having set up Travis CI with your forked project, play around the page for your project (build history, settings, branches, etc) and describe at least 3 features you think would be useful when troubleshooting a broken project.
> Well... we did things out of order. But using Travis to see older versions of the project and track WHERE the project started breaking would be very useful. Plus you can do so with multiple branches, and keep track of which branches have the least issues. Your collaborators can also be tracked.

#####What was the build status of your project right after you got everything set up? Use Travis to find any problems, and describe what failed, if anything. (Which files, what lines, why did failure occur, etc.)
> It was borked. There was a single test expecting a different string than it was actually receiving.

#####Fix any problems described in the previous question. Describe how you fixed them. Push your fix to GitHub and post a link to the passing build (from build history) here.
> We added another (almost identical) function that returned the desired test string. Also forgot to post the working build link. Maybe around https://travis-ci.org/raymo172/3601-S16-lab2_javascript-node/builds/104976805

- Study jasmine testing syntax. Think of a Javascript function, describe its behavior by writing tests for it (this is test-driven development, or TDD). Add the function, run the tests. (Actually do this. Don't forget to commit your changes!)

## Part #3: adding a GPA calculator

- Add a page to the project (don't forget to add it to git) that has a form for letter grades and credits for three classes.

- In TDD fashion, add tests for functions needed to compute the GPA and then implement the functions themselves. Note, however, that karma doesn't work with exports, so after you have tested the functions, you would need to create copies of them that you are exporting. This is awkward and will be fixed in subsequent node setups. Also make sure to add the file that you are testing to karma.conf.js.

- Add a route to app.js to display the GPA on the resulting page.

- Add the basic html to the send so that the GPA is displayed as an html page. Don't add too much: later we will be using various libraries to take care of generating html.

- As you are working, don't forget to change drivers in pair-programming, practice TDD, write comments, and make frequent commits. As before, at the end just push all the changes to github.

