# qr_code_component
Challenge to create qr code component based on designs

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deploying to GitHub Pages

You can deploy this app to GitHub Pages by following these steps:

1. **Install `gh-pages` package**:  
   If you haven't already, you need to install the `gh-pages` package to easily deploy to GitHub Pages.
   `npm install --save gh-pages`

2. **Update `package.json`**:  
   In your `package.json`, add the `homepage` field with the URL of your GitHub Pages site:

   `"homepage": "https://<your-username>.github.io/<your-repository-name>"`

   For example:  
   `"homepage": "https://grantwake01.github.io/qr_code_component/"`

3. **Add Deploy Scripts**:  
   In your `package.json`, add the following scripts:


   `"scripts": {  
     "predeploy": "npm run build",  
     "deploy": "gh-pages -d build"  
   }`

   This ensures that before deploying, the app is built first, and then the `gh-pages` command deploys the build folder to GitHub Pages.

4. **Run the Deploy Command**:  
   Run the following command to deploy your app:

   `npm run deploy`

   This will build the app and push it to the `gh-pages` branch of your GitHub repository.

5. **Verify Deployment**:  
   After deployment, you can visit your app at:

   `https://<your-username>.github.io/<your-repository-name>`

   For example:  
   `https://grantwake01.github.io/qr_code_component/`

6. **GitHub Pages Settings**:  
   - Go to your GitHub repository.
   - Navigate to **Settings** > **Pages**.
   - Under **Source**, select the `gh-pages` branch and `/ (root)` folder.

Now, your app will be hosted on GitHub Pages!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
