import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function MapCard(props: any) {
  const apikey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const city = props.city;
  let url = `https://maps.googleapis.com/maps/api/staticmap?center=${city}&zoom=11&size=700x700&key=${apikey}`;

  if (city === "") {
    url = `https://maps.googleapis.com/maps/api/staticmap?center=&zoom=2&size=700x700&key=${apikey}`;
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Map Card</CardTitle>
        </CardHeader>
        <CardContent className="justify-center h-5/6">
          <div className="h-full">
            <img
              src={url}
              className="rounded-xl object-cover h-full w-full"
            ></img>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Map Card</CardTitle>
        </CardHeader>
        <CardContent className="justify-center h-5/6">
          <div className="h-full">
            <img
              src={url}
              className="rounded-xl object-cover h-full w-full"
            ></img>
          </div>
        </CardContent>
      </Card>
    );
  }
}
