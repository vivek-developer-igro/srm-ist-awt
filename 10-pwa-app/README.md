## Steps to Deploy a React App on Netlify

### 1. Prepare Your React App

- Make sure Node.js and npm are installed on your system.
- Create a React app:

```
## Steps to Deploy a React App on Netlify

### 1. Prepare Your React App

- Make sure Node.js and npm are installed on your system.
- Create a React app:

```
npm create vite@latest
```

### 2. Build Your App

- Build the production files:

```
npm run build
```

This will generate a `build` directory containing the optimized site.


### 3. Three Deployment Methods

#### A. **Deploy via GitHub Integration**

- Push your React project to a GitHub repository.
- On Netlify dashboard:
    - Go to **Sites** > **Add new site** > **Import an existing project**.
    - Connect to GitHub and select your repository.
    - Set **Build command**: `npm run build`
    - Set **Publish directory**: `build`
- Click **Deploy site**.


#### B. **Manual Drag \& Drop**

- After building, go to Netlify dashboard.
- Click **Add New Site** > **Deploy manually**.
- Drag \& drop your `build` (or `dist` for TypeScript) folder into the upload area.
- Netlify will deploy and provide a public URL.


#### C. **Using Netlify CLI**

- Globally install Netlify CLI:

```
npm install netlify-cli -g
```

- In your project, run:

```
netlify init
npm run build
netlify deploy
```

    - Follow prompts to select the `build` directory and configure deploy settings.


### 4. Continuous Deployment Option (GitHub Integration)

- Any push to your selected branch triggers a build and redeployment.


### 5. Special Note for React Router

- For single page apps (SPA) using React Router, add a redirect rule so routes don’t break on reload:
    - Inside your `/public` folder, create a file called `_redirects` containing:

```
/* /index.html 200
```

    - Or, configure this in `netlify.toml`.


### 6. View Your Site

- After deployment, Netlify gives you a public subdomain: `https://<your-site-name>.netlify.app`.

***

**Tip:** You can always redeploy if your deployment fails and view detailed logs for errors.npx create-react-app my-app
cd my-app
```

- Test your app locally with:

```
npm start
```


### 2. Build Your App

- Build the production files:

```
npm run build
```

This will generate a `build` directory containing the optimized site.


### 3. Three Deployment Methods

#### A. **Deploy via GitHub Integration**

- Push your React project to a GitHub repository.
- On Netlify dashboard:
    - Go to **Sites** > **Add new site** > **Import an existing project**.
    - Connect to GitHub and select your repository.
    - Set **Build command**: `npm run build`
    - Set **Publish directory**: `build`
- Click **Deploy site**.[^5][^1][^2]


#### B. **Manual Drag \& Drop**

- After building, go to Netlify dashboard.
- Click **Add New Site** > **Deploy manually**.
- Drag \& drop your `build` (or `dist` for TypeScript) folder into the upload area.
- Netlify will deploy and provide a public URL.


#### C. **Using Netlify CLI**

- Globally install Netlify CLI:

```
npm install netlify-cli -g
```

- In your project, run:

```
netlify init
npm run build
netlify deploy
```

    - Follow prompts to select the `build` directory and configure deploy settings.


### 4. Continuous Deployment Option (GitHub Integration)

- Any push to your selected branch triggers a build and redeployment.


### 5. Special Note for React Router

- For single page apps (SPA) using React Router, add a redirect rule so routes don’t break on reload:
    - Inside your `/public` folder, create a file called `_redirects` containing:

```
/* /index.html 200
```

    - Or, configure this in `netlify.toml`.


### 6. View Your Site

- After deployment, Netlify gives you a public subdomain: `https://<your-site-name>.netlify.app`.

***

**Tip:** You can always redeploy if your deployment fails and view detailed logs for errors.
