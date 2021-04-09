import React from "react";
import Header from "./Header";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import MediaList from "./MediaList";
import AddMediaForm from "./AddMediaForm";
import CharacterList from "./CharacterList";
import AddCharacterForm from "./AddCharacterForm";

const Content = () => {

  const handleSubmission = () => {
    alert("Success");
    //location.reload();
    return window.location.href = "/";
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/medias" exact>
          <MediaList />
        </Route>
        <Route path="/medias/add" exact>
          <AddMediaForm onSuccess={handleSubmission} />
        </Route>
        <Route path="/characters" exact>
          <CharacterList />
        </Route>
        <Route path="/characters/add" exact>
          <AddCharacterForm onSuccess={handleSubmission} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Content;
