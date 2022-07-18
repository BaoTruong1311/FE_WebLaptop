import "./ProductDetail.css"
import product from "../../../assets/image/product1.jpeg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../../assets/image/product3.jpeg"

const products = Array.from({ length: 16 * 1 }, (_, i) => i)


function ProductDetail() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container product">
            <div className="flex-box">
                <div className="left">
                    <div className="big-img">
                        <img src={product} alt="" />
                    </div>
                    <div className="images">
                        <div className="small-img"><img src={product} alt="" /></div>
                        <div className="small-img"><img src={product} alt="" /></div>
                        <div className="small-img"><img src={product} alt="" /></div>
                        <div className="small-img"><img src={product} alt="" /></div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-name">
                        Laptop Apple MacBook Air 2020 i3 1.1GHz/8GB/256GB (MWTL2SA/A)
                    </div >
                    <div className="right-price">
                        28.990.000đ
                    </div >
                    <div className="right-cpu span">
                        <span>CPU:</span>
                        <span>
                            Intel Core i3 Thế hệ 10, 1.10 GHz</span>
                    </div >
                    <div className="right-ram span">
                        <span>RAM:</span>
                        <span>
                            8 GB, LPDDR4X (On board), 3733 MHz</span>
                    </div >
                    <div className="right-o-cung span">
                        <span>Ổ cứng:</span>
                        <span>
                            SSD: 256 GB</span>
                    </div >
                    <div className="right-hdh span">
                        <span>Hệ điều hành:</span>
                        <span>
                            Mac OS</span>
                    </div >
                    <div className="right-window span">
                        <span>Màn hình:</span>
                        <span>

                            13.3 inch, Retina (2560 x 1600)</span>
                    </div >
                    <div className="right-design span">
                        <span>Thiết kế:</span>
                        <span>

                            Vỏ kim loại nguyên khối, PIN liền</span>
                    </div >
                    <div className="right-size span">
                        <span>Kích thước:</span>
                        <span>
                            Dày 4.1 mm đến 16.1 mm, 1.29 kg</span>
                    </div >
                    <button className="right-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Thêm vào giỏ</span>

                    </button>
                </div>

            </div>
            <div className="bottom">
                <div className="bottom-des">
                    <p className="bottom-des-title">Thông tin sản phẩm</p>
                    <p className="bottom-des-conttent">MacBook Air 2020 i3 mới với thiết kế sang trọng, hiệu năng khá, bàn phím Magic lần đầu tiên xuất hiện trên dòng Macbook Air. Với nhiều tính năng hiện đại, đây là chiếc MacBook Air rất đáng sở hữu với mức giá gần như rẻ nhất từ trước đến nay. "Cân tất" ứng dụng văn phòng MacBook Air phiên bản 2020 có cấu hình gồm CPU Intel Core i3 thế hệ 10 mới nhất hiện nay, RAM 8 GB có nhiều cải tiến, khả năng đồ họa cải thiện tới 80% so với thế hệ 2019. Khi sử dụng các thao tác cơ bản như tách nền, cắt ghép hình ảnh trên Photoshop hay mở một lúc khoảng 20 tab Chrome, máy hoạt động mượt và không có hiện tượng giật lag. Máy còn trang bị card đồ họa tích hợp Intel Iris Plus hỗ trợ đồ họa tốt hơn khi sử dụng thiết kế đồ họa 2D. Laptop vận hành nhanh chóng nhờ có ổ cứng SSD 256 GB mở máy cực nhanh, xử lí trơn tru các tác vụ thông thường. Bộ nhớ 256 GB đủ rộng để lưu được rất nhiều dữ liệu. Theo như Apple công bố, MacBook Air 2020 có thời lượng pin sử dụng được khoảng 10 giờ liên tục. Với thời lượng dài như vậy, MacBook đủ sức đồng hành cùng bạn cả ngày dài học tập và làm việc. Hiển thị sắc nét, màu sắc sống động với công nghệ TrueTone Màn hình Retina (2560 x 1600) rộng 13.3 inch trứ danh cho hình ảnh sắc nét đến từng chi tiết, màu sắc chính xác hơn bao giờ hết với công nghệ TrueTone - tinh chỉnh màu sắc tự động tùy theo môi trường sử dụng. Ngoài ra, góc nhìn của máy cũng rộng hơn nhờ có công nghệ IPS đem lại trải nghiệm nhìn đã mắt, chìm đắm trong không gian hình ảnh sống động. Bàn phím Magic và trackpad cao cấp Ở phiên bản MacBook Air 2020, Apple đã sử dụng bàn phím kéo cắt thay vì bàn phím cánh bướm và sử dụng bàn phím như các thế hệ trước. Bàn phím này có hành trình phím 1 mm, độ nảy cao cho cảm giác gõ phím êm ái, soạn thảo nhanh. Trackpad cảm ứng lực có kích thước lớn hơn 20% tốc độ nhanh, dễ điều khiển với đa dạng cử chỉ như chụm, thu phóng,... Mỏng nhẹ, sang trọng từ kim loại tái chế MacBook Air 2020 giữ nguyên thiết kế sang trọng quen thuộc. Với vỏ kim loại nguyên khối cùng các góc cạnh được vát gọt tỉ mỉ, MacBook Air mang đến vẻ ngoài hoàn hảo, mỏng nhẹ đầy đẳng cấp. Máy có trọng lượng 1.29 kg, mỏng chỉ 16.1 mm, kích thước nhỏ gọn dễ dàng cho vào túi xách hoặc balo đem theo bên mình. Bảo mật an toàn Các sản phẩm của Apple vốn chưa bao giờ làm người dùng thất vọng về khả năng bảo mật. MacBook Air 2020 cũng sử dụng chip bảo mật T2 như các đàn anh đi trước của mình. Tính năng Touch ID - bảo mật bằng vân tay giúp bạn mở máy cực nhanh, thanh toán dễ dàng qua Apple Pay. Bên cạnh đó, “Hey Siri” luôn sẵn sàng lắng nghe để hỗ trợ bạn. Máy sử dụng hệ điều hành MacOS đem lại nhiều tiện ích cùng với chế độ bảo mật cao cho người dùng. Apple trang bị cho MacBook Air 2020 i3 2 cổng Thunderbolt 3 (USB-C) hiện đại để kết nối cắm sạc và truyền dữ liệu hay kết nối với các thiết bị khác. Với cấu hình vừa đủ, thiết kế mỏng nhẹ, sang trọng, Macbook Air 2020 i3 là một món quà dành cho dân văn phòng hay doanh nhân thường xuyên đi công tác, làm việc với máy tính trong lúc di chuyển. Bài viết này có hữu ích cho Bạn không ? Cảm ơn bạn đã đánh giá bài viết này ! Để bài viết đạt chất lượng tốt hơn cho những lần sau! Mời Bạn chia sẻ thêm thông tin về mình. Hữu ích Không Hữu ích Chọn độ tuổi 18-24 25-34 35-44 45-54 55-64 65+ Chọn giới tính Nam Nữ Gửi góp ý Cảm ơn về thông tin bạn đã chia sẻ. Với mục tiêu nâng cao chất lượng bài viết. thegioididong sẽ luôn lắng nghe mọi ý kiến của bạn Mời bạn góp ý để chúng tôi phục vụ tốt hơn Hãy để lại thông tin để được hỗ trợ khi cần thiết (Không bắt buộc): Anh Chị Gửi góp ýCam kết bảo mật thông tin cá nhân</p>


                </div>
            </div>
            <div className="container container1">
                <section class="section-products">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-md-8 col-lg-6">
                                <div class="header">
                                    <h3>Cửa Hàng Laptop</h3>
                                    <h2>Sản Phẩm Mới</h2>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <Slider {...settings}>
                                {products.map((produc, ind) => (
                                    <div class="">
                                        <div id="product-1" class="single-product">
                                            <div class="part-1">
                                                <img src={product1} alt="" />
                                                <ul>
                                                    <li><i class="fas fa-shopping-cart"></i></li>
                                                    <li><i class="fas fa-heart"></i></li>
                                                    <li><i class="fas fa-plus"></i></li>
                                                    <li><i class="fas fa-expand"></i></li>
                                                </ul>
                                            </div>
                                            <div class="part-2">
                                                <h3 class="product-title">Macbook Air 2017</h3>
                                                <h4 class="product-old-price">23.000.000</h4>
                                                <h4 class="product-price">21.000.000</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </Slider>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}
export default ProductDetail