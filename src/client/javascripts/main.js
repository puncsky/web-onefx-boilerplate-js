
import {Iotx, HttpProvider, utils} from 'iotex-client-js';
//
(async() => {
  const iotx = new Iotx(new HttpProvider('http://159.89.223.147:14004'),
    {walletProvider: new HttpProvider('https://iotexscan.io/api/wallet-core/')});
  const unlockedWallet = await iotx.accounts.add('ad6ebd8f2ba474a4fe131c40378f9f48241932cb22effb36feea76f558c875a240a6aa01');
  const receipt = await iotx.sendTransfer({
    amount: utils.toRau('0.5', 'Iotx'),
    sender: unlockedWallet.rawAddress,
    senderPubKey: unlockedWallet.publicKey,
    recipient: 'io1qyqsqqqqapqyp8md8w3d76x5qdrt275uyvv6530upe8cle',
    gasPrice: '0',
    gasLimit: 100000,
    payload: '6d61786f',
  });
  console.log('ballsdfjklasjdflasjdklfjas');
  console.log(receipt);
})();
