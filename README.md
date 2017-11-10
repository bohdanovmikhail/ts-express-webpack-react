TS Express Webpack React Boilerplate
====================================

Powerful React boilerplate based in TypeScript and running in express/webpack environment.

### ⚠️⚠️⚠️ This Is Experimental and Incomplete! ⚠️⚠️⚠️

This is **not a good starting point for people learning React.**  
It’s experimental and completely lacks any production features.

**Do not use this as an actual project boilerplate!**  
If you’re just getting started with React, **use [Create React App](https://github.com/facebookincubator/create-react-app) instead.**

### Usage

```
git clone https://github.com/gaearon/react-hot-boilerplate.git
cd react-hot-boilerplate/
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Missing Features

This boilerplate is purposefully simple to show the minimal configuration for React Hot Loader. For a real project, you'll want to add a separate config for production with hot reloading disabled and minification enabled. You'll also want to add a router, styles and maybe combine dev server with an existing server. This is out of scope of this boilerplate, but you may want to look into [other starter kits](https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#starter-kits).

### WebStorm

Because the WebStorm IDE uses "safe writes" by default, Webpack's file-watcher won't recognize file changes, so hot-loading won't work. To fix this, disable "safe write" in WebStorm.

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping [@dan_abramov](https://twitter.com/dan_abramov) on Twitter or #reactjs (`chat.freenode.net/reactjs`) on IRC
