1. Where does React put all of the elements I create in JSX when I
   call `root.render()`?

as a child to the root that wass assigned at the createRoot function. In this case the root has the id "root" to find it.

2. What would show up in my console if I were to run this line of code:

```
console.log(<h1>Hello world!</h1>)
```

i belive you have to log a string or somthing that can be converted to a string. i dont think you can log a h1 element.

3. What's wrong with this code:

```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

reder() can only render one main element. the h1 and p element would need to be a child to a single element in order for it to compile correctly.

4. What does it mean for something to be "declarative" instead of "imperative"?
   if some thing is declarative you can tell it what to do and it'll do it. in imperative you give the instructions and it will execture it one after another.

5. What does it mean for something to be "composable"?
   it mean something can be made from smaller components that act individually, but when put together make the original item.
