// @flow
import config from 'config';
import process from 'global/process';
import {Server} from 'onefx/lib/server';
import {setModel} from '../model';
import {setMiddleware} from './middleware';
import {setServerRoutes} from './server-routes';

import {Api, JsonRpc, RpcError} from 'eosjs';
import JsSignatureProvider from 'eosjs/dist/eosjs-jssig'; // development only
const fetch = require('node-fetch'); // node only; not needed in browsers
const {TextDecoder, TextEncoder} = require('text-encoding'); // node, IE11 and IE Edge Browsers

export async function startServer() {
  const server = new Server(config);
  setMiddleware(server);
  setModel(server);
  setServerRoutes(server);




  // eslint-disable-next-line no-process-env,no-undef
  const port = process.env.PORT || config.get('server.port');
  server.listen(port);
  return server;
}

