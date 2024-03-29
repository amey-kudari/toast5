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

### ADVANCED USAGE
Refer to the docs (uploading soon) to modify the themes, duration or positioning of the toasts.


### Contributing
Refer to Contributing.md (uploading soon) to contribute to this package! do note, **the main objective is keeping the toasts easy to use, yet as efficient as possible**. 
