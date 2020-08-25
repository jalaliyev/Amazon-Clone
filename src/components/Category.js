/* import React, { Component } from "react";
import "../style/Category.css";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Category extends Component {
  state = {
    items: [
      {
        id: 0,
        title: "AmazonBasics",
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
      },
      {
        id: 1,
        title: "Electronics",
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
      },
      {
        id: 2,
        title: "Computers & Accessories",
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
      },
      {
        id: 3,
        title: "Beauty picks",
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
      },
      {
        id: 4,
        title: "Get fit at home",
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg",
      },
    ],
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basics">
            <Product
              title={this.state.items.title}
              image={this.state.items.image}
            />
            ;
            { {this.state.basics.map((prod) => {
              <Product
                title={prod.title}
                image={prod.image}
                price={prod.price}
                rating={prod.rating}
              />;
            })} }
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Category;
 */
