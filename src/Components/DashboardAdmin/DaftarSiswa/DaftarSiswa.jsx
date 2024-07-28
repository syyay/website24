import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../axios/AxiosInstance";
import "./daftarsiswa.css"


function DaftarSiswa(){
    const token = localStorage.getItem("token");
    const [kelas, setKelas] = useState([]);
    const [pilihKelas, setPilihKelas] = useState();
    const [pilihSiswa, setPilihSiswa] = useState();
    const [messageError, setMessageError] = useState();

    useEffect(()=>{
        if(token){
            AxiosInstance.get('/auth/cektoken',{
                headers:{
                    Authorization:'Bearer '+token
                }
            }).then(response=>{
                if(response.status){
                    return
                }
            }).catch(err=>{ 
                window.location.href = "/login"
            })
        }else{
            window.location.href = "/login"
        }

        AxiosInstance.get("/kelas")
        .then(response=>{
            setKelas(response.data.data);
            settingKelas(response.data.data[0].id)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const settingKelas = (id)=>{
        AxiosInstance.get('/siswa/kelas/'+id,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(response=>{
            setPilihKelas(response.data.data);
        }).catch(err=>{
            console.log(err)
        })
        console.log(pilihKelas);
    }

    const tambahSiswa = (e) => {
        e.preventDefault();
        var jenis_kelamin =null;
        const id_kelas = pilihKelas.id;
        const nama = document.getElementById("nama").value;
        const jenkel = document.querySelectorAll('input[name="jenis_kelamin"]');
        jenkel.forEach((radio) => {
            if (radio.checked) {
                jenis_kelamin = radio.value
            }
        });
        AxiosInstance.post('/siswa',{
            "id_kelas":id_kelas,
            "nama":nama,
            "jenis_kelamin":jenis_kelamin,
        },{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            settingKelas(pilihKelas.id)
            resetForm()
            setMessageError(null);
        }).catch(err=>{
            const errorMessage = Object.entries(err.response.data.errors)
            setMessageError(errorMessage[0][1][0]);
        })
    }

    const resetForm = () => {
        document.getElementById('nama').value = "";
        const jenkel = document.querySelectorAll('input[name="jenis_kelamin"]');
        jenkel.forEach((radio) => {
            radio.checked = false
        });
    }

    const deleteSiswa = (id) => {
        AxiosInstance.delete('/siswa/'+id,{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            resetForm()
            settingKelas(pilihKelas.id)
            setMessageError(null);
        }).catch(err=>{
            console.log(err);
        })
    }

    const setUpdateSiswa = (id) => {
        AxiosInstance.get('/siswa/'+id,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(response=>{
            console.log(response)
            resetForm()
            document.getElementById("nama").value = response.data.data.nama;
            setPilihSiswa(response.data.data);
        }).catch(err=>{
            console.log(err);
        });
    }

    const updateSiswa  = (e) =>{
        e.preventDefault();
        var jenis_kelamin =null;
        const id_kelas = pilihKelas.id;
        const nama = document.getElementById("nama").value;
        const jenkel = document.querySelectorAll('input[name="jenis_kelamin"]');
        jenkel.forEach((radio) => {
            if (radio.checked) {
                jenis_kelamin = radio.value
            }
        });
        AxiosInstance.post('/siswa/'+pilihSiswa.id,{
            "id_kelas":id_kelas,
            "nama":nama,
            "jenis_kelamin":jenis_kelamin,
        },{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            settingKelas(pilihKelas.id)
            resetForm()
            setMessageError(null);
        }).catch(err=>{
            const errorMessage = Object.entries(err.response.data.errors)
            setMessageError(errorMessage[0][1][0]);
        })  
    }
    return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Daftar Siswa</h1>
                <p className="mb-4"> Daftar siswa merupakan data dari para siswa yang akan ditampilkan pada halaman website berdasarkan kelasnya.</p>

                <div className="container-fluid mt-4">
                    {
                        kelas ?
                        <div className="d-flex overflow-auto">
                            {
                                kelas.map(kelas => (
                                    <div className="flex-shrink-0 p-0 bg-light border">
                                        <button className="p-2" onClick={()=>settingKelas(kelas.id)}>{kelas.nama_kelas}</button>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <></>
                    }
                </div>
                {
                    pilihKelas ? 
                    <div className="d-flex justify-content-around mt-2">
                        <div className="col-8">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">{pilihKelas.nama_kelas}</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Nomor Absen</th>
                                                    <th>Nama</th>
                                                    <th>Jenis Kelamin</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    pilihKelas.daftar_siswa.length != 0 ?
                                                        pilihKelas.daftar_siswa.map((siswa,ind)=>(
                                                            <tr>
                                                                <td>{ind+1}</td>
                                                                <td>{siswa.nama}</td>
                                                                <td>{siswa.jenis_kelamin}</td>
                                                                <td>
                                                                    <button className="btn btn-primary" onClick={()=>setUpdateSiswa(siswa.id)}>Update</button>
                                                                    <button className="ms-1 btn btn-danger" onClick={()=>deleteSiswa(siswa.id)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    :
                                                    <tr>
                                                        <td colSpan={4} className="text-center">Data Siswa Kelas Ini Belum Di Tambahkan</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" col-3">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">{pilihSiswa ? "id"+pilihSiswa.id:"Tambah Siswa"}</h6>
                            </div>
                            <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="nama" class="form-label">Nama</label>
                                    <input type="text" class="form-control" id="nama" aria-describedby="namaHelp" defaultValue={pilihSiswa? pilihSiswa.nama:""}/>
                                    <div id="namaHelp" class="form-text">Nama Panjang Siswa</div>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="">Jenis Kelamin</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="jenis_kelamin" id="pria" value="L" checked={pilihSiswa && pilihSiswa.jenis_kelamin == "L" ? true : false}/>
                                        <label class="form-check-label" for="pria">
                                            Laki-Laki
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="jenis_kelamin" id="wanita" value="P" checked={pilihSiswa && pilihSiswa.jenis_kelamin == "P" ? true : false}/>
                                        <label class="form-check-label" for="wanita">
                                            Perempuan
                                        </label>
                                    </div>
                                </div>
                                {
                                    messageError ? 
                                    <div className='bg-danger p-3 text-light my-3'>{messageError}</div>
                                    :
                                    <></>
                                }
                                <button type="submit" onClick={pilihSiswa?updateSiswa:tambahSiswa} class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    :
                    <></>
                }
                
            </div>
        </div>
    </div>
    )
}
export default DaftarSiswa;