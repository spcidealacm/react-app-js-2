import React from "react";
import { useState, useEffect } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import pipe from "lodash/fp/pipe";

import * as qs from "qs";
import { cleanObject, isTrue, useDebounce } from "../../screens/utils";
// import LocaleButton from "../LocaleButton";

import styled from "styled-components";

const apiURL = process.env.REACT_APP_API_URL;

const StyledProjectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const functions = new Set();

export const ProjectSearchList = () => {
  // const [param, setParam] = useState({ project_name: "", manager_id: "" }); // param.manager_id param.project_name
  const [projectName, setProjectName] = useState("");
  const [managerId, setManagerId] = useState("");

  const [managers, setManagers] = useState([]);
  const [list, setList] = useState([]);

  const param = React.useMemo(
    () => ({ project_name: projectName, manager_id: managerId }),
    [projectName, managerId]
  );

  useEffect(() => {
    fetch(`${apiURL}/managers`).then(async (response) => {
      if (response.ok) {
        setManagers(await response.json());
      }
    });

    document.title = "New Title"; // always working
  }, []); //didMount

  // document.title = ""; // may not working

  const changeParamProjectName = React.useCallback((object) => {
    const result = { ...object };
    const value = result["project_name"];
    if (isTrue(value)) {
      result["name"] = value;
      delete result["project_name"];
    }
    return result;
  }, []);

  functions.add(changeParamProjectName);

  // { project_name: projectName, manager_id: managerId }
  const debouncedParam = useDebounce(param, 300);

  useEffect(() => {
    const combineSearch = pipe(
      cleanObject,
      changeParamProjectName,
      qs.stringify
    );
    fetch(`${apiURL}/projects?${combineSearch(debouncedParam)}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debouncedParam, changeParamProjectName]); // didUpdate

  return (
    <StyledProjectList>
      <SearchPanel
        projectName={projectName}
        setProjectName={setProjectName}
        managerId={managerId}
        setManagerId={setManagerId}
        managers={managers}
      />
      <List list={list} managers={managers} />
      <div>{`created functions number ${functions.size}`}</div>
    </StyledProjectList>
  );
};

// {
/* <ProjectSearchList>
<styled.div>
  <div className="sc-bdfBQB ffydFq">
    <SearchPanel param={{...}} setParam={[Function: bound dispatchAction]} managers={{...}}>
      <div className="search-panel" props={{...}} />
    </SearchPanel>
    <List list={{...}} managers={{...}}>
      <div className="list" props={{...}} />
    </List>
  </div>
</styled.div>
</ProjectSearchList>  */
// }
