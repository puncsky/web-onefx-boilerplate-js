import test from 'ava';
import Web3 from 'web3';

test('eth web3', async t => {
  var web3 = new Web3('https://wallet.iotex.io/api-gateway/eth-testnet/');
  const resp = await web3.eth.getBalance('0x54CaC22507Ba7959F6680FDD2C6c793B680D8e0b');
  t.deepEqual(resp, '1000000000000000000');
});
