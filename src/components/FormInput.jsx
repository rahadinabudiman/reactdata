import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const FormInput = () => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                    <h4>Tambah Data</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" placeholder="Masukan Nama Lengkap..." name="nama" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hobi</Form.Label>
                            <Form.Control type="text" placeholder="Masukan Hobi Kamu...." name="hobi" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Tentang Kamu</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Ceritakan Tentang Kamu...">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Ceritakan Tentang Kamu..."
                                    style={{ height: '100px' }} name="deskripsi"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default FormInput;
