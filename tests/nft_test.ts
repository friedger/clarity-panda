import {
  assertEquals,
  Clarinet,
  Tx,
  Chain,
  Account,
  types,
} from "../src/deps.ts";
import {
  transfer,
  setBaseUri,
  freezeMetadata,
} from "../src/panda-nft-client.ts";
import { flipMintpassSale, flipSale, mint } from "../src/panda-mint-client.ts";

Clarinet.test({
  name: "Ensure that NFT token URL and ID is as expected",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let wallet_1 = accounts.get("wallet_1")!;
    let block = chain.mineBlock([
      Tx.contractCall("panda-nft", "get-last-token-id", [], wallet_1.address),
      Tx.contractCall(
        "panda-nft",
        "get-token-uri",
        [types.uint(1)],
        wallet_1.address
      ),
    ]);
    assertEquals(block.receipts.length, 2);
    assertEquals(block.height, 2);
    block.receipts[0].result.expectOk().expectUint(15);
    block.receipts[1].result
      .expectOk()
      .expectSome()
      .expectAscii("ipfs://QmYLuNdfAx6SFSd1djb5cERwaEbZQvP6G8J8TdmpeJGucp/{id}.json");
  },
});

Clarinet.test({
  name: "Ensure that users can transfer own nft",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let deployer = accounts.get("deployer")!;
    let wallet_1 = accounts.get("wallet_1")!;
    let wallet_2 = accounts.get("wallet_2")!;
    let block = chain.mineBlock([
      flipMintpassSale(deployer.address),
      mint(wallet_2.address),
      transfer(822, wallet_2, wallet_1),
    ]);
    block.receipts[0].result.expectOk();
    block.receipts[1].result.expectOk();
    block.receipts[2].result.expectOk();
  },
});

Clarinet.test({
  name: "Ensure that users can't transfer other nft",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let deployer = accounts.get("deployer")!;
    let wallet_1 = accounts.get("wallet_1")!;
    let wallet_2 = accounts.get("wallet_2")!;
    let block = chain.mineBlock([
      flipMintpassSale(deployer.address),
      mint(wallet_2.address),
      transfer(1, wallet_2, wallet_1, deployer),
    ]);
    block.receipts[0].result.expectOk();
    block.receipts[1].result.expectOk();
    block.receipts[2].result.expectErr().expectUint(401);
  },
});

Clarinet.test({
  name: "Ensure that owner can freeze metadata",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let deployer = accounts.get("deployer")!;
    let block = chain.mineBlock([
      setBaseUri("ipfs://Qm1234", deployer),
      freezeMetadata(deployer),
      setBaseUri("ipfs://Qm5678", deployer),
    ]);
    block.receipts[0].result.expectOk();
    block.receipts[1].result.expectOk();
    block.receipts[2].result.expectErr().expectUint(505);
  },
});

Clarinet.test({
  name: "Ensure that normal users can't freeze metadata",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let wallet_1 = accounts.get("wallet_1")!;
    let block = chain.mineBlock([setBaseUri("ipfs://Qm1234", wallet_1)]);
    block.receipts[0].result.expectErr().expectUint(401);

    block = chain.mineBlock([freezeMetadata(wallet_1)]);
    block.receipts[0].result.expectErr().expectUint(401);
  },
});
