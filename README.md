# msx-interaction-plugin-examples
Media Station X - Interaction Plugin Examples

## Documentation
http://msx.benzac.de/info/xp/?tab=InteractionPlugin

## Installing
```
$ npm install -d
```

## Testing on local server
```
$ npm run dev
```

### Test URLs
* http://localhost:1234/template.html
* http://localhost:1234/search.html
* http://localhost:1234/settings.html

### Test JSON
```
{
   "type": "list",
   "headline": "Interaction Plugin Test",
   "template": {
      "type": "separate",
      "layout": "0,0,2,4",
      "icon": "msx-white-soft:gamepad",
      "color": "msx-glass"
   },
   "items": [
      {
         "title": "Template",
         "action": "interaction:load:http://localhost:1234/template.html"
      },
      {
         "title": "Search Example",
         "action": "content:request:interaction:init@http://localhost:1234/search.html"
      },
      {
         "title": "Settings Example",
         "action": "content:request:interaction:init@http://localhost:1234/settings.html"
      },
      {
         "enumerate": false,
         "type": "button",
         "offset": "0,0,0,-1",
         "icon": "refresh",
         "label": "Reload",
         "action": "interaction:reload"
      },
      {
         "enumerate": false,
         "type": "button",
         "offset": "0,0,0,-1",
         "icon": "highlight-off",
         "label": "Unload",
         "action": "interaction:unload"
      }
   ]
}
```
### Test Instructions
* Open: http://msx.benzac.de/info/?tab=Demo
* Copy test JSON into text area
* Press Launch

## Building for deployment
```
$ npm run build
```