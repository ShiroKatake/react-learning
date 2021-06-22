_Project Start Date: 21/06/2021_

# Introduction

I'm currently a 4th year student studying a double major in comp sci and game design, and soon I'll need to find myself an internship.

As of right now, doing game dev doesn't seem like the best choice for my long term career, so I'm considering web dev as another option I can go down.

I've just applied for a web dev internship, and I realized React.js is a popular framework that a lot of places use in their work, yet I don't know anything about it. All this time I've only been building web apps "raw", and it seems so inefficient now that I've got exposed to the kind of stuffs React can do.

So, I'm doing this partly because I wanna prepare myself for the web dev internship in case I do get it, but I also wanna expand my skills and knowledge as a web dev in general.

And so, this is the start of my React.js learning journey. From here down will be a log of questions, answers and discoveries that I've noted down along the way.

# Study Log

Day 1: 21/06/2021

## **Lesson 0: About React**

### **Resources:**

- [Traversy Media: React JS Crash Course 2021](https://youtu.be/DLX62G4lc44?t=384)
- [C#Corner - What And Why React.js](https://www.c-sharpcorner.com/article/what-and-why-reactjs/)

### **Notes:**

This is basically coding in C# for Unity.

- There is a component system of a sort. Eg. You can have a 'Header' component, a 'Body', and a 'Footer' component, each being a separate script on their own, and can be modular (you can choose to have or not to have them in the app, or even pass them as parameters).
- There seems to also be a central location, like a `main()` function (looks like it's `<App />` for React) where everything falls into place.
- `return` seems to be the "renderer" for the web app.
- There seems to also be a "central" renderer as well:

```js
reactDOM.render(<App />, document.getElementById("root"));
```

Conclusion: This is **so much more efficient** since I've always been building web apps "manually", which meant having to deal with only a massively confusing tree of nested tags. Whereas this allows me to break it down into an easier-to-understand structure. This might also be faster than typing the tags out manually too?

_Apparently,_ React.js is also:

- [ ] Easy to learn
- [ ] Performant
- [ ] "Super easy to test"
- [ ] "Super reusable (in terms of code)"

I'll keep these things in mind as I'm going through this to see if these are true or not

---

## **Lesson 1: Installing React**

### **Resources:**

- [Traversy Media: React JS Crash Course 2021](https://youtu.be/w7ejDZ8SWv8?t=757)
- [MOSH: React JS - React Tutorial for Beginners](https://youtu.be/Ke90Tje7VS0?t=348)

### **Notes:**

- This is done via command prompt.
- The videos I watched recommended to install it in the project folder, not in like `C:/Programs` or anything "global"
  - This makes it seems like the installing process needs to be repeated for every new project.
  - This is less than ideal for me since I'll be making _many_ web apps, which might turn into many separate projects.

### **Questions:**

> :question: **Q1**: Can I just make a "default" project with this installed and just copy pasta every time I make a new project?

:thinking: **Theory**: It seems faster that way, though I guess the downside is it won't be 100% up to date if I make a new project say 3 months down the line for example.

> :question: **Q2**: What about putting every React-based projects inside a "master" folder called something like `React Web Apps`?

:thinking: **Theory**: This might not work in a professional environment where each project needs to be kept separate (I actually don't know why but I feel like it's a good idea), but it might work for my purpose cuz it might save lots of time from having to reinstall pretty much the same package for every.single.project that I'll be making pretty much rapidly.

**Discoveries:**

- After trying to compile HelloWorld for Lesson 2, it looks like you'd have to reinstall it for every project. Command Prompt is complaining about not being able to find `index.js`, which there can only be 1 in `src` folder, but I need to have multiple for each project.
- Exceeeept, [this part](https://youtu.be/DLX62G4lc44?t=1783) says I can. So I'm gonna try it (Update: **IT WORKED**)
  - Putting `index.js` in the `src` folder made this modular thing so much more apparent. If I wanna test a project, just pass that project's "main" function in the renderer statement _(React is so powerful)_.
  - Downside to this is, I can't stick to the convention of naming the self-enclosing tag for the main renderer the same name as its path, because every "main" script for every project would be named `App`

---

## **Lesson 2: Hello World**

### **Notes:**

- Reminder to always do this before writing anything:

```js
import React from "react";
import ReactDOM from "react-dom";
```

- To do the main render, do:

```js
reactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
```

- The html-like tags are actually in JSX
- Rules for JSX tags:

> There can only ever be 1 enclosing tag. If you wanna have multiple adjacent you'd need to enclose it in a `<div>` tag. Example:

```html
<div>
  <h1>Hello World</h1>
  <p>This is a paragraph</p>
</div>
```

- Do `npm start `in the `src` folder to start compiling.
- Do `ctrl + C` to stop.

**Questions:**

> :question: **Q3**: I wanna know where this `'root'` is. It's probably not important to know, but when I have time to come back I wanna check this.

---

## **Lesson 3: Implementing Components**

### **Resources:**

[Traversy Media: React JS Crash Course 2021](https://youtu.be/DLX62G4lc44?t=2107)

### **Notes:**

- Always have a folder named `components` that contains all the component scripts.
- Always also write `export default [FunctionName]` for every component file.
- Always also also have an `App.js` file for a main function.
- Remember to import the components before using it.

---

Day 2: 22/06/2021

## **Exercise 1: Making a Todo list**

---

## **Lesson 4: Styling with React**

### **Resources:**

[Traversy Media: React JS Crash Course 2021](https://youtu.be/DLX62G4lc44?t=3051)

### **Notes:**

- Where you'd normally use `class` for an html tag (ie. `<div class="something"`>), replace it with `className`.
- Right now, just worry about doing this for the React elements (html-like tags). Don't worry about the components just yet.
- Everything you'd normally do in css is kept the same.

---

## **Lesson 5: Javascript in JSX**

### **Resources:**

[Traversy Media: React JS Crash Course 2021](https://youtu.be/DLX62G4lc44?t=3495)

### **Notes:**

- If you wanna do Js stuffs in the middle of a JSX statement, just put `{ }` around it.

Eg.

```html
<h1>Hello {fName + " " + lName}!</h1>
```
