<template>
  <section class="location-map" :style="`height:${height}px`">
    <GMap
      ref="gMap"
      language="ru"
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :options="{fullscreenControl: false, styles: mapStyle}"
      :zoom="18"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
        :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{maxWidth: 200}">
          <code>
            lat: {{ location.lat }},
            lng: {{ location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapCircle :options="circleOptions"/>
    </GMap>

  </section>
</template>

<script>
const apiKey = 'AIzaSyBSqlAu4kiwfh5iT0RrBRec9BTWDxzybuw';

export default {
  props: {
    height: Number
  },
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 53.334871,
          lng: 50.289675
        },
      ],
      pins: {},
      // pins: {
      //   selected: "data:image/png;base64,iVBORw0KGgo...",
      //   notSelected: "data:image/png;base64,iVBORw0KGgo..."
      // },
      mapStyle: [
        { "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" } ] },
        { "elementType": "labels.text", "stylers": [ { "color": "#517a1a" }, { "visibility": "simplified" } ] },
        { "featureType": "poi.business", "stylers": [ { "visibility": "off" } ] },
        { "featureType":"poi.park", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] } ],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/mixins.scss';

.location-map {
  position: relative;
  // border: 1px solid red;
  // height: 500px;
  background: $background;
  z-index: 7000;
  .GMap {
    height: 100%;
    .GMap__Wrapper {
      height: 100%;
    }
  }
}

</style>
