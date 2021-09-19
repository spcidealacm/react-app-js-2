import { Table } from "antd";

export const List = ({ list, managers }) => {
  const columns = [
    {
      title: "Project Name",
      dataIndex: "project_name",
      key: "project_name",
    },
    {
      title: "Manager",
      dataIndex: "manager",
      key: "manager",
    },
  ];

  const data = [];

  list.map((project) => {
    const info = {
      key: project.id,
      project_name: project.name,
      manager:
        managers.find((manager) => manager.id === project.manager_id)?.name ||
        "unknown",
    };
    data.push(info);
    return 0;
  });

  return <Table columns={columns} dataSource={data} />;

  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Project Name</th>
  //         <th>Manager</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {list.map((project) => (
  //         <tr key={project.id}>
  //           <td>{project.name}</td>
  //           <td>
  //             {managers.find((manager) => manager.id === project.manager_id)
  //               ?.name || "unknown"}
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );
};
