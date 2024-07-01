"use client";

import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

export default function GoogleMap(props: any) {
  return (
    <APIProvider apiKey={`${props.apiKey}`}>
      <Map
        mapId="5588886"
        style={{ width: "100%", height: "40rem" }}
        defaultCenter={{ lat: 50.85083, lng: 5.6924 }}
        defaultZoom={19}
        disableDefaultUI={true}>
        <AdvancedMarker
          key="Zerbinotto"
          position={{ lat: 50.85083, lng: 5.6924 }}>
          <Pin glyphColor={"#000"} borderColor={"#000"} />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}
