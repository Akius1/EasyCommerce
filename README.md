# Rayda Sales Auction

This project is a sample UI sales auction

## Tools
This application was built:

1. React : is an open-source JavaScript-based UI library developed and maintained by Facebook. Although React is a library rather than a framework, it’s very popular and widely used in web development.
gateways and their associated devices.

2. Material UI : is an open-source React UI library for building React applications that follow Google’s guidelines for creating components.

3. Typescript: TypeScript is a superset of JavaScript. In brief, TypeScript adds optional types to JavaScript. This allows the TypeScript compiler to perform static type checking during development.

I combine React and Typescript in this project because, it makes frontend development easier and allowed me to write predictable, error-free web applications. Since TypeScript performs static type checking during development, it can help a developer catch potential errors that may cause application to crash.


### Minimizing Material-UI Bundle Size with Tree Shaking

The MUI bundle size is very critical.
The Material UI development bundles contain the full library which can lead to slower startup times. So to abate this, I reconfigure babel plugin with create react app, by installing to additional package, react-app-rewired and customize-cra and some configuration which can be seen in, config-overrides.js file, and .babelrc file on the root folder of the app.

## Getting Started

Clone repository : https://github.com/Akius1/EasyCommerce
Install depencies : npm install
Start the application : npm run start

### Screenshot

![alt text](https://github.com/Akius1/EasyCommerce/blob/main/src/Assets/images/image2.jpg?raw=true)
![alt text](https://github.com/Akius1/EasyCommerce/blob/main/src/Assets/images/image3.jpg?raw=true)