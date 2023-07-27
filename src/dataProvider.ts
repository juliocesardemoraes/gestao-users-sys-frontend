import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider(
  import.meta.env.VITE_LOCAL_URL,
  undefined,
  "X-Total-Count"
);

export { dataProvider };
