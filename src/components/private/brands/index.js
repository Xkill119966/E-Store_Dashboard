import React, { Component } from "react";
import AddBrand from "./form/AddBrand";
import BrandsList from "./BrandsList";
import { Nav, NavItem } from "reactstrap";
import { Link, Switch, Route, NavLink } from "react-router-dom";

class Brands extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3 ">
						<Link to="/products">
							{" "}
							<i class=" fa fa-arrow-left mr-2" />
							Back to Products
						</Link>
					</div>
					<div className="col-md-9 card  py-2">
						<Nav pills>
							<NavLink
								className="nav-link mx-1"
								to="/brand"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Brands List
							</NavLink>

							<NavLink
								className="nav-link mx-1"
								to="/brand/add"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Add Brand
							</NavLink>
						</Nav>
					</div>
				</div>

				<Switch>
					<Route exact path="/brand" render={() => <BrandsList />} />
					<Route path="/brand/add" render={() => <AddBrand />} />
				</Switch>
			</div>
		);
	}
}

export default Brands;
