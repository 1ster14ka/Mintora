import axios from 'axios';

export const collections = [
  {
    address: '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
    slug: 'pudgypenguins',
  },
  {
    address: '0xEd5AF388653567Af2F388E6224dC7C4b3241C544',
    slug: 'azuki',
  },
  {
    address: '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
    slug: 'doodles-official',
  },
  {
    address: '0x1A92f7381B9F03921564a437210bB9396471050C',
    slug: 'cool-cats-nft',
  },
  {
    address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
    slug: 'mutant-ape-yacht-club',
  },
  {
    address: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
    slug: 'clonex',
  },
  {
    address: '0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6',
    slug: 'cryptoadz-by-gremplin',
  },
];

export const apiKey = import.meta.env.VITE_ALCHEMY_API_KEY;

console.log(
  console.log('API KEY EXISTS:', !!import.meta.env.VITE_ALCHEMY_API_KEY)
);
