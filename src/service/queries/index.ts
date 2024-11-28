import { authAPI } from "../customApi";


export const activityTicketApi = async () => {
  const data = await authAPI.get("/voucher-members");
  return data;
};

export const myNeighborsApi = async () => {
  const data = await authAPI.get("/voucher-members/my-current-crews");
  return data;
};


export const trendingTicketsApi = async () => {
  const data = await authAPI.get("/sport-voucher/popularity", {
    params : {
      fetchSize: 3
    }  
  },
  )
  return data;
};



export const myAddressesApi = async () => {
  const data = await authAPI.get("/addresses");
  return data;
};