// import { useState, useEffect } from "react"
import _ from "lodash";
import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const SearchSelect = React.memo(({ setManagerId, managerId, managers }) => {
  return (
    <>
      <Select
        defaultValue={managerId}
        onChange={(value) => {
          setManagerId(value);
        }}
      >
        <Option value="">Manager</Option>
        {managers.map((manager) => (
          <Option value={manager.id} key={manager.id}>
            {manager.name}
          </Option>
        ))}
      </Select>
    </>
  );
});

export const SearchPanel = ({
  projectName,
  setProjectName,
  managerId,
  setManagerId,
  managers,
}) => (
  <form>
    <Input
      type="text"
      value={projectName}
      onChange={(evt) => {
        setProjectName(evt.target.value);
      }}
    />
    <SearchSelect
      setManagerId={setManagerId}
      managerId={managerId}
      managers={managers}
    />
  </form>
);
