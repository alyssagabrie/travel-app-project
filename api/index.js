import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "26.07857196022241",
          tr_latitude: tr_lat ? tr_lat : "26.21124199897611",
          bl_longitude: bl_lng ? bl_lng : "-81.8224189291588",
          tr_longitude: tr_lng ? tr_lng : "-81.766661003186",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": "8160833b64mshdfc8dc5eb9ba71dp1bef01jsna35e79aa814c",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
