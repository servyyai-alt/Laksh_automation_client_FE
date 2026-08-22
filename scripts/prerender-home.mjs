import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import React, { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientRoot = path.resolve(__dirname, '..');
const distDir = path.join(clientRoot, 'dist');
const htmlPath = path.join(distDir, 'index.html');

const vite = await createServer({
  root: clientRoot,
  appType: 'custom',
  logLevel: 'error',
  server: {
    middlewareMode: true
  }
});

try {
  const HomeModule = await vite.ssrLoadModule('/src/pages/Home.jsx');
  const Home = HomeModule.default;
  const helmetContext = {};

  const appHtml = renderToString(
    createElement(
      HelmetProvider,
      { context: helmetContext },
      createElement(
        StaticRouter,
        { location: '/' },
        createElement(Home)
      )
    )
  );

  const helmet = helmetContext.helmet || {};
  const headTags = [
    helmet.title?.toString?.(),
    helmet.meta?.toString?.(),
    helmet.link?.toString?.(),
    helmet.script?.toString?.(),
    helmet.noscript?.toString?.(),
    helmet.style?.toString?.()
  ]
    .filter(Boolean)
    .join('\n');

  let html = await fs.readFile(htmlPath, 'utf8');

  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`
  );

  if (headTags) {
    html = html.replace('</head>', `${headTags}\n</head>`);
  }

  await fs.writeFile(htmlPath, html);

  console.log('Prerendered homepage written to dist/index.html');
} finally {
  await vite.close();
}
