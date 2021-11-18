# Cluberare NFT MarketPlace(backend)

A Cluberare is Blockchain based NFT MarketPlace Dapp, where users can create NFT
Then they can buy and sale NFT on this platform. This is a backend of the Dapp.

## List of smart contracts

- ### Mintable smart contract [Link](https://rinkeby.etherscan.io/address/0xf9cc25b179e062914fbe508287f46f65d3511148#writeContract) :

  This smart contract are used to mint the NFTs.

  #### Functions

  mint

  ```bash
      tokenURI(string)
      _royality(uint256)

  ```

  burn

  ```bash
      tokenId(uint256)

  ```

  approve

  ```bash
      to(address)
      tokenId(uint256)
  ```

  safeTransferFrom

  ```bash
      from(address)
      to(address)
      tokenId(uint256)

  ```

  safeTransferFrom (with extra args)

  ```bash
      from(address)
      to(address)
      tokenId(uint256)
     _data(bytes)
  ```

  transferFrom

  ```bash
      from(address)
      to(address)
      tokenId(uint256)

  ```

  setApprovalForAll

  ```bash
     to (address)

     approved(bool)

  ```

  setContractUri

  ```bash
     contractURI(string)

  ```

  setTokenURIPrefix

  ```bash
     tokenURIPrefix(string)
  ```


    ```
    transferOwnership
    ```bash
      newOwner(address)
    ```
    renounceOwnership
    ```bash
      None
    ```

###### Read only functions

Checkout contract read only functions [Here](https://rinkeby.etherscan.io/address/0xf9cc25b179e062914fbe508287f46f65d3511148#readContract)

- #### Borker smart contract :

  This smart contract are used to buy and sell mintable NFTs with native currency only.

  #### Functions

  buy

  ```bash
      buy payableAmount (ether)
      tokenID (uint256)
      _mintableToken (address)

  ```

  bid

  ```bash

      bid payableAmount (ether)
      tokenID (uint256)
      _mintableToken (address)

  ```

  putOnSale

  ```bash
      tokenID (uint256)
      _startingPrice (uint256)
      _auctionType (uint256)
      _buyPrice (uint256)
      _duration (uint256)
      _mintableToken (address)

  ```

  putOffSale

  ```bash
      tokenID (uint256)
      _mintableToken (address)

  ```

  collect

  ```bash
      tokenID (uint256)
      _mintableToken (address)
  ```

  setBrokrage

  ```bash
    _brokerage (uint16)

  ```

  updatePrice

  ```bash
    tokenID (uint256)
   _mintableToken (address)
   _newPrice (uint256)
  ```

  withdraw

  ```bash
     None

  ```

  onERC721Recived

  ```bash
    address
    address
    uint256
    bytes
  ```

#### Read only functions

Checkout contract read only functions [Here](https://rinkeby.etherscan.io/address/0xf4A6C89e790f6E218808AE162279fb9180e76437#readContract)

- #### BorkerV2 smart contract[Link](https://rinkeby.etherscan.io/address/0x6A341599E362869cb87800fb0a8F3087cBF3A97f#writeContract) :
  This smart contract are used to buy and sell mintable NFTs with native currency and with ECR20 Tokens.

addERC20TokenPayment

```bash
    _erc20Token (address)
```

removeERC20TokenPayment

```bash
    _erc20Token (address)
```

buy

```bash
    buy payableAmount (ether)
    tokenID (uint256)
    _mintableToken (address)

```

bid

```bash

    bid payableAmount (ether)
    tokenID (uint256)
    _mintableToken (address)
    amount (uint256)

```

putOnSale

```bash
    tokenID (uint256)
    _startingPrice (uint256)
    _auctionType (uint256)
    _buyPrice (uint256)
    _startingTime (uint256)
    _closingTime (uint256)
    _mintableToken (address)
    _erc20Token (address)

```

putOffSale

```bash
    tokenID (uint256)
    _mintableToken (address)

```

collect

```bash
    tokenID (uint256)
    _mintableToken (address)
```

setBrokrage

```bash
  _brokerage (uint16)

```

setUpdatedClosingTime

```bash
  _updateTime (uint256)
```

updatePrice

```bash
  tokenID (uint256)
 _mintableToken (address)
 _newPrice (uint256)
 _erc20Token (address)
