import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Toaster } from "react-hot-toast"
import DataTable from "../components/DataTables"

const Home = () => {

    const [datas, setDatas] = useState([])
    const [profile, setProfile] = useState({})
    const [show, setShow] = useState(false)

    const getProfile = () => {
        axios.get("https://dev-be.trijagabaya.co.id/api/auth/user-profile")
            .then(res => setProfile(res.data.data[0]))
            .catch(err => console.error(err))
    }

    const getData = () => {
        axios.post("https://dev-be.trijagabaya.co.id/api/satpam-kegiatan")
            .then(res => setDatas(res.data.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getProfile()
    }, [])

    const handleShow = () => {
        if (!show) {
            getData()
        }
        setShow(prev => !prev)
    }

    return (
        <Container style={{ color: "#015479" }}>
            <Toaster />
            <Row>
                <Col xs={12} md={7} className="mt-5">
                    <Row>
                        <Col xs={8} md={5} className="d-sm-flex mx-auto border border-3 rounded">
                            <img src={profile.adminpetugasfoto} alt="" className="img-fluid" />
                        </Col>
                        <Col xs={12} md={6} className="text-center text-md-start ms-md-4 mt-2">
                            <h3>Identitas diri</h3>
                            <p>Nama lengkap : {profile.adminpetugasnamalengkap}</p>
                            <p>Kode petugas : {profile.adminpetugaskode}</p>
                            <p>Jabatan : {profile.adminpetugasjabatan}</p>
                            <p>Username : {profile.adminpetugasusername}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={5} className="mt-3">
                    <h3 className="text-center">Perusahaan Bekerja</h3>
                    <Col>
                        <img src={profile.adminpetugasperusahaanfoto}
                            alt="" width={300} height={240}
                            className="d-block mx-auto"
                        />
                    </Col>
                    <p className="text-center">{profile.adminpetugasperusahaannama} ({profile.adminpetugasperusahaankode})</p>
                </Col>
            </Row>
            <Row className="mt-3 mb-5 w-50 mx-auto">
                <Button onClick={handleShow} variant={show ? "danger" : "primary"}>
                    {show ? "Tutup data satpam" : "Lihat data satpam"}
                </Button>
            </Row>
            {show && <DataTable datas={datas} />}
        </Container>
    )
}

export default Home