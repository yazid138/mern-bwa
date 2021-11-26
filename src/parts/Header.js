import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BrandIcon from "./IconText";
import Button from "components/Button";

export default function Header(props) {
	const location = useLocation();
	const getNavLinkClass = (path) => {
		return location.pathname === path ? "active" : "";
	};

	return (
		<Navbar bg="none" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<BrandIcon />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as="div" className={`nav-item ${getNavLinkClass("/")}`}>
							<Button type="link" href="/">
								Home
							</Button>
						</Nav.Link>
						<Nav.Link as="div" className={`nav-item ${getNavLinkClass("/browse-by")}`}>
							<Button type="link" href="/browse-by">
								Browse By
							</Button>
						</Nav.Link>
						<Nav.Link as="div" className={`nav-item ${getNavLinkClass("/stories")}`}>
							<Button type="link" href="/stories">
								Stories
							</Button>
						</Nav.Link>
						<Nav.Link as="div" className={`nav-item ${getNavLinkClass("/agents")}`}>
							<Button type="link" href="/agents">
								Agents
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
