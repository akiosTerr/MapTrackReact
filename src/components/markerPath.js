import React, { useState } from 'react';
import { Marker, Popup, Layer } from 'react-map-gl';
import * as paths from './../data/paths.json';
import { v4 } from 'uuid';

export default function MarkerPath() {
	const parkLayer = {
		id: 'landuse_park',
		type: 'fill',
		source: 'mapbox',
		'source-layer': 'landuse',
		filter: ['==', 'class', 'park']
	};

	return (
		<>
			{paths.trackPoints.map(point => (
				<Marker
					key={point.id}
					latitude={point.coordinates[1]}
					longitude={point.coordinates[0]}>
					<button
						className='marker-pin'
						onClick={e => {
							e.preventDefault();
							console.log(point.id);
						}}>
						<img src='/images/map-marker.png' alt='pin Icon' />
					</button>
				</Marker>
			))}
			<Layer {...parkLayer} />
		</>
	);
}
