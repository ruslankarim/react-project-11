import {useLayoutEffect} from "react"
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function useMapbox (container, center, zoom) {

    mapboxgl.accessToken =
        "pk.eyJ1IjoicnVzbGFua2FyaW1vdiIsImEiOiJja3lxdDg2em4wZ2lqMnd0Z2pjanN3a3VwIn0.dCiSomsJqpNND24OE3AyxA";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: container,
            style: "mapbox://styles/mapbox/dark-v10",
            center: center,
            zoom: zoom
        });
    }, []);

}