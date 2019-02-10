import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
  blockchain:'eos',
  chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host:'nodes.get-scatter.com',
  port:443,
  protocol:'https'
});

ScatterJS.connect('YourAppName', {network}).then(connected => {
  if(!connected) return console.error('no scatter');

  const eos = ScatterJS.eos(network, Eos);

  ScatterJS.login().then(id => {
    if(!id) return console.error('no identity');
    const account = ScatterJS.account('eos');
    const options = {authorization:[`${account.name}@${account.authority}`]};
    eos.transfer(account.name, 'safetransfer', '0.0001 EOS', account.name, options).then(res => {
      console.log('sent: ', res);
    }).catch(err => {
      console.error('error: ', err);
    });
  });
});
