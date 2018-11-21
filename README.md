## Pre-requisite
[Node](https://nodejs.org/en/)
[npm](https://www.npmjs.com/)
We are using node v8.9

## To run application
- nvm use (If you are using nvm to manage node version)
- npm install
- npm start (To start the application)
- Open http://localhost:3040 in browser

## About the app
- This is an app used to search albums and upvote them (logged-in users only).

## Where do we go from here?

- Its a simple app, like any other website. Will be converting it 
to a PWA compliant one by following the below steps. And on top of it
we will also implement

  - Push notification when any user upvotes
  - Upvoting option even when offline

### Step 1

- Service worker

  - Register service worker
  - Add service worker lifecycle events
  - Workbox

### Step 2

- App Shell

  - Pre-cache minimal assets required
  - Add noscript
  - Add offline indication
  
### Step 3

- Caching

  - Caching assets from cdn
  - Caching api responses

### Step 4

- Push notification

  - Fetch server identification (VAPID) key
  - Add subscribe action
  - Add listener to handle push message from server and show them via push notification
  - Add push notification click action to focus the app
  	
### Step 5

- Sync

  - Add sync handler
  - Sync on upvote
  	- Post message to service worker with upvoted item
  	- Perform upvote sync with server

### Step 6

- Manifest

  - Add manifest.json
  - Add splash screen (out of the box)
  
## Note

- Each step above is present inside a separate branch.
- Checkout the branches and start implementing the respective feature.
- Each branch has a solution folder for reference
- The final pwa compliant app is present in 'pwa' branch.
  

  	
