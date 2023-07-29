import { Admin, Resource } from "react-admin";

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./components/users/UserList";
import { UserCreate } from "./components/users/UserCreate";
import { UserEdit } from "./components/users/UserEdit";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
);
