import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTravelers from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import numberFormat from "utils/numberFormat";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function Hero(props) {
	const showMostPicked = () => {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	};

	return (
		<Container as="section" className="pt-4">
			<Row className="align-items-center mt-4">
				<Col className="pr-5" md={5}>
					<h1 className="fw-bold lh-1 mb-4">Forget Busy Work, Start Next Vacation</h1>
					<p className="text-muted mb-5 fw-light">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
					<Button variant="primary" className="shadow" onClick={showMostPicked}>
						Show Me Now
					</Button>
					<Row className="mt-5">
						<Col>
							<Image src={IconTravelers} alt={props.data.travelers} height={36} width={36} />
							<h6 className="mt-3">
								{numberFormat(props.data.travelers)} <span class="text-muted fw-light">Travelers</span>
							</h6>
						</Col>
						<Col>
							<Image src={IconTreasure} alt="Treasure" width={36} height={36} />
							<h6 className="mt-3">
								{numberFormat(props.data.treasures)} <span class="text-muted fw-light">Treasures</span>
							</h6>
						</Col>
						<Col>
							<Image src={IconCities} alt="Cities" width={36} height={36} />
							<h6 className="mt-3">
								{numberFormat(props.data.cities)} <span class="text-muted fw-light">Cities</span>
							</h6>
						</Col>
					</Row>
				</Col>
				<Col className="d-flex justify-content-end">
					<div
						style={{
							width: 520,
							height: 410,
							position: "relative",
						}}
					>
						<Image
							src={ImageHero}
							alt=""
							className="position-absolute"
							fluid
							style={{
								zIndex: 1,
								margin: "-30px 0 0  -30px",
								top: 0,
							}}
						/>
						<Image
							src={ImageHero_}
							alt=""
							fluid
							className="position-absolute"
							style={{
								margin: "0 -15px -15px 0",
							}}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
