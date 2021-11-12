import { Chain, Tx, types, Account } from "./deps.ts";

export function flipMintpassSale(address: string) {
  return Tx.contractCall(
    "panda-mint",
    "flip-mintpass-sale",
    [],
    address
  );
}

export function flipSale(address: string) {
  return Tx.contractCall("panda-mint", "flip-sale", [], address);
}

export function mint(address: string) {
  return Tx.contractCall("panda-mint", "mint", [], address);
}

export function mintTwo(address: string) {
  return Tx.contractCall("panda-mint", "mint-two", [], address);
}

export function mintFive(address: string) {
  return Tx.contractCall("panda-mint", "mint-five", [], address);
}

export function getMintpassBalance(chain: Chain, user: Account) {
  return chain.callReadOnlyFn(
    "panda-mint",
    "get-presale-balance",
    [types.principal(user.address)],
    user.address
  );
}
