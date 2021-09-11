export const List = ({ list, managers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {managers.find((manager) => manager.id === project.manager_id)
                ?.name || "unknown"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
