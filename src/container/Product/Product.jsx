import React, {Component, Fragment} from 'react';
import './Product.css';

class Product extends Component {
    // ==== UNTUK MENG-UPDATE NILAI COUNT ====
    // statefull component > mempunyai state memiliki kemampuan ketika berubah dia akan merubah / merender ulang sesuai state tersebut
    state = {
        order: 0
    }

    // membuat function untuk tombol +
    handlePlus = () => {
        // alert('berhasil di tambahkan')
        // mengupdate value order 
        this.setState({
            // isikan berdasarkan objek yang ada di state
            // ketika diklik tombol + maka nilai state order + 1
            order: this.state.order + 1
        })
    }

    // membuat function untuk tombol - 
    handleMinus = () => {
        // alert('berhasil di kurang')
        // jika nilai dari state yang objeknya lebih besasr dari 0
        if(this.state.order > 0){
            // this.state.order (nlai sebelumnya) - 1 (nilai yang baru)
            this.setState({
                order: this.state.order - 1
            })
        }
    }
    render() {
        return (
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="https://st2.depositphotos.com/32350788/44331/v/600/depositphotos_443314574-stock-illustration-online-shop-logo-design-template.jpg" alt="" />
                </div>
                <div className="troley">
                    <img src="https://img2.pngdownload.id/20180515/zfw/kisspng-shopping-cart-logo-shopping-bags-trolleys-5afb65b09c72d4.3564791415264250086408.jpg" alt="" />
                 {/* cara memanggil state > this.state.(panggil key-nya) */}
                    <div className="count">{this.state.order}</div>
                </div>
            </div>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="" alt="" />
                </div>
                <p className="product-title">Daging Ayam</p>
                <p className="product-price">Rp. 410.000</p>
                <div className="counter">
                    {/* untuk memanggil function tombol - > onclick = {this.handleMinus} */}
                    <button className="minus" onClick = {this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    {/* untuk memanggil function tombol - > onclick = {this.handlePlus} */}
                    <button className="plus" onClick = {this.handlePlus}>+</button>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Product;