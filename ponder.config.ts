import { createConfig } from "ponder";
import { Erc20Abi } from "./abis/erc20Abi";

export default createConfig({
  chains: {
    arbitrum: {
      id: 42161,
      rpc: process.env.PONDER_RPC_URL_42161!,
    },
  },
  contracts: {
    ERC20: {
      chain: "arbitrum",
      abi: Erc20Abi,
      address: [
        "0xC99522da19b62ff5035355ACBe3Ebfef1F58Bc59",
        "0x1936944Ea2Aa2FB748A4a1962a2B2d52bf7E4A47",
      ],
      startBlock: 342109081,
    },
  },
});
