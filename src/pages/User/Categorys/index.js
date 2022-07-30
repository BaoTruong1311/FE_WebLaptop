import "./Categorys.css"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import CategoryDataService from "../../../services/CategoryServices"
import { useEffect } from "react"
import ReactPaginate from "react-paginate"
function Categorys() {
    const [products, setProucts] = useState([])
    let { id } = useParams();
    useEffect(() => {
        getCategoryById(id)
    }, [products])
    const getCategoryById = (id) => {
        CategoryDataService.getCategoryById(id)
            .then((res) => {
                setProucts(res.data);
            })
            .catch((e) => console.log(e))

    }

    const handleCategory1 = () => {
        CategoryDataService.getProductBy5To10()
            .then((res) => {
                setProucts(res.data)
                console.log(res.data);
            })
            .catch((e) => console.log(e))
    }
    const handleCategory2 = () => {
        CategoryDataService.getProductBy10To20()
            .then((res) => {
                setProucts(res.data)
                console.log(res.data);
            })
            .catch((e) => console.log(e))
    }
    const handleCategory3 = () => {
        CategoryDataService.getProductByUnder20()
            .then((res) => {
                setProucts(res.data)
                console.log(res.data);
            })
            .catch((e) => console.log(e))
    }

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${e.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }
    return (
        <>

            <div className="container category">
                <div className="category-right">
                    <div className="category-right-trademark">
                        <div className="category-right-trademark-top">
                            Thương Hiệu
                        </div>
                        <div className="category-right-trademark-item">
                            <p> <input type="checkbox" />{"Macbook"}</p>
                            <p>   <input type="checkbox" />{"Acer"}</p>
                            <p> <input type="checkbox" />{"Asus"}</p>
                            <p>   <input type="checkbox" />{"Dell"}</p>
                            <p>   <input type="checkbox" />{"Hp"}</p>
                            <p>   <input type="checkbox" />{"Lenovo"}</p>

                        </div>
                    </div>
                    <div className="category-right-price">
                        <div className="category-right-price-top">Giá</div>
                        <div className="category-right-price-item">
                            <p><input type="checkbox"
                                onClick={handleCategory1}

                            />{"từ 5 triệu đến 10 triệu"}</p>
                            <p>  <input type="checkbox"
                                onClick={handleCategory2}
                            />{"từ 10 triệu đến 20 triệu"}</p>
                            <p>  <input type="checkbox"
                                onClick={handleCategory3}
                            />{"trên 20 triệu"}</p>
                        </div>
                        <button>Áp dụng</button>
                    </div>
                </div>
                <div className="category-left">
                    <div className="category-left-tilte"> Danh sách sản phẩm</div>
                    <div className="category-left-product">
                        <div className="container container3">
                            <section class="section-products">
                                <div class="container">

                                    <div class="row">


                                        {currentItems.map((produc, ind) => (
                                            <div class="col-md-6 col-lg-4 col-xl-3">
                                                <div id="product-1" class="single-product">
                                                    <div class="part-1">
                                                        <Link to={`/productdetail/${produc.id}`}>
                                                            <img src={`/assets/image2/${produc.imageLink1}`} alt="" />
                                                        </Link>

                                                        <ul>
                                                            <li>  <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></li>

                                                        </ul>
                                                    </div>
                                                    <div class="part-2" style={{ cursor: "pointer" }}>
                                                        <Link to={`/productdetail/${produc.id}`}>
                                                            <h3 class="product-title">{produc.name}</h3>
                                                            <h4 class="product-price">{produc.originalPrice}</h4>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel=" >"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={5}
                                        pageCount={pageCount}
                                        previousLabel="< "
                                        renderOnZeroPageCount={null}
                                        containerClassName="pagination"
                                        pageClassName="page-num"
                                        previousLinkClassName="page-num"
                                        nextLinkClassName="page-num"
                                        activeLinkClassName="active"
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )


}
export default Categorys