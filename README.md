# EIS-Coding-Workshop-101
**Workshop C: Web Basics** (11 April 2025)

Welcome! 👋  
This repository contains materials and code samples for the <br>
**[EIS Coding Workshop 101](https://uow.swoogo.com/eis-students/8149586)** hosted by 
**[UOW EIS](https://www.uow.edu.au/engineering-information-sciences/)** and **[UOW WiSTEM](https://www.linkedin.com/company/uowwistem/posts/?feedView=all)**.

## What's Inside
- Workshop slides (PDF)
- Sample code snippets
- Practice activities
- Helpful links & references

  
[web-basics-cheatsheet.md](https://github.com/user-attachments/files/19687577/web-basics-cheatsheet.md)  
[workshop C web-basics-cheatsheet.pdf](https://github.com/user-attachments/files/19687581/workshop.C.web-basics-cheatsheet.pdf)  
[workshop C mini-project-cheatsheet.pdf](https://github.com/user-attachments/files/19687583/workshop.C.mini-project-cheatsheet.pdf)  
[workshop C web-basics-slide_Yenny and Patrick.pptx](https://github.com/user-attachments/files/19722674/Workshop.C.-.2025.web-basics.Yenny.and.Patrick.pptx)



# Web Development Basics Cheatsheet

## HTML Basics

### Basic Structure

| Element           | Description                                  |
| ----------------- | -------------------------------------------- |
| `<!DOCTYPE html>` | Declares the document type                   |
| `<html>`          | Root element of the HTML page                |
| `<head>`          | Contains meta-information about the document |
| `<body>`          | Contains the visible content of the page     |

### Common HTML Tags

#### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### Paragraphs

```html
<p>This is a paragraph.</p>
```

#### Links

```html
<a href="https://www.example.com">This is a link</a>
```

#### Images

```html
<img src="image.jpg" alt="Description of image" />
```

#### Lists

**Ordered List (numbered)**

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

**Unordered List (bulleted)**

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

#### Semantic Elements

```html
<header>Site or section header</header>
<nav>Navigation links</nav>
<main>Main content of the page</main>
<section>A section of content</section>
<article>An independent article</article>
<footer>Site or section footer</footer>
```

## CSS Basics

### Types of CSS

| Type         | Description                              | Example                                                  |
| ------------ | ---------------------------------------- | -------------------------------------------------------- |
| Inline CSS   | Styles applied directly to HTML elements | `<h3 style="color: blue;">Blue heading</h3>`             |
| Internal CSS | Styles defined in `<head>` section       | `<head><style>h3 {color: green;}</style></head>`         |
| External CSS | Styles in separate .css file             | `<head><link rel="stylesheet" href="styles.css"></head>` |

### Basic CSS Properties

#### Text and Color

```css
/* Text color */
p {
  color: #333;
}

/* Background color */
body {
  background-color: #f0f8ff;
}

/* Font styling */
h1 {
  font-size: 2.5em;
  font-weight: bold;
  font-family: "Arial", sans-serif;
}
```

#### Box Model

```css
div {
  /* Spacing */
  margin: 10px; /* Space outside the element */
  padding: 15px; /* Space inside the element */

  /* Borders */
  border: 1px solid black;
  border-radius: 5px; /* Rounded corners */

  /* Size */
  width: 300px;
  height: 200px;
}
```

#### Flexbox (Layout)

```css
.container {
  display: flex;
  justify-content: center; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
  flex-direction: row; /* or column */
}
```

#### Media Queries

```css
/* Responsive design for screens smaller than 600px */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

## JavaScript Basics

### Variables and Data Types

#### Declaring Variables

```javascript
// Modern way to declare variables
let name = "John"; // Can be reassigned
const age = 25; // Cannot be reassigned
```

#### Common Data Types

| Type      | Example                                     |
| --------- | ------------------------------------------- |
| String    | `let text = "Hello World";`                 |
| Number    | `let count = 42;` <br> `let price = 19.99;` |
| Boolean   | `let isActive = true;`                      |
| Array     | `let colors = ["red", "green", "blue"];`    |
| Object    | `let person = {name: "John", age: 30};`     |
| Undefined | `let result;`                               |
| Null      | `let empty = null;`                         |

### Basic Operators

| Operator | Description         | Example                    |
| -------- | ------------------- | -------------------------- |
| `+`      | Addition            | `let sum = 5 + 3;`         |
| `-`      | Subtraction         | `let difference = 10 - 5;` |
| `*`      | Multiplication      | `let product = 4 * 2;`     |
| `/`      | Division            | `let quotient = 20 / 4;`   |
| `%`      | Modulus (remainder) | `let remainder = 10 % 3;`  |
| `++`     | Increment           | `count++;`                 |
| `--`     | Decrement           | `count--;`                 |

### Control Structures

#### Conditionals

```javascript
// If statement
if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}
```

#### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Functions

```javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function call
let message = greet("Alice");
console.log(message); // Outputs: Hello, Alice!

// Arrow function (modern syntax)
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Outputs: 6
```

### DOM Manipulation

```javascript
// Selecting elements
const heading = document.getElementById("title");
const paragraphs = document.getElementsByTagName("p");
const buttons = document.querySelectorAll(".btn");

// Changing content
heading.textContent = "New Title";
heading.innerHTML = "<span>New Title</span>";

// Changing styles
heading.style.color = "blue";
heading.style.fontSize = "24px";

// Adding event listeners
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

## Putting It All Together

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Page</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Welcome to My Site</h1>
    </header>
    <main>
      <p>This is my first web page!</p>
      <button id="colorButton">Change Color</button>
    </main>
    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

### CSS File (styles.css)

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

header,
footer {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

main {
  margin: 20px 0;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
}
```

### JavaScript File (script.js)

```javascript
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const colorButton = document.getElementById("colorButton");

  // Add click event listener
  colorButton.addEventListener("click", function () {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Change the background color
    document.body.style.backgroundColor = randomColor;
  });
});
```
