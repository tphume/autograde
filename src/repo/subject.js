import axios from "axios";

async function fetchSubjectList() {
  if (process.env.NODE_ENV === "production") {
    const endpoint = process.env.REACT_APP_URL + "/courses/";

    try {
      const response = await axios.get(endpoint);

      // parse to correct format
      const res = response.data.map((c) => {
        switch (c.name) {
          case "PYTHON":
            return { ...c, description: pythonDesc };
          case "JAVASCRIPT":
            return { ...c, description: javascriptDesc };
          default:
            return { ...c };
        }
      });

      return res;
    } catch (e) {
      throw e;
    }
  }

  // Below is the mock api
  return [
    {
      id: "100434324",
      name: "Python",
      prof: "Dr.Snake Cobra",
      description: pythonDesc,
    },
    {
      id: "100543432",
      name: "Javascript",
      prof: "Dr.Eye Glasses",
      description: javascriptDesc,
    },
  ];
}
export { fetchSubjectList };

const pythonDesc = `
# About Python
- [Overview](#overview)
- [Usecase](#usecase)
- [Real world example](#example)
\n &nbsp;\n
## Overview
**Python** is a strong language for beginners.
There are many resources available for programmers of all levels, 
the code is highly readable, and in many cases phrases are comparable to those in the English language.
\n &nbsp;
 
Python is a very versatile and a flexible language providing different programming methods
such as object oriented programming or cross platform programming to create apps for web, 
mobile or even desktop. Python is also very useful for multiple applications such as for AI, 
connection with other languages such as prolog, game making, web backend, API services, 
big data and many more applications. 
\n &nbsp;
 
Since python is an opensource project, many libraries can be made to use with python, 
with a vast majority of libraries which support different programming paradigm.
\n &nbsp;\n
----
\n &nbsp;\n
## Usecase
You may be wondering what all are the applications of Python. There are so many applications of Python, here are some of the them.
1. **Web development** – Web framework like Django and Flask are based on Python. They help you write server side code which helps you manage database, write backend programming logic, mapping urls etc.
\n &nbsp;\n
2. **Machine learning** – There are many machine learning applications written in Python. Machine learning is a way to write a logic so that a machine can learn and solve a particular problem on its own. For example, products recommendation in websites like Amazon, Flipkart, eBay etc. is a machine learning algorithm that recognises user’s interest. Face recognition and Voice recognition in your phone is another example of machine learning.
\n &nbsp;\n
3. **Data Analysis** – Data analysis and data visualisation in form of charts can also be developed using Python.
\n &nbsp;\n
4. **Scripting** – Scripting is writing small programs to automate simple tasks such as sending automated response emails etc. Such type of applications can also be written in Python programming language.
\n &nbsp;\n
5. **Game development** – You can develop games using Python.
\n &nbsp;\n
6. **You can develop Embedded applications** in Python.
\n &nbsp;\n
7. **Desktop applications** – You can develop desktop application in Python using library like TKinter or QT.
\n &nbsp;\n
----
\n &nbsp;\n
## Real world example
1. **TensorFlow** - https://www.tensorflow.org/
2. **2D Game with pyhton** - https://opensource.com/article/18/4/easy-2d-game-creation-python-and-arcade
`;

const javascriptDesc = `
# About Javascript
- [Overview](#overview)
- [Usecase](#usecase)
- [Real world example](#example)
\n &nbsp;\n
## Overviews
JavaScript is among the most powerful and flexible programming languages of the web. 
It powers the dynamic behavior on most websites, including this one.
\n &nbsp;\n
JavaScript, as you might know, is ubiquitous in today’s software development world. It is the foundation of frontend web 
development and is the key ingredient in frameworks like ReactJS, Angular, and VueJS. 
\n &nbsp;\n
It can also help create solid backends with platforms like Nodejs, runs desktop applications like Slack, 
Atom, and Spotify, and runs on mobile phones as Progressive Web Apps (PWAs).
\n &nbsp;\n
In short, it is everywhere—and for good reasons. For starters, compared to other languages like 
C and Java, JavaScript is generally easier to learn. When we say ‘easier’, we mean in terms of how quickly you 
can go from being a JavaScript novice to someone who can actually make a living writing professional, 
high quality JavaScript code. So, in that sense, it’s more accessible than some other languages like C and Java.
\n &nbsp;\n
----
\n &nbsp;\n
## Usecase
1. **Websites** - JavaScript lets you add behavior to the web page where the page responds to actions without loading 
a new page to request processing. It enables the website to interact with visitors and execute complex actions.
\n &nbsp;\n
2. **Web Applications** - As browsers and personal computers have continued to improve, JavaScript gained the ability to create 
robust web applications. Consider applications like Google Maps. If you want to explore a map in 
Google Maps, all you have to do is click and drag with the mouse. You will see the part of the map 
that is less detailed and then fills itself in. That’s the work of JavaScript behind the scene.
\n &nbsp;\n
3. **Presentations** - A very popular use of JavaScript is to create presentations as websites. Using the Reveal.js framework, 
this becomes really easy if you are familiar with HTML and CSS.
\n &nbsp;\n
4. **Server Applications** - With the advent of Node.js a few years ago, JavaScript made its way from the browser into the server. 
Since then Node is adopted by major companies such as Wal-Mart, as a key part of back end infrastructure.
\n &nbsp;\n
5. **Web Servers** - You can create much more robust servers using Node or the standard server application framework Express.js. 
Many of the previously mentioned Nodes are actually built using MEAN stack (Mongo Express Angular Node) 
of which Express is the key component.
\n &nbsp;\n
6. **Games** - While the browser hasn’t been the traditional games platform in the past, recently it has become 
robust for games. Additionally, with the addition of HTML5 canvas, the level of complexity that is 
possible in the browser-based games has increased exponentially. There are even browser 
games that teach us programming.
\n &nbsp;\n
7. **Art** - One of the new features of HTML5 specification is the canvas element, which allows the browser to 
render three-dimensional spaces. This helps to open the browser as a new source for digital art projects.
\n &nbsp;\n
8. **Smartwatch Apps** - Popular smartwatch maker Pebble has created Pebble.js, a small JavaScript framework that allows a 
developer to create an application for the Pebble watches in JavaScript.
\n &nbsp;\n
9. **Mobile Apps** - One of the most powerful things you can do with JavaScript is to build an application for non-web contexts.
That’s the other way of saying that you can make apps for things that are aren’t on the internet.
\n &nbsp;\n
For example – Mobile devices are now the most popular way to access the internet. What this means is all of 
the websites should be responsive. The catch is that the mobile app comes in two major applications, Apple and Android. 
And those applications are written in completely different languages.
\n &nbsp;\n
----
\n &nbsp;\n
## Real world example
1. **web build using javascript** - https://js-beginners.github.io/filter-project/
2. **web build using javascript** - https://js-beginners.github.io/course-form-oop-project/
3. **web build using javascript** - https://webix.com/demos/
`;
