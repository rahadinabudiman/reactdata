import React, { Component } from "react";
import NavBar from "./NavBar";
import TableData from "./TableData";
import FormInput from "./FormInput";

export default class MainMenu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      datas: [],
      nama: '',
      hobi: '',
      deskripsi: ''
    }
  }

  handleChangeEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitEvent = (event) => {
    event.preventDefault(); // Tidak akan terjadi refresh (menghilangkan fungsi default dari submit)

    if (this.state.id === "") {
      this.setState({
        datas: [
          ...this.state.datas,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            hobi: this.state.hobi,
            deskripsi: this.state.deskripsi
          }
        ]
      })
    } else {
      const NonSelectedData = this.state.datas
        .filter((data) => data.id !== this.state.id)
        .map((filterData) => {
          return filterData;
        });
      this.setState({
        datas: [
          ...NonSelectedData,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            hobi: this.state.hobi,
            deskripsi: this.state.deskripsi
          }
        ]
      })
    }


    // Membuat formulir menjadi kosong
    this.setState({
      nama: '',
      hobi: '',
      deskripsi: '',
      id: ''
    })
  }

  editData = (id) => {
    const SelectedData = this.state.datas
      .filter((data) => data.id === id)
      .map((filterData) => {
        return filterData;
      })

    this.setState({
      nama: SelectedData[0].nama,
      hobi: SelectedData[0].hobi,
      deskripsi: SelectedData[0].deskripsi,
      id: SelectedData[0].id
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-4">
          <TableData datas={this.state.datas} editData={this.editData} />
          <FormInput {...this.state} handleChangeEvent={this.handleChangeEvent} handleSubmitEvent={this.handleSubmitEvent} />
        </div>
      </div>
    );
  }
}
