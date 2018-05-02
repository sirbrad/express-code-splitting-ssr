import express from "express"
import path from "path"
import React from "react";
import { renderToString } from "react-dom/server";
import Loadable from 'react-loadable';
import App from "./client/App";
import manifest from "./dist/manifest";
import { getBundles } from 'react-loadable/webpack'
import stats from './dist/react-loadable.json';

const app = express()

const html = (markup, bundles) => {
  console.log(bundles)
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="/client/runtime~main.bundle.js"></script>
        <script src="/client/vendors.bundle.js"></script>
        ${bundles.map(bundle => {
          return `<script src="/client/${bundle.file}"></script>`
        }).join('\n')}
        <script src="/client/main.bundle.js"></script>
      </body>
    </html>
  `)
}

app.use(express.static('dist'))
app.get('/', (req, res) => {
  let modules = [];
  const markup = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  )

  const bundles = getBundles(stats, modules);

  res.end(html(markup, bundles))
})

Loadable.preloadAll().then(() => {
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
}).catch(err => {
  console.log(err);
});
