import { Chain, Tx, types, Account } from "./deps.ts";

export function transfer(
  id: number,
  sender: Account,
  recipient: Account,
  user?: Account
) {
  return Tx.contractCall(
    "panda-nft",
    "transfer",
    [
      types.uint(id),
      types.principal(sender.address),
      types.principal(recipient.address),
    ],
    user ? user.address : sender.address
  );
}

export function getBalance(chain: Chain, user: Account) {
  return chain.callReadOnlyFn(
    "panda-nft",
    "get-balance",
    [types.principal(user.address)],
    user.address
  );
}

export function list(
  id: number,
  price: number,
  commission: string,
  user: Account
) {
  return Tx.contractCall(
    "panda-nft",
    "list-in-ustx",
    [types.uint(id), types.uint(price), types.principal(commission)],
    user.address
  );
}

export function unlist(id: number, user: Account) {
  return Tx.contractCall(
    "panda-nft",
    "unlist-in-ustx",
    [types.uint(id)],
    user.address
  );
}

export function buy(id: number, commission: string, user: Account) {
  return Tx.contractCall(
    "panda-nft",
    "buy-in-ustx",
    [types.uint(id), types.principal(commission)],
    user.address
  );
}

export function freezeMetadata(user: Account) {
  return Tx.contractCall("panda-nft", "freeze-metadata", [], user.address);
}

export function setBaseUri(uri: string, user: Account) {
  return Tx.contractCall(
    "panda-nft",
    "set-base-uri",
    [types.ascii(uri)],
    user.address
  );
}
