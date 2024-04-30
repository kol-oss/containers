=======================
Simple web app (nodejs)
=======================

This is a my own project for the third laboratory on containerization.
This project is written in `NodeJS <https://www.nodejs.org/>`_ programming
platform and uses `Fastify <https://fastify.dev/>`_ framework.

How to run
==========

As the project is written in NodeJS, you will need NodeJS and NPM installed.
Recommended version of NodeJS is 21.5.0 and above.

Firstly, install project dependencies:

.. code-block:: console

   solo@falcon ~/containers/nodejs $ npm install
   added 192 packages, and audited 193 packages in 2s

    42 packages are looking for funding
      run `npm fund` for details

    found 0 vulnerabilities

As the dependencies are installed you can start the project using the following
command:

.. code-block:: console

   solo@falcon ~/containers/nodejs $ npm run build

    > nodejs@1.0.0 build
    > tsc -p tsconfig.json

    solo@falcon ~/containers/nodejs $ npm run start

    > nodejs@1.0.0 start
    > node index.js

    {"level":30,"time":1714507094265,"pid":3656,"hostname":"DESKTOP-JEGQLMV","msg":"Server listening at http://[::1]:8080"}
    {"level":30,"time":1714507094267,"pid":3656,"hostname":"DESKTOP-JEGQLMV","msg":"Server listening at http://127.0.0.1:8080"}
    Server is running on http://[::1]:8080

Open http://127.0.0.1:8080/products in your browser and see the request result.
