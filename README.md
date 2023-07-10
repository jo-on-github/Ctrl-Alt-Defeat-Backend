# Ctrl-Alt-Defeat-Backend

This project was delivered in five weeks, in a team of six, during my time on the School of Code bootcamp.

<h2> More about the project </h2>
From ideating, researching, planning and building to deployment - we used a MERN stack to create a React app that connects travelers to locals in the area they are travelling to, giving users access to guides created that match their interests. <br>


![image](https://github.com/jo-on-github/Ctrl-Alt-Defeat-Backend/assets/125663254/3e1b013c-c40f-408a-87a0-01b89a1d7ec6)

<h2> Tech stack </h2>
<li>React.js</li>
<li>Express.js</li>
<li>Node.js</li>
<li>MongoDB</li>
<li>JSX</li>

<li>Testing on Jest</li>
<li>Frontend deployed on Netlify</li>
<li>Backend deployed on Render</li>


<h2> How does it work? </h2>
Developed using a MERN stack (MongoDB, Express, React and Node.js), here's an overview of how it works:

1. User types in a search:
The user interacts with the front-end (React.js) by typing a search query into a form or input field.

2. Fetch request to the backend server (hosted on Render):
The front-end sends an HTTP request to the backend server using a fetch request using the search query entered by the user.

3. Backend server handles the request and interacts with the MongoDB database:
The backend server (Node.js with Express.js) receives the HTTP request from the front-end. It processes the request, validates the input, executes the search logic, and interacts with the MongoDB database to retrieve the relevant data from the database based on the search query.

4. Data is pulled down as a JSON object and passed as props to the front-end (hosted on Netlify):
Once the backend server has retrieved the data from the database, it constructs a JSON object containing the search results. This JSON object is sent back as the response to the front-end request.

5. The HTTP response stringifies the JSON data and is parsed back as a JavaScript object:
On the front-end, the fetch request receives the HTTP response from the backend. The JSON response is converted from a string to a JavaScript object.

6. The JavaScript object is rendered to the screen:
Finally, the JavaScript object containing the search results is rendered on the screen using React.js.
