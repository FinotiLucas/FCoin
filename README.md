<h4  align="center">

<img  src="./assets/logo.png"  width="250px"  /><br>

<b>FCoin a simple blockchain example</b> 

</h4>

---

## Features

* Proof-of-work algorithm
* Verify blockchain (to prevent tampering)
* Generate wallet (private/public key)
* Sign transactions
* Increase in mining difficulty

## Future Implementations

* Build a graphical interface for display the blockchain in VueJs

## Result of the Blockchain

``` javascript
[
  Block {
    /**
    *   This block is the Genesis Block !
    **/
    previousHash: '0',
    timestamp: NaN,
    transactions: [],
    nonce: 0,
    hash: 'ca908384d2d7596cfa56df2995d7a428cce36ff86dee254f6f9ee769f6cd9590'
  },
  Block {
    previousHash: 'ca908384d2d7596cfa56df2995d7a428cce36ff86dee254f6f9ee769f6cd9590',
    timestamp: 1588629030482,
    transactions: [ [Transaction], [Transaction] ],
    nonce: 21,
    hash: '0005b9d4b65bf98b6516f1914c679d89efe9e006996f3dcb8955087901da05a2'
  },
  Block {
    previousHash: '0005b9d4b65bf98b6516f1914c679d89efe9e006996f3dcb8955087901da05a2',
    timestamp: 1588629030494,
    transactions: [ [Transaction], [Transaction], [Transaction] ],
    nonce: 200,
    hash: '00261361b491f334b8a60db69984d011b4886c95aa8129d2d13deecd50b4f152'
  }
]
```

## 👍 Contribution

Want to contribute? Great!

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request


### License
----

MIT License

Copyright (c) 2020 Lucas Finoti

[See more about the license][LICENSE]

[LICENSE]: <https://github.com/FinotiLucas/FCoin/blob/master/LICENSE>