const API_URL = "https://rickandmortyapi.com/api";

export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}/character`);
    const data = await response.json();
    return data  
  } catch (error) {
    console.log(error);
  }
}

export async function getLaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
