import {
  DateField,
  EmailField,
  List,
  TextField,
  useListContext,
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
  const { total } = useListContext();
  return (
    <>
      <ListActions />
      <List {...props} actions={<ListActions />}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
        </Datagrid>
      </List>
    </>
  );
};
