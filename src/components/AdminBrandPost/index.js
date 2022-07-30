import { useEffect, useState } from "react"
import "./AdminBrandPost.css"
import { useNavigate } from "react-router-dom";
import BrandListDataService from "../../services/BrandListService";
function AdminBrandPost() {
    const [name, setName] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')

    let navigate = useNavigate();


    const handleSubmit = () => {
        const brand = {
            name,
            priority,
            status
        }
        console.log(name, priority, status);
        BrandListDataService.postBrandList(brand).then((res) => {
        })
        alert(`You successfully added movie name${name}`)
        navigate("/admin/brand")

    }


    return (
        <div className="list-movie">
            <form>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input value={name}
                        onChange={e => setName(e.target.value)}
                        class="form-control"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Priority</label>
                    <input value={priority}
                        class="form-control"
                        onChange={e => setPriority(e.target.value)}
                    />
                </div>


                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Status</label>
                    <input value={status}
                        class="form-control"
                        onChange={e => setStatus(e.target.value)}
                    />
                </div>



            </form>
            <button onClick={handleSubmit}>Thêm Brand</button>
        </div>
    )
}
export default AdminBrandPost