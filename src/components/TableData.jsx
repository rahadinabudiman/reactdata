import React from "react";
import Table from "react-bootstrap/Table";

const TableData = ({ datas, editData }) => {
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
        {datas.length > 0 ? (
          datas.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.nama}</td>
              <td>{data.hobi}</td>
              <td>{data.deskripsi}</td>
              <td>
                <button className="btn btn-warning" onClick={() => editData(data.id)}>Edit</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>Tidak ada data</td>
          </tr>
        )}
      </tbody>
    </Table >
  );
};

export default TableData;
