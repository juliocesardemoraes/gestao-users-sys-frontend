import { Create, SimpleForm, TextInput, required } from "react-admin";

export const UserCreate = (props: any) => {
  const handleKeyDown = (event: {
    key: string;
    preventDefault: () => void;
  }) => {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      props.handleSubmit(); // Submit the form
    }
  };
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="email" type="email" validate={required()} />
        <TextInput source="password" type="password" validate={required()} />
        <div onKeyDown={handleKeyDown}>
          <button type="submit" style={{ display: "none" }}></button>
        </div>
      </SimpleForm>
    </Create>
  );
};
