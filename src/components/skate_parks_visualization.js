import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-map-gl';
import * as parkData from './../data/skateboard-parks.json';

function SkateParkPOI() {
	const [selectedPark, setSelectedPark] = useState(null);

	useEffect(() => {
		const listener = e => {
			if (e.key === 'Escape') {
				setSelectedPark(null);
			}
		};
		window.addEventListener('keydown', listener);
		return () => {
			window.removeEventListener('keydown', listener);
		};
	});

	return (
		<>
			{parkData.features.map(park => (
				<Marker
					key={park.properties.PARK_ID}
					latitude={park.geometry.coordinates[1]}
					longitude={park.geometry.coordinates[0]}>
					<button
						className='marker'
						onClick={e => {
							e.preventDefault();
							console.log(park.properties.PARK_ID);

							setSelectedPark(park);
						}}>
						<img src='/images/skateboarding.svg' alt='Skate Park Icon' />
					</button>
				</Marker>
			))}
			{selectedPark ? (
				<Popup
					longitude={selectedPark.geometry.coordinates[0]}
					latitude={selectedPark.geometry.coordinates[1]}
					onClose={() => {
						setSelectedPark(null);
					}}>
					<div>
						<h2>{selectedPark.properties.NAME}</h2>
						<p>{selectedPark.properties.DESCRIPTIO}</p>
					</div>
				</Popup>
			) : null}
		</>
	);
}

export default SkateParkPOI;
