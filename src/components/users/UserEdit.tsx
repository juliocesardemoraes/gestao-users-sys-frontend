import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const UserEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="email" type="email" validate={required()} />
        <TextInput source="password" type="password" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
