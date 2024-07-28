import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../axios/AxiosInstance";


function Walas(){
    const token = localStorage.getItem("token");
    const [kelas, setKelas] = useState([]);
    const [walas, setWalas] = useState([]);
    const [notificationMessage,setNotificationMessage] = useState();
    const [pilihWalas, setPilihWalas] = useState();
    const [messageError, setMessageError] = useState();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
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
        }).catch(err=>{
            console.log(err)
        })
        resetForm();
    },[])
    const tambahWalas = (e) => {
        e.preventDefault();
        const id_kelas = document.getElementById("id_kelas").value;
        const nama = document.getElementById("nama").value;
        AxiosInstance.post('/walas',{
            "id_kelas":id_kelas,
            "nama":nama
        },{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            resetForm()
            setMessageError(null);
            handleNotif("Tambah Berhasil");
        }).catch(err=>{
            const errorMessage = Object.entries(err.response.data.errors)
            setMessageError(errorMessage[0][1][0]);
        })
    }
    const resetForm = () => {
        document.getElementById('nama').value = "";
        AxiosInstance.get("/walas")
        .then(response=>{
            setWalas(response.data.data);
        }).catch(err=>{
            console.log(err)
        })
    }

    const deleteSiswa = (id) => {
        AxiosInstance.delete('/walas/'+id,{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            handleScrollToTop()
            resetForm()
            handleNotif("Delete Berhasil")
            setMessageError(null);
        }).catch(err=>{
            console.log(err);
        })
    }
    const setUpdateWalas = (id) => {
        handleScrollToTop()
        setMessageError(null)
        resetForm()
        AxiosInstance.get('/walas/'+id,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(response=>{
            document.getElementById("nama").value = response.data.data.nama;
            setPilihWalas(response.data.data);
        }).catch(err=>{
            console.log(err);
        });
    }
    const handleNotif = (message) => {
        setNotificationMessage(message);
        setTimeout(() => {
            setNotificationMessage(null);
        }, 5000);
    };
    const updateWalas  = (e) =>{
        e.preventDefault();
        const id_kelas = document.getElementById("id_kelas").value;
        const nama = document.getElementById("nama").value;
        AxiosInstance.post('/walas/'+pilihWalas.id,{
            "nama":nama,
            "id_kelas":id_kelas,
        },{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            resetForm()
            handleNotif("Update Berhasil");
            setMessageError(null);
            setPilihWalas(null);
        }).catch(err=>{
            const errorMessage = Object.entries(err.response.data.errors)
            setMessageError(errorMessage[0][1][0]);
        })  
    }
    return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Daftar Walas</h1>
                <p className="mb-4"> Daftar Walas merupakan data walas yang akan ditampilkan pada halaman website.</p>
                {
                    notificationMessage ?
                    <div class="alert alert-success" role="alert">
                        {notificationMessage}
                    </div>
                    :
                    <></>
                }
                {
                    walas ? 
                    <div className="d-flex justify-content-around mt-2">
                        <div className="col-8">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Wali Kelas</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Nomor</th>
                                                    <th>Nama</th>
                                                    <th>Nama Kelas</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    walas.length != 0 ?
                                                        walas.map((walas,ind)=>(
                                                            <tr>
                                                                <td>{ind+1}</td>
                                                                <td>{walas.nama}</td>
                                                                <td>{walas.nama_kelas}</td>
                                                                <td>
                                                                    <button className="btn btn-primary" onClick={()=>setUpdateWalas(walas.id)}>Update</button>
                                                                    <button className="ms-1 btn btn-danger" onClick={()=>deleteSiswa(walas.id)}>Delete</button>
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
                                <h6 className="m-0 font-weight-bold text-primary">{pilihWalas != null ?"Update Walas":"Tambah Walas"}</h6>
                            </div>
                            <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="nama" class="form-label">Nama</label>
                                    <input type="text" class="form-control" id="nama" aria-describedby="namaHelp" defaultValue={pilihWalas? pilihWalas.nama:""}/>
                                    <div id="namaHelp" class="form-text">Nama Panjang Guru</div>
                                </div>
                                <div class="mb-3">
                                    <label for="id_kelas" class="form-label">Nama Kelas</label>
                                    <select id="id_kelas" class="form-select">
                                        <option value={0} selected={ pilihWalas?false:true} disabled>Pilih Kelas</option>
                                        {
                                            kelas ? 
                                            kelas.map((kelas)=>(
                                                <option value={kelas.id} selected={pilihWalas && pilihWalas.nama_kelas === kelas.nama_kelas ? true : false}>{kelas.nama_kelas}</option>
                                            )):
                                            <></>
                                        }
                                    </select>
                                </div>
                                {
                                    messageError ? 
                                    <div className='bg-danger p-3 text-light my-3'>{messageError}</div>
                                    :
                                    <></>
                                }
                                <button type="submit" onClick={pilihWalas?updateWalas:tambahWalas} class="btn btn-primary">Submit</button>
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
export default Walas;