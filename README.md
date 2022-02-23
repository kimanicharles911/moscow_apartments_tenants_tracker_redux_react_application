
<h1 align="center"><a href="https://moscowapartmentstenantsreduxreact.netlify.app/" target="_blank">🌐 Moscow Apartments Tenants Tracker Redux React</a></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kimanicharles911/emmethub_nodejs_modules/blob/master/LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  [![Netlify Status](https://api.netlify.com/api/v1/badges/2686816d-069a-4716-aaab-a1da06dc39b0/deploy-status)](https://app.netlify.com/sites/moscowapartmentstenantsreduxreact/deploys)
</p>

> This is the Repository of a Web App used to enable tracking information about Tenants of Moscow Apartments by presenting their data to the Agents of the Apartment. One can update the information about any tenant. It is built using Redux, Redux-Thunk, React, React-Bootstrap, Bootstrap and the axios http client.

## Deployed at
* https://moscowapartmentstenantsreduxreact.netlify.app/

***

#### Setup/Installation Requirements
##### Install Dependencies

```
npm install
```

##### Run React Development Server

```
npm run start
```

##### To Build for Production

```
npm run build
Know how to host at heroku.com - https://dev.to/destrodevshow/how-to-deploy-react-app-to-heroku-in-5-minutes-3dni

heroku login
git add . && git commit -m"your commit message" && git push heroku master
```

## How It Was Built

#### Third Party APIs Used

| HTTP method      |   EndPoint   |   Public Access   |   Example   |
| ---- |:---- |:---- |:---- |
| GET     | /users    |  TRUE    |  https://ti-react-test.herokuapp.com/users    |
| GET     | /api/data?limit=50&quality=0    |  TRUE    |  https://tinyfac.es/api/data?limit=50&quality=0    |
| PATCH     | /users/{id}    |  TRUE    |  Find example in src/components/modals/EditModalComponent.jsx    |

##### Create React App
```sh
npx create-react-app
```
```sh
npm i --save bootstrap react-bootstrap @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @popperjs/core axios redux react-redux redux-thunk
```
##### Dependencies
* Bootstrap
* React Bootstrap
* fortawesome
* font-awesome
* Axios
* PopperJS
* Redux 
* React-redux 
* Redux-thunk

##### src folder structure
```
src/
  App.jsx
  App.css
  actions/
    index.js
  reducers/
    index.js
    tenantsReducer.js
    tinyFacesReducer.js
    updateTenantReducer.js
  components/
    index.jsx
    MainComponent.jsx
    MainComponent.css
    CardComponent.jsx
    CardComponent.css
    modals/
      EditModalComponent.jsx
      EditModalComponent.css
    index.js
  modules/
    index.js
    axiosErrorMessage.js
    axiosResponseMessage.js
  index.js
  index.css
  App.test.js
  reportWebVitals.js
  setupTests.js
```

## License and Copyright Information.

This project is MIT licensed see [my MIT LICENSE](https://github.com/kimanicharles911/moscow_apartments_tenants_tracker_redux_react_application/blob/master/LICENSE.txt) for details.<br />
Copyright © 2022 [Charles Kimani & Emmethub](https://github.com/kimanicharles911).

### Author

###### 👤 **Charles Kimani**

* Website: [author.emmethub.com](https://author.emmethub.com)
* Github: [@kimanicharles911](https://github.com/kimanicharles911)
* LinkedIn: [@kimanicharles](https://linkedin.com/in/kimanicharles)

#### Show your support

Give a ⭐️ if this project helped you!

***