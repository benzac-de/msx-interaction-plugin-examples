# Media Station X - Interaction Plugin Examples
This project contains examples of how you can use the **Media Station X** application and the corresponding **Interaction Plugin** interface to create an interactive and highly customized media client.

## Documentation Links
* Media Station X: https://msx.benzac.de/info/
* Interaction Plugin: https://msx.benzac.de/wiki/index.php?title=Interaction_Plugin

## Installing
```
npm install
```

## Testing on local dev server
```
npm run start
```
By default, the index page is available under: http://localhost:1234/index.html

### Testing in browser
http://msx.benzac.de/?start=menu:request:interaction:init@http://localhost:1234/index.html

## Building for deployment
```
npm run build
```

## Deploying on local server
```
npm install --global http-server
http-server ./dist --cors
```
By default, the index page is available under: http://localhost:8080/index.html

### Testing in browser
http://msx.benzac.de/?start=menu:request:interaction:init@http://localhost:8080/index.html

### Testing on TV device
* Copy folder `./src/msx` to `./dist/msx`
* Install and launch Media Station X application on TV device
* Navigate to Settings -> Start Parameter -> Setup
* Enter IP address and port of your local server (e.g. `192.168.0.10:8080`)
* Complete setup

## Example Screenshot
![Interaction Plugin Test](https://msx.benzac.de/info/img/github1.png)

## Hosted Example
http://msx.benzac.de/?start=menu:request:interaction:init@http://msx.benzac.de/github/msx-interaction-plugin-examples/index.html
