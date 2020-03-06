import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import SkateParkPOI from './components/skate_parks_visualization';
import MarkerPath from './components/markerPath';

function App() {
	const [viewport, setViewport] = useState({
		latitude: 45.421106,
		longitude: -75.690308,
		width: '100vw',
		height: '100vh',
		zoom: 10
	});

	var setMarker = () => {};

	return (
		<div>
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				mapStyle='mapbox://styles/akiosdev/ck7577bk70xp01ileb5wfvs0h'
				onViewportChange={setViewport}>
				<MarkerPath />
				<SkateParkPOI />
			</ReactMapGL>
		</div>
	);
}

export default App;
