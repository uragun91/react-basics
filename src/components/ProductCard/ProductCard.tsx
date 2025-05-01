import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export function ProductCard({
  name,
  imgSrc,
}: {
  name: string;
  imgSrc: string;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={<Typography variant="h4">{name}</Typography>} />
      <CardMedia component="img" height="280" image={imgSrc} alt={name} />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
