import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  let rain_url =
    "https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.webp?a=1&b=1&s=612x612&w=0&k=20&c=IHFiO-8FNYfSGZ6jKNFtVL8ELcm3BK7kuokDvSq90tU=";

  let hot_url =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";

  let cold_url =
    "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div>
      <div className="cardBOX">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity > 80
                  ? rain_url
                  : info.temp > 20
                  ? hot_url
                  : cold_url
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}&nbsp;{
                info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temp > 20
                  ? <WbSunnyIcon/>
                  : <AcUnitIcon/>
              }
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <p>City : {info.city}</p>
                <p>Temperature : {info.temp}&deg;C</p>
                <p>Humidity : {info.humidity}</p>
                <p>Temp-min : {info.temp_min}</p>
                <p>Temp-max : {info.temp_max}</p>
                <p>
                  The weather can be described as {info.weather} and feels like
                  {info.feels_like}
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
