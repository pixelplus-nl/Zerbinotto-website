const apiKey = process.env.GOOGLE_API_ENDPOINT;

export async function fetchPlaceReviews(placeId: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cuser_ratings_total&place_id=${placeId}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();


  return data;
}
