import {
  EmailField,
  List,
  TextField,
  TopToolbar,
  CreateButton,
  sanitizeListRestProps,
  Datagrid,
} from "react-admin";

const ListActions = (props) => {
  const { className, ...rest } = props;

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton />
    </TopToolbar>
  );
};

export const UserList = (props) => {
  return (
    <>
      <ListActions />
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
        </Datagrid>
      </List>
    </>
  );
};
