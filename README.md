# neutrino-preset-wbtech-vue
`neutrino-preset-wbtech-vue` is a Neutrino preset that supports django project layout to build web app with vue components.  
Extends from `neutrino-preset-airbnb-base`, `neutrino-preset-vue`, `neutrino-preset-vue` and setup webpack `output.publickPath = '/static/build'`

## Installation

neutrino-preset-wbtech-vue can be installed via the Yarn or npm clients. Inside your project, make sure neutrino and neutrino-preset-wbtech-vue are development dependencies. You will also need Vue for actual Vue development.

### Yarn

`❯ yarn add --dev neutrino-preset-wbtech-vue`

## Usage

In your `package.json`

```
"neutrino": {
  "use": [
    "neutrino-preset-wbtech-vue"
  ]
}
```
