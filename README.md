# eos-name-verify

Small module to verify EOS Standard Account Names.

https://developers.eos.io/eosio-cpp/docs/naming-conventions#section-standard-account-names


## Usage

```js
const isValidAccount = require('eos-name-verify')

isValidAccount('foo') // false
isValidAccount('test@faucet1') // false
isValidAccount('testfaucet12') // true
```
