// @flow
import test from 'ava';

import {JsonRpc} from 'eosjs';
// import {RpcError, Api} from 'eosjs';
// import JsSignatureProvider from 'eosjs/dist/eosjs-jssig'; // development only
const fetch = require('node-fetch'); // node only; not needed in browsers
// const {TextDecoder, TextEncoder} = require('text-encoding'); // node, IE11 and IE Edge Browsers


test('EOS get account', async t => {
  type ActionsHistory = {
    actions: Array<{
      action_trace: {
        receipt: {},
        act: {
          account: string,
          name: string,
          data: {
            from: string,
            to: string,
            quantity: string,
            memo: string
          },
        },
        "block_num": number,
        "block_time": string,
      },
    }>,
  }

  const rpc = new JsonRpc('https://eos.greymass.com', {fetch});
  // const defaultPrivateKey = '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr'; // useraaaaaaaa
  // const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
  // const api = new Api({rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder()});

  // 获取主网信息
  //   const info = await rpc.get_info();
  //   console.log(info);

  // 获取账号tmd111111111的信息
  const accountInfo = await rpc.get_account('qweasdtuyq12');
  console.log('accountInfo');
  console.dir(accountInfo);

  // 获取账号tmd111111111的资产
  const balance = await rpc.get_currency_balance('eosio.token', 'qweasdtuyq12');
  console.log('balance');
  console.dir(balance);

  // 获取账号操作历史
  const actionHistory: ActionsHistory = await rpc.history_get_actions('qweasdtuyq12', -1, -100);
  console.log(JSON.stringify(actionHistory, null, 2));
  t.truthy(actionHistory.actions[0].action_trace.block_num);
});
