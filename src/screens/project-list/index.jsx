import { useState, useEffect } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import pipe from "lodash/fp/pipe";

import * as qs from "qs";
import { cleanObject, isTrue, useDebounce } from "screens/utils";

import styled from "styled-components";

const apiURL = process.env.REACT_APP_API_URL;

const StyledProjectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectSearchList = () => {
  const [param, setParam] = useState({ project_name: "", manager_id: "" }); // param.manager_id param.project_name
  const [managers, setManagers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/managers`).then(async (response) => {
      if (response.ok) {
        setManagers(await response.json());
      }
    });
  }, []);

  const changeParamProjectName = (object) => {
    const result = { ...object };
    const value = result["project_name"];
    if (isTrue(value)) {
      result["name"] = value;
      delete result["project_name"];
    }
    return result;
  };

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
  }, [debouncedParam]);

  return (
    <StyledProjectList>
      <SearchPanel param={param} setParam={setParam} managers={managers} />
      <List list={list} managers={managers} />
    </StyledProjectList>
  );
};
