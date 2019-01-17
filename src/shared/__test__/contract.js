import {HttpProvider, Iotx} from 'iotex-client-js';

const ABI = [{
  constant: true,
  inputs: [{name: 'idx', type: 'uint256'}],
  name: 'getDesired',
  outputs: [{name: 'desired', type: 'uint256'}],
  payable: false,
  stateMutability: 'view',
  type: 'function',
}, {
  constant: false,
  inputs: [{name: 'idx', type: 'uint256'}, {name: 'reported', type: 'uint256'}],
  name: 'report',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  constant: false,
  inputs: [{name: 'idx', type: 'uint256'}, {name: 'desired', type: 'uint256'}],
  name: 'desire',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
}];
const contractAddress = 'io1qyqsqqqqzpacc2qh34j3sqwn56pc7vylnlkm6p66hm2d3q';

const provider = new HttpProvider('http://35.233.230.235:30100/');
const iotx = new Iotx(provider, {walletProvider: new HttpProvider('https://explorer-staging-nkn.herokuapp.com/api/wallet-core/')});

import test from 'ava';

test('contract read', async t => {
  const wallet = await iotx.accounts.add('e70ac2c91defbb162a0ce60d7a025db552fe56f71963d12de5f4cd365b3ad40c6fafff00');
  const contract = new iotx.Contract({abi: ABI, contractName: ':DeviceShadow', wallet});

  const resp = await contract
    .prepareMethods({
      contractAddress,
      gasLimit: 100000,
      gasPrice: '0',
      version: 1,
      amount: '0',
    })
    .getDesired(0);
  console.log(resp)
  t.truthy(resp);
});
