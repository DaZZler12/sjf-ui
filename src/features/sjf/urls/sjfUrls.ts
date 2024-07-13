export const sjfUrls = {
  sjf: {
    v1: {
      getV1: (id: string) => `/sjf/v1/${id}`,
      getV1WebSocket: (id: string) => `/sjf/v1/ws/${id}`,
      postV1: () => `/sjf/v1`,
      listV1: () => `/sjf/v1`,
      deleteV1: (id: string) => `/sjf/v1/${id}`,
      // Other URLs
    },
    //
    v2: {
      // Add v2 URLs
    },
  },
};
