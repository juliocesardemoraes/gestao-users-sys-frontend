import {
  EmailField,
  List,
  TextField,
  TopToolbar,
  CreateButton,
  sanitizeListRestProps,
  Datagrid,
} from "react-admin";

const ListActions = (props: { [x: string]: any; className: any }) => {
  const { className, ...rest } = props;

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton />
    </TopToolbar>
  );
};

export const UserList = (props: any) => {
  return (
    <>
      <ListActions className={props.className} />
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
