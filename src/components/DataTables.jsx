import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';

const DataTable = ({datas}) => {

    const data = () => {
        return {
            columns: [
                {
                    label: 'Id',
                    field: 'satpamkegiatanid',
                    width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                    },
                },
                {
                    label: 'Nama',
                    field: 'satpamnamalengkap',
                    width: 270,
                },
                {
                  label: 'Perusahaan',
                  field: 'satpamperusahaannama',
                  width: 200,
                },
                {
                  label: 'Kegiatan',
                  field: 'satpamkegiatanuraian',
                  sort: 'asc',
                  width: 100,
                },
                {
                  label: 'Tanggal',
                  field: 'satpamkegiatantanggal',
                  width: 100,
                },
            ],
            rows: datas,
        };
    };
    return (
        <CDBContainer className="mb-5">
            <CDBCard className="border p-3">
                <CDBCardBody>
                    <h3 className="text-center my-3">Data Satpam</h3>
                    <CDBDataTable
                        bordered
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={data()}
                        materialSearch={true}
                    />
                </CDBCardBody>
            </CDBCard>
        </CDBContainer>
    );
};

export default DataTable;