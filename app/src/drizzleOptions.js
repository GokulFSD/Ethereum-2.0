import Empl from "./contracts/Empl.json";
import Manag from "./contracts/Manag.json";


const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [Empl,Manag],
  events: {
    // SimpleStorage: ["StorageSet"],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
