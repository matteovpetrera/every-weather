import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function GraphCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Graph card</CardTitle>
      </CardHeader>
      <CardContent>graph</CardContent>
    </Card>
  );
}
