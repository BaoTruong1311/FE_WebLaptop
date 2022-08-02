import { useEffect, useState } from "react"
import "./AdminProductPost.css"
import { useNavigate } from "react-router-dom";
import ProductListData from "../../services/ProductListService";
function AdminProductPost() {
    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [originalPrice, setOriginalPrice] = useState('')
    const [salePrice, setSalePrice] = useState('')
    const [description, setDescription] = useState('')
    let navigate = useNavigate();
    const [avatar, setAvatar] = useState()

    const handleSubmit = () => {
        const product = {
            name,
            stock,
            originalPrice,
            salePrice,
            description
        }
        console.log(name,
            stock,
            originalPrice,
            salePrice,
            description);
        ProductListData.postProduct(product)
            .then((res => {

            }))

    }
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        console.log(file.name);

    }
    useEffect(() => {
        return (() => {
            avatar && URL.revokeObjectURL(avatar.preview)

        })
    }, [avatar])

    return (
        <div className="list-movie">
            <form>
                <div className="form-group-container">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input value={name}
                            onChange={e => setName(e.target.value)}
                            class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Stock</label>
                        <input value={stock}
                            class="form-control"
                            onChange={e => setStock(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group-container">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">OriginalPrice</label>
                        <input value={originalPrice}
                            class="form-control"
                            onChange={e => setOriginalPrice(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">SalePrice</label>
                        <input value={salePrice}
                            class="form-control"
                            onChange={e => setSalePrice(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Description</label>
                    <textarea class="form-control"
                        value={description}
                        rows="3"
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>


                <div class="form-group form-image">
                    <label for="exampleFormControlTextarea1">File ảnh</label>
                    <input type="file"
                        onChange={handlePreviewAvatar}
                    />
                    {avatar && (
                        <img src={avatar.preview} alt="anh day ne" width="20%" />
                    )}

                </div>
            </form>
            <button onClick={handleSubmit}>Thêm phim</button>
        </div>
    )

}
export default AdminProductPost