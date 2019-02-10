import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

ScatterJS.plugins(new ScatterEOS());

const network = ScatterJS.Network.fromJson({
  blockchain: 'eos',
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host: 'nodes.get-scatter.com',
  port: 443,
  protocol: 'https'
});

async function scatterConnect(appName, amount, recipientName, memo) {
  const connected = await ScatterJS.connect(appName, {network});
  if (!connected) {
    return console.error('no scatter');
  }

  const eos = ScatterJS.eos(network, Eos, {
    expireInSeconds: 3600
  });
  const id = await ScatterJS.login();
  if (!id) {
    return console.error('no identity');
  }

  const account = ScatterJS.account('eos');
  const options = {authorization: [`${account.name}@${account.authority}`]};

  try {
    const resp = await eos.transfer(account.name, recipientName, `${amount} EOS`, memo, options);
    console.log(resp);
    return resp;
  } catch (e) {
    console.error('failed to scatterConnect eos.transfer: ', e);
  }
}

window.__iopayScatterConnect = scatterConnect;
