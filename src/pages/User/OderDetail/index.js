import "./OderDetail.css"
function OderDetail() {
    return (
        <div className="container OderDetail">
            <div className="OderDetail-top">
                <p>CHI TIẾT ĐƠN HÀNG</p>
            </div>
            <div className="OderDetail-content">
                <div className="OderDetail-content-item">Đơn hàng của tôi</div>
                <hr />
                <div className="OderDetail-content-item">
                    <p> Sản phẩm</p>
                    <p>Tổng cộng</p>
                </div>
                <div className="OderDetail-content-item">
                    <p>Laptop Asus VivoBook X509MA N5030/4GB/512GB/Win10 (EJ256T) </p>
                    <p>9.890.000đ</p>
                </div>
                <hr />
                <div className="OderDetail-content-item">
                    <p>Địa chỉ:</p>
                    <p>4, Phường Trần Phú, Thành phố Hà Giang, Tỉnh Hà Giang</p>
                </div>
                <hr />
                <div className="OderDetail-content-item">
                    <p> Số điện thoại:</p>
                    <p> 0337734087</p>
                </div>
                <hr />
                <div className="OderDetail-content-item"><p> Lưu ý: </p></div>
                <div className="OderDetail-content-item">
                    <p>Trạng thái:</p>
                    <p>Chưa xác nhận</p>
                </div>
                <hr />
                <div className="OderDetail-content-item">
                    <p>Tổng cộng:</p>
                    <p>9.890.000đ</p>
                </div>
            </div>
        </div>
    )
}
export default OderDetail