import {
  Button,
  FilterButton,
  ExportButton,
  CreateButton,
  TopToolbar,
} from "react-admin";

export const ListActionsContainer = (props) => {
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    {/* Add your custom actions */}
    <Button
      onClick={() => {
        alert("Your custom action");
      }}
      label="Show calendar"
    ></Button>
  </TopToolbar>;
};
