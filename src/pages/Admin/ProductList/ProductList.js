import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ProductList.css"
import { useState } from "react";
import { useEffect } from "react";
import ProductListData from "../../../services/ProductListService";

function ProductList() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductList();
    }, [])
    const getProductList = () => {
        ProductListData.getProductList().then((res) => {
            setProduct(res.data.content)

        })
    }

    return (
        <div className="movie-list-wrapper">
            <h2>Product List</h2>
            <Link className="btn-add" to={"/admin/product/post"}>
                Create New Product
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>OriginalPrice</th>
                        <th>SalePrice</th>
                        <th>Stock</th>

                    </tr>
                </thead>
                <tbody>
                    {product.map((pr) => {
                        return (
                            <tr key={pr.id}>
                                <td>{pr.id}</td>
                                <td>{pr.name}</td>
                                <td>{pr.description}</td>
                                <td>{pr.originalPrice}</td>
                                <td>{pr.salePrice}</td>
                                <td>{pr.stock}</td>

                                <td>
                                    <FontAwesomeIcon icon={faTrash}
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
export default ProductList