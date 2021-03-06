import React from "react";
import AddPerson from "../../containers/addPerson/addPerson.component";

import PeopleList from "../../containers/peopleList/peopleList.component";

const ChatPage = () => {
  return (
    <main>
      <PeopleList />

      <AddPerson />
    </main>
  );
};

export default ChatPage;
