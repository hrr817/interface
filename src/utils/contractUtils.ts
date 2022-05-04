import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import { Signer } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { Provider } from "@ethersproject/abstract-provider";

export const RIBON_CONTRACT_ADDRESS =
  "0x7aB7Aaf626D639B0f9EcFdF4A01E51F75E2eB596";

export const DONATION_TOKEN_CONTRACT_ADDRESS =
  "0x21A72dc641c8e5f13717a7e087d6D63B4f9A3574";

export const ALCHEMY_URL = process.env.REACT_APP_ALCHEMY_URL;

export function isAddress(value: string): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export function getContract(
  address: string,
  ABI: any,
  signerOrProvider: Signer | Provider,
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return new Contract(address, ABI, signerOrProvider);
}

export async function balanceOf(address: string) {
  const { ethereum } = window;
  if (ethereum) {
    const provider = new Web3Provider(ethereum);
    const balance = await provider.getBalance(address);

    return balance;
  }

  return null;
}
