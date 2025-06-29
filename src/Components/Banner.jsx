export const Banner = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.vectorstock.com/i/500p/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg" class="d-block " width={1600} height={400} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg" class="d-block"width={1600} height={400} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/006/605/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg" class="d-block"width={1600} height={400} alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}