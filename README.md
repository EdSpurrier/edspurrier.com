# React MFE Host App BoilerPlate - [MFE] MicroFrontEnd 

This is the host application BoilerPlate for the Micro FrontEnds


## Frameworks Used

- SlaydTheme [Custom NPM Theme](https://www.npmjs.com/package/slaydtheme)
- ReactJS (18)
- Module Federation
- Styled-Components
- SVGR [SVG]
- Immer - [State-Tree-Modification](https://www.npmjs.com/package/immer)
- Zustand - [Global-State-Management](https://www.npmjs.com/package/zustand)

---

## State Store
```
exposes: {
    "./hostStore": "./src/state/hostStore",
    "./userStore": "./src/state/userStore",
},
```
>   ---
>   **`hostStore:`**
>   > **pageTitle**: `string` - *shows in the Main Navigation Bar*\
>   > **currentProjectId**: `null` - (*If null then Configurator option is unable to be opened*)
>   > **mainNavigation**: `Object`\
>   > {
>   > > **links**: `array`
>   > > ```
>   > > {
>   > >     label: 'Portfolio',
>   > >     icon: <IconComponent />,
>   > >     route: routePaths.portfolio,
>   > >     allowed: true,
>   > > }
>   > >```
>   > }
>   ---
>   **`userStore:`**
>   
>   > **preferences**: `Object`\
>   > {
>   > > **darkMode**: `boolean`
>   >
>   > }
>   ---

  
---

## Environment Variables
Setup `.env`

```
DEVMODE=true // This activates devmode tools
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Project Structure

### Pages `src/Pages`
Local project pages
- Welcome
- NotFound


### Component `src/components`

A component is a building block of a user interface in React.\
Components can have their own state, props, and lifecycle methods, and they can be rendered to the DOM.
Components can be composed of other components.

### Module `src/modules`

A module is a self-contained unit of code that can contain one or more components or other utility functions.\
Modules are used to organize and encapsulate related functionality, making it easier to manage and reuse code.

