# TestCafe UI Dashboard

## Setup
```
npm i
```

## Running / Watch
```
npm start 
```

Wait for "✨  Built in 30.98s." 
Then go to url specified in console

## Issues
- "Uncaught ReferenceError: parcelRequire is not defined" console error - "Fix soon" https://github.com/parcel-bundler/parcel/issues/1401 :
  - " at parcelRequire.hMWN" if via `parcel build` (nothing served).
  - Not an issue if `parcel watch`