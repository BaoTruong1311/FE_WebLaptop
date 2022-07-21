import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./BrandList.css"
import BrandListDataService from "../../../services/BrandListService";
import { useState } from "react";
import { useEffect } from "react";

function BrandList() {
    const [brand, setBrand] = useState([])

    useEffect(() => {
        getAllBrands();
    }, [brand])
    const getAllBrands = () => {
        BrandListDataService.getBrandList().then((res) => {
            setBrand(res.data)
        })
    }

    const handleDelete = (id) => {
        BrandListDataService.deleteBrandList(id).then((res) => {
            getAllBrands()
        })
    }

    return (
        <div className="movie-list-wrapper">
            <h2>Brand List</h2>
            <Link className="btn-add" to={"/admin/brand/post"}>
                Create New Brand
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Image</th>


                    </tr>
                </thead>
                <tbody>
                    {brand.map((br) => {
                        return (
                            <tr key={br.id}>
                                <td>{br.id}</td>
                                <td>{br.name}</td>
                                <td>{br.priority}</td>
                                <td>{br.status}</td>
                                <td>
                                    <FontAwesomeIcon icon={faTrash} onClick={() => (handleDelete(br.id))}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}
export default BrandList