```

withdraw

```bash
   None

```

withdrawERC20

```bash
  _erc20Token (address)
```

onERC721Recived

```bash
  address
  address
  uint256
  bytes
```

transferOwnership

```bash
  newOwner(address)
```

#### Read only functions

Checkout contract read only functions [Here](https://rinkeby.etherscan.io/address/0x6A341599E362869cb87800fb0a8F3087cBF3A97f#readContract)

- #### AdminManager smart contract [Link](https://rinkeby.etherscan.io/address/0xDF795FD3AD283057e6f8B05E027dABF60A229cD7#code) :

  This smart contract are used to manage NFT market place list of authorized admins.

  addAdmin

  ```bash
      admin (address)
  ```

  removeAdmin

  ```bash
      admin (address)
  ```

  approve

  ```bash
      _erc20 (address)
      spender (address)
      value (uint256)
  ```

  buy

  ```bash
      buy payableAmount (ether)
      tokenID (uint256)
      _mintableToken (address)

  ```

  bid

  ```bash
      bid payableAmount (ether)
      tokenID (uint256)
      _mintableToken (address)
      amount (uint256)

  ```

  burnNFT

  ```bash
      collection(address)
      tokenId(uint256)

  ```

  putOnSale

  ```bash
      tokenID (uint256)
      _startingPrice (uint256)
      _auctionType (uint256)
      _buyPrice (uint256)
      _startingTime (uint256)
      _closingTime (uint256)
      _mintableToken (address)
      _erc20Token (address)

  ```

  putOffSale

  ```bash
      tokenID (uint256)
      _mintableToken (address)

  ```

  collect

  ```bash
      tokenID (uint256)
      _mintableToken (address)
  ```

  setBrokerAddress

  ```bash
    _broker (address)

  ```

updatePrice

```bash
  tokenID (uint256)
 _mintableToken (address)
 _newPrice (uint256)
 _erc20Token (address)
```

withdraw

```bash
   None

```

withdrawERC20

```bash
  _erc20Token (address)
```

onERC721Received

```bash
  address
  address
  uint256
  bytes
```

transferOwnership

```bash
  newOwner(address)
```

renounceOwnership

```bash
  None
```

decreaseAllowance

```bash
    _erc20 (address)
    spender (address)
    subtractedValue (uint256)
```

decreaseApproval

```bash
    _erc20 (address)
    spender (address)
    subtractedValue (uint256)
```

increaseAllowance

```bash
    _erc20 (address)
    spender (address)
    addedValue (uint256)
```

increaseApproval

```bash
    _erc20 (address)
    spender (address)
    addedValue (uint256)
```

transfer

```bash
    _erc20 (address)
    to (address)
    value (uint256)

```

transferFrom

```bash
    _erc20 (address)
    from (address)
    to (address)
    value (uint256)

```

erc721Approve

```bash
  _ERC721Address(address)
  _to(address)
  _tokenId(uint256)

```

erc721Burn

```bash
  _ERC721Address (address)
  tokenId (uint256)
```

erc721Mint

```bash
  _ERC721Address (address)
  tokenURI (string)
  _royalty (uint256)
```

erc721SafeTransferFrom(with extra args)

```bash
  _ERC721Address (address)
  from (address)
  to (address)
  tokenId (uint256)
  _data (bytes)
```

erc721SafeTransferFrom

```bash
  _ERC721Address (address)
  from (address)
  to (address)
  tokenId (uint256)

```

erc721TransferFrom

```bash
  _ERC721Address (address)
  from (address)
  to (address)
  tokenId (uint256)

```

#### Read only functions

adminExist

```bash
    _sender (address)
```

admins

```bash
    (uint256)
```

getAdmin

```bash
    none
```

getBrokerAddress

```bash
    none
```

isOwner

```bash
    none
```

owner

```bash
    none
```

- #### CollectionFactory smart contract :
  This contract create a collection of NFT contracts
- #### HasSecondarySaleFees smart contract :
- #### KlaytnGreeter smart contract :
- #### WhitelistableCollection smart contract :

## Installation

To Installation this project run "npm i" in main directory
of project to install all dependency.

```bash
    npm i
    npm start
```

