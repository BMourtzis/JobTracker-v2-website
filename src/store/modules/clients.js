import {
  getClients,
  newClient
} from '../../api/clients';

const state = {
  lastFetchTimestamp: 0,
  clientList: []
};

const getters = {
  findClient: (state) => (id) => {
    return state.clientList.find((client) => {
      return client.id === id;
    });
  }
};

const actions = {
  loadClients(context) {
    let clientCall;

    if (process.env.NODE_ENV === "development") {
      clientCall = new Promise((resolve, reject) => {
        let clients = [{
          id: "me",
          firstName: "Vasileios",
          lastName: "Mourtzis",
          businessName: "Team Vasi",
          invoicePrefix: "TVPL",
          address: "498 somewhere st",
          email: "vasi@me.com",
          primaryPhone: "0123456789",
          contancts: [{name: "secondary", phone: "0123456789"}]
        }];

        resolve({data: clients});
      });
    }
    else {
      clientCall = getClients();
    }

    clientCall.then((data) => {
      context.commit("updateClients", data.data);
      context.commit("updateTimestamp");
    });

    return clientCall;
  },
  addClient(context, client) {
    let clientCall = newClient(client).then((data) => {
      context.commit("newClient", data.data);
    });

    return clientCall;
  }
};

const mutations = {
  updateClients(state, clients) {
    state.clientList = [];
    for (let client of clients) {
      Reflect.defineProperty(client, "fullname", {
        get() {
          return `${this.firstName} ${this.lastName}`;
        }
      });
    }
    state.clientList.push(...clients);
  },
  updateTimestamp(state) {
    state.lastFetchTimestamp = Date.now();
  },
  newClient(state, client) {
    Reflect.defineProperty(client, "fullname", {
      get() {
        return `${this.firstName} ${this.lastName}`;
      }
    });
    state.clientList.push(client);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
