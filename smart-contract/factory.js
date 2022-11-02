import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xbE43A265C276FEB0722B122a656Fee930F069024"
);

export default instance;
