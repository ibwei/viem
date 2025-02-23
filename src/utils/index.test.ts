import { expect, test } from 'vitest'

import * as utils from './index.js'

test('exports utils', () => {
  expect(utils).toMatchInlineSnapshot(`
    {
      "arrayRegex": /\\^\\(\\.\\*\\)\\\\\\[\\(\\[0-9\\]\\*\\)\\\\\\]\\$/,
      "assertCurrentChain": [Function],
      "assertRequest": [Function],
      "assertTransactionEIP1559": [Function],
      "assertTransactionEIP2930": [Function],
      "assertTransactionLegacy": [Function],
      "boolToBytes": [Function],
      "boolToHex": [Function],
      "buildRequest": [Function],
      "bytesRegex": /\\^bytes\\(\\[1-9\\]\\|1\\[0-9\\]\\|2\\[0-9\\]\\|3\\[0-2\\]\\)\\?\\$/,
      "bytesToBigInt": [Function],
      "bytesToBigint": [Function],
      "bytesToBool": [Function],
      "bytesToHex": [Function],
      "bytesToNumber": [Function],
      "bytesToString": [Function],
      "ccipFetch": [Function],
      "concat": [Function],
      "concatBytes": [Function],
      "concatHex": [Function],
      "containsNodeError": [Function],
      "decodeAbiParameters": [Function],
      "decodeErrorResult": [Function],
      "decodeEventLog": [Function],
      "decodeFunctionData": [Function],
      "decodeFunctionResult": [Function],
      "defineBlock": [Function],
      "defineChain": [Function],
      "defineFormatter": [Function],
      "defineTransaction": [Function],
      "defineTransactionReceipt": [Function],
      "defineTransactionRequest": [Function],
      "encodeAbiParameters": [Function],
      "encodeDeployData": [Function],
      "encodeErrorResult": [Function],
      "encodeEventTopics": [Function],
      "encodeFunctionData": [Function],
      "encodeFunctionResult": [Function],
      "encodePacked": [Function],
      "extract": [Function],
      "extractChain": [Function],
      "formatAbiItem": [Function],
      "formatAbiItemWithArgs": [Function],
      "formatAbiParams": [Function],
      "formatBlock": [Function],
      "formatEther": [Function],
      "formatGwei": [Function],
      "formatLog": [Function],
      "formatTransaction": [Function],
      "formatTransactionRequest": [Function],
      "formatUnits": [Function],
      "fromBytes": [Function],
      "fromHex": [Function],
      "fromRlp": [Function],
      "getAbiItem": [Function],
      "getAddress": [Function],
      "getCallError": [Function],
      "getChainContractAddress": [Function],
      "getContractAddress": [Function],
      "getContractError": [Function],
      "getCreate2Address": [Function],
      "getCreateAddress": [Function],
      "getEstimateGasError": [Function],
      "getEventSelector": [Function],
      "getEventSignature": [Function],
      "getFunctionSelector": [Function],
      "getFunctionSignature": [Function],
      "getHttpRpcClient": [Function],
      "getNodeError": [Function],
      "getSerializedTransactionType": [Function],
      "getSocket": [Function],
      "getSocketRpcClient": [Function],
      "getTransactionError": [Function],
      "getTransactionType": [Function],
      "getWebSocketRpcClient": [Function],
      "hashMessage": [Function],
      "hashTypedData": [Function],
      "hexToBigInt": [Function],
      "hexToBool": [Function],
      "hexToBytes": [Function],
      "hexToNumber": [Function],
      "hexToString": [Function],
      "integerRegex": /\\^\\(u\\?int\\)\\(8\\|16\\|24\\|32\\|40\\|48\\|56\\|64\\|72\\|80\\|88\\|96\\|104\\|112\\|120\\|128\\|136\\|144\\|152\\|160\\|168\\|176\\|184\\|192\\|200\\|208\\|216\\|224\\|232\\|240\\|248\\|256\\)\\?\\$/,
      "isAddress": [Function],
      "isAddressEqual": [Function],
      "isBytes": [Function],
      "isHash": [Function],
      "isHex": [Function],
      "keccak256": [Function],
      "numberToBytes": [Function],
      "numberToHex": [Function],
      "offchainLookup": [Function],
      "offchainLookupAbiItem": {
        "inputs": [
          {
            "name": "sender",
            "type": "address",
          },
          {
            "name": "urls",
            "type": "string[]",
          },
          {
            "name": "callData",
            "type": "bytes",
          },
          {
            "name": "callbackFunction",
            "type": "bytes4",
          },
          {
            "name": "extraData",
            "type": "bytes",
          },
        ],
        "name": "OffchainLookup",
        "type": "error",
      },
      "offchainLookupSignature": "0x556f1830",
      "pad": [Function],
      "padBytes": [Function],
      "padHex": [Function],
      "parseAbi": [Function],
      "parseAbiItem": [Function],
      "parseAbiParameter": [Function],
      "parseAbiParameters": [Function],
      "parseAccount": [Function],
      "parseEther": [Function],
      "parseEventLogs": [Function],
      "parseGwei": [Function],
      "parseTransaction": [Function],
      "parseUnits": [Function],
      "publicKeyToAddress": [Function],
      "recoverAddress": [Function],
      "recoverMessageAddress": [Function],
      "recoverPublicKey": [Function],
      "recoverTypedDataAddress": [Function],
      "ripemd160": [Function],
      "rpc": {
        "http": [Function],
        "webSocket": [Function],
        "webSocketAsync": [Function],
      },
      "serializeAccessList": [Function],
      "serializeTransaction": [Function],
      "sha256": [Function],
      "size": [Function],
      "slice": [Function],
      "sliceBytes": [Function],
      "sliceHex": [Function],
      "socketClientCache": Map {},
      "stringToBytes": [Function],
      "stringToHex": [Function],
      "stringify": [Function],
      "toBytes": [Function],
      "toEventHash": [Function],
      "toEventSelector": [Function],
      "toEventSignature": [Function],
      "toFunctionHash": [Function],
      "toFunctionSelector": [Function],
      "toFunctionSignature": [Function],
      "toHex": [Function],
      "toRlp": [Function],
      "transactionType": {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
      },
      "trim": [Function],
      "validateTypedData": [Function],
      "verifyMessage": [Function],
      "verifyTypedData": [Function],
    }
  `)
})
