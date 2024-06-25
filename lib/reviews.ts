const apiKey = process.env.GOOGLE_API_ENDPOINT;

export async function fetchPlaceReviews(placeId: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?&place_id=${placeId}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data.result);

  return data;
}
