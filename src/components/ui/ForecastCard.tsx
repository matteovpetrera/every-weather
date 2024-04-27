import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function ForecastCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Next week forecast</CardTitle>
      </CardHeader>
      <CardContent>forecast</CardContent>
    </Card>
  );
}
