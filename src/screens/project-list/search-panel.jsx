// import { useState, useEffect } from "react"

export const SearchPanel = ({ param, setParam, managers }) => {
  return (
    <form>
      <input
        type="text"
        value={param.project_name}
        onChange={(evt) => {
          setParam({
            ...param,
            project_name: evt.target.value,
          });
        }}
      />
      <select
        value={param.manager_id}
        onChange={(evt) => {
          setParam({
            ...param,
            manager_id: evt.target.value,
          });
        }}
      >
        <option value="">Manager</option>
        {managers.map((manager) => (
          <option value={manager.id} key={manager.id}>
            {manager.name}
          </option>
        ))}
      </select>
    </form>
  );
};
