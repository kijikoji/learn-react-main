1. What is a React component?
   a function that return jsx to be rendered in a root

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

the my in myComponent needs to be capitalized. the "'" single quote won't compile properly

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

heard() in the root.render() should be writen in the more html like convention of <Header />
