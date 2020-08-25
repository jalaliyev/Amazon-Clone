import React, { Component } from "react";
import "../style/Home.css";
import Product from "./Product";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

class Home extends Component {
  state = {
    images: [
      {
        id: 0,
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
      },
      {
        id: 1,
        image:
          "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
      },
      {
        id: 2,
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg",
      },
      {
        id: 3,
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
      },
      {
        id: 4,
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
      },
      {
        id: 5,
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
      },
      {
        id: 6,
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
      },
      {
        id: 7,
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
      },
    ],
    id: 0,
    image:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
  };

  changeForImage = () => {
    var ID = this.state.id;
    ID++;
    if (ID === 7) ID = 0;
    this.setState({
      image: this.state.images[ID].image,
      id: ID,
    });
  };

  changePrevImage = () => {
    var ID = this.state.id;
    ID--;
    if (ID === -1) ID = 6;
    this.setState({
      image: this.state.images[ID].image,
      id: ID,
    });
  };

  render() {
    return (
      <div className="home">
        <img className="home_image" src={this.state.image} alt="" />
        <div className="image_change">
          <ArrowBackIosIcon
            onClick={() => this.changePrevImage()}
            className="image_back"
          />
          <ArrowForwardIosIcon
            onClick={() => this.changeForImage()}
            className="image_forward"
          />
        </div>

        {/* Product id, title, price, image, rating*/}
        {/* Product */}

        <div className="home_row">
          <Product
            id="12321341"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
            price={2099}
            rating={4}
          />
          <Product
            id="1343435"
            title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Silver"
            image="https://m.media-amazon.com/images/I/71ppucPX3wL._AC_UY327_FMwebp_QL65_.jpg"
            price={1599}
            rating={3}
          />
          <Product
            id="12453513"
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Gold (Latest Model)"
            image="https://m.media-amazon.com/images/I/71thf1SYnGL._AC_UY327_FMwebp_QL65_.jpg"
            price={949}
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id="1313531313"
            title='85" JU7000 7 Series Flat UHD 4K Smart 3D LED TV'
            image="https://images.samsung.com/is/image/samsung/uk_UE85JU7000TXXU_027_Front_black_10049519901398?$PD_GALLERY_L_SHOP_JPG$"
            price={2245.95}
            rating={5}
          />
          <Product
            id="13415144"
            title="TCL 50S425 50 inch 4K Smart LED Roku TV (2019)"
            image="https://m.media-amazon.com/images/I/71tN5cFBvFL._AC_UY327_FMwebp_QL65_.jpg"
            price={1999.99}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="12434421"
            title="Home DepotGE 4.8 cu. ft. White Front Load Washing Machine with OdorBlock UltraFresh Vent "
            image="https://images.homedepot-static.com/productImages/12895eb2-62e0-46dd-8dba-ea200ab626fe/svn/white-ge-front-load-washers-gfw650ssnww-64_1000.jpg"
            price={899.99}
            rating={3}
          />
          <Product
            id="12321421"
            title="Avanti RA7316PST 2-Door Apartment Size Refrigerator, Black with Platinum Finish"
            image="https://m.media-amazon.com/images/I/41DBhs6dY+L._AC_UY327_FMwebp_QL65_.jpg"
            price={1199}
            rating={3}
          />
          <Product
            id="1232411"
            title="Whynter ARC-12S 12,000 BTU Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter plus Storage bag for Rooms up to 400 sq ft"
            image="https://m.media-amazon.com/images/I/71gm8lVklVL._AC_UY327_FMwebp_QL65_.jpg"
            price={42.99}
            rating={5}
          />
        </div>
      </div>
    );
  }
}

export default Home;
