import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../axios/AxiosInstance";
import Loader from "../../Komponen/Loader/Loader";


function Kelas(){
    const token = localStorage.getItem("token");
    const [kelas, setKelas] = useState([]);
    const [jurusan, setJurusan] = useState([]);
    const [notificationMessage,setNotificationMessage] = useState();
    const [pilihKelas, setPilihKelas] = useState();
    const [messageError, setMessageError] = useState();

    // loading
    const [loadingForm, setLoadingForm] = useState(false);
    const [loadingTable, setLoadingTable] = useState(false);

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
        })
        .catch(err=>{
            console.log(err)
        })

        AxiosInstance.get("/jurusan",{
            headers:{
                Authorization:"Bearer "+token
            }
        })
        .then(response=>{
            setJurusan(response.data.data);
        })
        .catch(err=>{
            console.log(err)
        })
        resetTable()
    },[])
    const tambahKelas = (e) => {
        e.preventDefault();
        const tingkat= document.getElementById("tingkat").value;
        const nomor = document.getElementById("nomor").value;
        const id_jurusan = document.getElementById("id_jurusan").value;
        setLoadingForm(true);
        AxiosInstance.post('/kelas',{
            "id_jurusan":id_jurusan,
            "tingkat":tingkat,
            "nomor":nomor
        },{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            resetTable()
            setMessageError(null);
            handleNotif("Tambah Berhasil");
            setLoadingForm(false);
        }).catch(err=>{
            if(err.response.status === 401){
                const errorMessage = Object.entries(err.response.data.errors)
                setMessageError(errorMessage[0][1][0]);
            }else{
                console.log(err.response.status);
            }
        })
    }
    const resetForm = () => {
        document.getElementById('tingkat').value = "";
        document.getElementById('nomor').value = "";
    }
    const resetTable = () => {
        setLoadingTable(true)
        AxiosInstance.get("/kelas")
        .then(response=>{
            setKelas(response.data.data);
            setLoadingTable(false)
        }).catch(err=>{
            console.log(err)
        })
    }

    const deleteKelas = (id) => {
        AxiosInstance.delete('/kelas/'+id,{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            handleScrollToTop()
            resetForm()
            resetTable()
            handleNotif("Delete Berhasil")
            setMessageError(null);
        }).catch(err=>{
            console.log(err);
        })
    }
    const setUpdateKelas = (id) => {
        setLoadingForm(true);
        handleScrollToTop()
        setMessageError(null)
        AxiosInstance.get('/kelas/'+id,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(response=>{
            setLoadingForm(false);
            console.log(response);
            setPilihKelas(response.data.data);
        }).catch(err=>{
            console.log(err);
        });
    }
    const clearForm = () => {
        resetForm();
        setPilihKelas(null);
    }
    const handleNotif = (message) => {
        setNotificationMessage(message);
        setTimeout(() => {
            setNotificationMessage(null);
        }, 5000);
    };
    const updateKelas  = (e) =>{
        e.preventDefault();
        const nomor = document.getElementById("nomor").value;
        const id_jurusan = document.getElementById("id_jurusan").value;
        const tingkat= document.getElementById("tingkat").value;
        setLoadingForm(true);
        AxiosInstance.post('/kelas/'+pilihKelas.id,{
            "nomor":nomor,
            "id_jurusan":id_jurusan,
            "tingkat":tingkat
        },{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(response=>{
            resetTable()
            handleNotif("Update Berhasil");
            setMessageError(null);
            setPilihKelas(null);
            setLoadingForm(false);
    }).catch(err=>{
        if(err.response.status === 401){
            const errorMessage = Object.entries(err.response.data.errors)
            setMessageError(errorMessage[0][1][0]);
        }else{
            console.log(err.response.status);
        }
        })  
    }
    return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Daftar Kelas</h1>
                <p className="mb-4"> Daftar Kelas merupakan data kelas yang akan ditampilkan pada halaman website.</p>
                {
                    notificationMessage ?
                    <div class="alert alert-success" role="alert">
                        {notificationMessage}
                    </div>
                    :
                    <></>
                }
                {
                    kelas ? 
                    <div className="d-flex justify-content-around mt-2">
                        <div className="col-8">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Kelas</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        {
                                            loadingTable ? 
                                            <div className="d-flex justify-content-center"><Loader/></div>
                                            :
                                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Nomor</th>
                                                        <th>Nama Kelas</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        kelas.length !== 0 ?
                                                            kelas.map((kelas,ind)=>(
                                                                <tr>
                                                                    <td>{ind+1}</td>
                                                                    <td>{kelas.nama_kelas}</td>
                                                                    <td>
                                                                        <button className="btn btn-primary" onClick={()=>setUpdateKelas(kelas.id)}>Update</button>
                                                                        <button className="ms-1 btn btn-danger" onClick={()=>deleteKelas(kelas.id)}>Delete</button>
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
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            {
                                loadingForm ? 
                                <div className="border border-light shadow align-self-center d-flex justify-content-center"><Loader/></div>
                                :
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">{pilihKelas != null ?"Update Kelas":"Tambah Kelas"}</h6>
                                    </div>
                                    <div className="card-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="tingkat" class="form-label">Tingkat</label>
                                            <input type="text" class="form-control" id="tingkat" aria-describedby="tingkatHelp"  defaultValue={pilihKelas? pilihKelas.tingkat:""}/>
                                            <div id="tingkatHelp" class="form-text">Tingkat kelas yang terdiri dari (X,XI,XII)</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="id_jurusan" class="form-label">Nama Jurusan</label>
                                            <select id="id_jurusan" class="form-select">
                                                <option value={0} selected={ pilihKelas?false:true} disabled>Pilih Kelas</option>
                                                {
                                                    jurusan ? 
                                                    jurusan.map((jurusan)=>(
                                                        <option value={jurusan.id} selected={pilihKelas && pilihKelas.id_jurusan === jurusan.id ? true : false}>{jurusan.nama}</option>
                                                    )):
                                                    <></>
                                                }
                                            </select>
                                            <div class="form-text">Pilih Jurusan Kelas </div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="nomor" class="form-label">Nomor</label>
                                            <input type="number" class="form-control" id="nomor" aria-describedby="nomorHelp" defaultValue={pilihKelas? pilihKelas.nomor:""}/>
                                            <div id="nomorHelp" class="form-text">Nomor belakang pada kelas</div>
                                        </div>
                                        {
                                            messageError ? 
                                            <div className='bg-danger p-3 text-light my-3'>{messageError}</div>
                                            :
                                            <></>
                                        }
                                            <button type="submit" onClick={pilihKelas?updateKelas:tambahKelas} class="btn btn-primary">Submit</button>
                                        {
                                            pilihKelas?
                                            <button type="submit" onClick={()=>clearForm()} class="btn btn-danger ms-2">Clear</button>
                                            :
                                            <></>
                                        }

                                        </form>
                                    </div>
                                </div>
                            }

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
export default Kelas;

