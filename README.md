# Toast5 - snappy and simple toasts
For react apps, comes with typescript support

### INSTALLATION
In any react app (react ^18.2.73, support for earlier versions will be added soon), from the root directory
```
npm i toast5
```

### BASIC USAGE
At the root directory of your application, or the last parent component that will be using using toasts, wrap the component with out hoc `withToast5`,
```typescript
import React from "react";

// hoc
import { withToast5 } from "toast5";

function App() {
  return <Child />;
}

// Wrap with custom hook
export default withToast5(App);
```

At any component or hook that is a child of the wrapped component, you can use toasts by using the `useToast5` hook,
```typescript
import { useToast5 } from "toast5";

export const Child = () => {
  const { addToast } = useToast5();

  // NOTE: toasts need to have unique messages
  return <button onClick={() => { addToast({message : 'Toast has been created!'}) }}/>;
}
```
![image](https://github.com/amey-kudari/toast5/assets/43315144/e6dbc091-0021-40cd-a799-10a51a87d76b)

You can also send different types of toast by using the optional `variant` field,
```typescript
import { useToast5, TOAST_VARIANTS }
addToast({
  message : 'Error, incorrect password. You have 2 attempts remaining after which you will be locked out of the account.',
  variant : TOAST_VARIANT.ERROR
})
```
![image](https://github.com/amey-kudari/toast5/assets/43315144/3190a1a1-f0aa-43ab-ba7e-17cdc59091ef)
```typescript
enum TOAST_VARIANTS = {
  INFO,
  ERROR,
  SUCCESS
}
```

To test out the package, use this [codesandbox/toast5-demo](https://codesandbox.io/p/devbox/xn4575?file=%2Fsrc%2FApp.tsx%3A2%2C33-2%2C47&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cluc4ys0i00062v6o1ktqjwsm%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cluc4ys0i00022v6oxc580sq7%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cluc4ys0i00042v6o6rwx8xim%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cluc4ys0i00052v6otiv8lzc6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cluc4ys0i00022v6oxc580sq7%2522%253A%257B%2522id%2522%253A%2522cluc4ys0i00022v6oxc580sq7%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cluc6gj3n00022v6o4khymrbm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A2%252C%2522startColumn%2522%253A33%252C%2522endLineNumber%2522%253A2%252C%2522endColumn%2522%253A47%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cluc6gj3n00022v6o4khymrbm%2522%257D%252C%2522cluc4ys0i00052v6otiv8lzc6%2522%253A%257B%2522id%2522%253A%2522cluc4ys0i00052v6otiv8lzc6%2522%252C%2522activeTabId%2522%253A%2522cluc52ubz005p2v6o25biqxse%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522cluc52ubz005p2v6o25biqxse%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522cluc4ys0i00042v6o6rwx8xim%2522%253A%257B%2522id%2522%253A%2522cluc4ys0i00042v6o6rwx8xim%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cluc4ys0i00032v6oywoi7ihp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cluc4ysgs000hd8f88az83ie8%2522%257D%252C%257B%2522id%2522%253A%2522cluc4zdph00e22v6oy7rvu6v3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cluc4zdpq000vd8f8b16ufaw7%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cluc4ys0i00032v6oywoi7ihp%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)


### ADVANCED USAGE
Refer to the docs (uploading soon) to modify the themes, duration or positioning of the toasts.


### Contributing
Refer to Contributing.md (uploading soon) to contribute to this package! do note, **the main objective is keeping the toasts easy to use, yet as efficient as possible**. 
