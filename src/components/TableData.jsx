import React from "react";
import Table from "react-bootstrap/Table";

const TableData = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Lengkap</th>
          <th>Hobi</th>
          <th>Tentang</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableData;
