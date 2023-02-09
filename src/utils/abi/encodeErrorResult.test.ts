import { expect, test } from 'vitest'

import { encodeErrorResult } from './encodeErrorResult'

test('revert SoldOutError()', () => {
  expect(
    encodeErrorResult({
      abi: [
        {
          inputs: [],
          name: 'SoldOutError',
          type: 'error',
        },
      ],
      errorName: 'SoldOutError',
    }),
  ).toEqual('0x7f6df6bb')
  expect(
    encodeErrorResult({
      abi: [
        {
          name: 'SoldOutError',
          type: 'error',
        },
      ],
      errorName: 'SoldOutError',
    }),
  ).toEqual('0x7f6df6bb')
})

test('revert AccessDeniedError(string)', () => {
  expect(
    encodeErrorResult({
      abi: [
        {
          inputs: [
            {
              internalType: 'string',
              name: 'a',
              type: 'string',
            },
          ],
          name: 'AccessDeniedError',
          type: 'error',
        },
      ],
      errorName: 'AccessDeniedError',
      args: ['you do not have access ser'],
    }),
  ).toEqual(
    '0x83aa206e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a796f7520646f206e6f7420686176652061636365737320736572000000000000',
  )
})

test('revert AccessDeniedError((uint256,bool,address,uint256))', () => {
  expect(
    encodeErrorResult({
      abi: [
        {
          inputs: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'weight',
                  type: 'uint256',
                },
                {
                  internalType: 'bool',
                  name: 'voted',
                  type: 'bool',
                },
                {
                  internalType: 'address',
                  name: 'delegate',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'vote',
                  type: 'uint256',
                },
              ],
              internalType: 'struct Ballot.Voter',
              name: 'voter',
              type: 'tuple',
            },
          ],
          name: 'AccessDeniedError',
          type: 'error',
        },
      ],
      errorName: 'AccessDeniedError',
      args: [
        {
          delegate: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
          vote: 41n,
          voted: true,
          weight: 69420n,
        },
      ],
    }),
  ).toEqual(
    '0x0a1895610000000000000000000000000000000000000000000000000000000000010f2c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000000029',
  )
})

test("errors: error doesn't exist", () => {
  expect(() =>
    encodeErrorResult({
      abi: [
        {
          inputs: [],
          name: 'SoldOutError',
          type: 'error',
        },
      ],
      // @ts-expect-error
      errorName: 'AccessDeniedError',
      args: [
        {
          delegate: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
          vote: 41n,
          voted: true,
          weight: 69420n,
        },
      ],
    }),
  ).toThrowErrorMatchingInlineSnapshot(`
    "Error \\"AccessDeniedError\\" not found on ABI.
    Make sure you are using the correct ABI and that the error exists on it.

    Docs: https://viem.sh/docs/contract/encodeErrorResult
    Version: viem@1.0.2"
  `)
})

test('errors: no inputs', () => {
  expect(() =>
    encodeErrorResult({
      abi: [
        {
          name: 'AccessDeniedError',
          type: 'error',
        },
      ],
      errorName: 'AccessDeniedError',
      args: [
        {
          delegate: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
          vote: 41n,
          voted: true,
          weight: 69420n,
        },
      ],
    }),
  ).toThrowErrorMatchingInlineSnapshot(`
    "Arguments (\`args\`) were provided to \\"AccessDeniedError\\", but \\"AccessDeniedError\\" on the ABI does not contain any parameters (\`inputs\`).
    Cannot encode error result without knowing what the parameter types are.
    Make sure you are using the correct ABI and that the inputs exist on it.

    Docs: https://viem.sh/docs/contract/encodeErrorResult
    Version: viem@1.0.2"
  `)
  expect(() =>
    encodeErrorResult({
      abi: [
        {
          inputs: undefined,
          name: 'AccessDeniedError',
          type: 'error',
        },
      ],
      errorName: 'AccessDeniedError',
      args: [
        {
          delegate: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
          vote: 41n,
          voted: true,
          weight: 69420n,
        },
      ],
    }),
  ).toThrowErrorMatchingInlineSnapshot(`
    "Arguments (\`args\`) were provided to \\"AccessDeniedError\\", but \\"AccessDeniedError\\" on the ABI does not contain any parameters (\`inputs\`).
    Cannot encode error result without knowing what the parameter types are.
    Make sure you are using the correct ABI and that the inputs exist on it.

    Docs: https://viem.sh/docs/contract/encodeErrorResult
    Version: viem@1.0.2"
  `)
})
