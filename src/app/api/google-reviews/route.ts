import { NextResponse } from "next/server";
import axios from "axios";

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID; // Stocker l'ID du restaurant dans .env.local

export async function GET() {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`;

    const response = await axios.get(url);
    const data = response.data;

    if (data.status !== "OK") {
      return NextResponse.json({ error: data.status }, { status: 400 });
    }

    return NextResponse.json(data.result.reviews);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des avis" }, { status: 500 });
  }
}
