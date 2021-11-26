import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./index.scss";

export default function Button(props) {
	const className = [props.className];
	if (props.isPrimary) className.push("btn-primary");
	if (props.isLarge) className.push("btn-lg");
	if (props.isSmall) className.push("btn-sm");
	if (props.hasShadow) className.push("shadow");
	const onClick = () => {
		if (props.onClick) props.onClick();
	};

	if (props.isDisabled || props.isLoading) {
		if (props.isDisabled) className.push("disabled");
		return (
			<span className={className.join(" ")} style={props.style}>
				{props.isLoading ? (
					<>
						<span className="spinner-border spinner-border-sm mx-5"></span>
						<span className="sr-only">Loading...</span>
					</>
				) : (
					props.children
				)}
			</span>
		);
	}

	if (props.type === "link") {
		if (props.isExternal) {
			if (props.isBlock) {
				return (
					<div class="d-grid gap-2">
						<a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ? "_blank" : undefined} rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
							{props.children}
						</a>
					</div>
				);
			}
			return (
				<a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ? "_blank" : undefined} rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
					{props.children}
				</a>
			);
		} else {
			if (props.isBlock) {
				return (
					<div class="d-grid gap-2">
						<Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>
							{props.children}
						</Link>
					</div>
				);
			}
			return (
				<Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>
					{props.children}
				</Link>
			);
		}
	}

	if (props.isBlock) {
		return (
			<div class="d-grid gap-2">
				<button className={className.join(" ")} style={props.style} onClick={onClick}>
					{props.children}
				</button>
			</div>
		);
	}
	return (
		<button className={className.join(" ")} style={props.style} onClick={onClick}>
			{props.children}
		</button>
	);
}

Button.prototype = {
	type: propTypes.oneOf(["button", "link"]),
	onClick: propTypes.func,
	target: propTypes.string,
	href: propTypes.string,
	className: propTypes.string,
	isPrimary: propTypes.bool,
	isDisabled: propTypes.bool,
	isLoading: propTypes.bool,
	isSmall: propTypes.bool,
	isLarge: propTypes.bool,
	isBlock: propTypes.bool,
	isExternal: propTypes.bool,
	hasShadow: propTypes.bool,
};
