import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./components/UserList";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} create={CreateUser} />
  </Admin>
);
