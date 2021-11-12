// Code generated with the stacksjs-helper-generator extension
// Manual edits will be overwritten

import { ClarityValue, BooleanCV, TrueCV, FalseCV, IntCV, UIntCV, BufferCV, OptionalCV, NoneCV, SomeCV, ResponseCV, ResponseOkCV, ResponseErrorCV, PrincipalCV, StandardPrincipalCV, ContractPrincipalCV, ListCV, TupleCV, StringAsciiCV, StringUtf8CV } from "@stacks/transactions"

export namespace CommissionFixedContract {
    export const address = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
    export const name = "commission-fixed";

    // Functions
    export namespace Functions {
        // pay
        export namespace Pay {
            export const name = "pay";

            export interface PayArgs {
                id: UIntCV,
                price: UIntCV,
            }

            export function args(args: PayArgs): ClarityValue[] {
                return [
                    args.id,
                    args.price,
                ];
            }

        }

    }
}

export namespace CommissionNopContract {
    export const address = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
    export const name = "commission-nop";

    // Functions
    export namespace Functions {
        // pay
        export namespace Pay {
            export const name = "pay";

            export interface PayArgs {
                id: UIntCV,
                price: UIntCV,
            }

            export function args(args: PayArgs): ClarityValue[] {
                return [
                    args.id,
                    args.price,
                ];
            }

        }

    }
}

export namespace CommissionTraitContract {
    export const address = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
    export const name = "commission-trait";

}

export namespace NftTraitContract {
    export const address = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
    export const name = "nft-trait";

}

export namespace PandaNftContract {
    export const address = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
    export const name = "panda-nft";

    // Functions
    export namespace Functions {
        // buy-in-ustx
        export namespace BuyInUstx {
            export const name = "buy-in-ustx";

            export interface BuyInUstxArgs {
                id: UIntCV,
                comm: ClarityValue,
            }

            export function args(args: BuyInUstxArgs): ClarityValue[] {
                return [
                    args.id,
                    args.comm,
                ];
            }

        }

        // freeze-metadata
        export namespace FreezeMetadata {
            export const name = "freeze-metadata";

        }

        // list-in-ustx
        export namespace ListInUstx {
            export const name = "list-in-ustx";

            export interface ListInUstxArgs {
                id: UIntCV,
                price: UIntCV,
                comm: ClarityValue,
            }

            export function args(args: ListInUstxArgs): ClarityValue[] {
                return [
                    args.id,
                    args.price,
                    args.comm,
                ];
            }

        }

        // mint
        export namespace Mint {
            export const name = "mint";

            export interface MintArgs {
                newOwner: PrincipalCV,
                paid: BooleanCV,
                id: UIntCV,
            }

            export function args(args: MintArgs): ClarityValue[] {
                return [
                    args.newOwner,
                    args.paid,
                    args.id,
                ];
            }

        }

        // set-base-uri
        export namespace SetBaseUri {
            export const name = "set-base-uri";

            export interface SetBaseUriArgs {
                newBaseUri: StringAsciiCV,
            }

            export function args(args: SetBaseUriArgs): ClarityValue[] {
                return [
                    args.newBaseUri,
                ];
            }

        }

        // set-mint-address
        export namespace SetMintAddress {
            export const name = "set-mint-address";

        }

        // transfer
        export namespace Transfer {
            export const name = "transfer";

            export interface TransferArgs {
                id: UIntCV,
                sender: PrincipalCV,
                recipient: PrincipalCV,
            }

            export function args(args: TransferArgs): ClarityValue[] {
                return [
                    args.id,
                    args.sender,
                    args.recipient,
                ];
            }

        }

        // unlist-in-ustx
        export namespace UnlistInUstx {
            export const name = "unlist-in-ustx";

            export interface UnlistInUstxArgs {
                id: UIntCV,
            }

            export function args(args: UnlistInUstxArgs): ClarityValue[] {
                return [
                    args.id,
                ];
            }

        }

        // get-balance
        export namespace GetBalance {
            export const name = "get-balance";

            export interface GetBalanceArgs {
                account: PrincipalCV,
            }

            export function args(args: GetBalanceArgs): ClarityValue[] {
                return [
                    args.account,
                ];
            }

        }

        // get-contract-uri
        export namespace GetContractUri {
            export const name = "get-contract-uri";

        }

        // get-last-token-id
        export namespace GetLastTokenId {
            export const name = "get-last-token-id";

        }

        // get-listing-in-ustx
        export namespace GetListingInUstx {
            export const name = "get-listing-in-ustx";

            export interface GetListingInUstxArgs {
                id: UIntCV,
            }

            export function args(args: GetListingInUstxArgs): ClarityValue[] {
                return [
                    args.id,
                ];
            }

        }

        // get-owner
        export namespace GetOwner {
            export const name = "get-owner";

            export interface GetOwnerArgs {
                id: UIntCV,
            }

            export function args(args: GetOwnerArgs): ClarityValue[] {
                return [
                    args.id,
                ];
            }

        }

        // get-token-uri
        export namespace GetTokenUri {
            export const name = "get-token-uri";

            export interface GetTokenUriArgs {
                id: UIntCV,
            }

            export function args(args: GetTokenUriArgs): ClarityValue[] {
                return [
                    args.id,
                ];
            }

        }

    }
}

export namespace PandaMintContract {
    export const address = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
    export const name = "panda-mint";

    // Functions
    export namespace Functions {
        // claim
        export namespace Claim {
            export const name = "claim";

        }

        // flip-mintpass-sale
        export namespace FlipMintpassSale {
            export const name = "flip-mintpass-sale";

        }

        // flip-sale
        export namespace FlipSale {
            export const name = "flip-sale";

        }

        // mint
        export namespace Mint {
            export const name = "mint";

        }

        // mint-five
        export namespace MintFive {
            export const name = "mint-five";

        }

        // mint-four
        export namespace MintFour {
            export const name = "mint-four";

        }

        // mint-three
        export namespace MintThree {
            export const name = "mint-three";

        }

        // mint-two
        export namespace MintTwo {
            export const name = "mint-two";

        }

        // get-presale-balance
        export namespace GetPresaleBalance {
            export const name = "get-presale-balance";

            export interface GetPresaleBalanceArgs {
                account: PrincipalCV,
            }

            export function args(args: GetPresaleBalanceArgs): ClarityValue[] {
                return [
                    args.account,
                ];
            }

        }

    }
}
