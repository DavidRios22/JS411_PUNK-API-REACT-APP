import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

export default function ListData(props) {
  const [isClicked, setIsClicked] = useState(true)

  const handleClick = () => {
    return setIsClicked(!isClicked)
  }

  return (
    <div key={props.data.id}>
      <Card sx={{ minWidth: 275, backgroundColor: "black", color: "white" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.data.tagline}
          </Typography>
          <Typography variant="body2">
            {props.data.description}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleClick()}>
            {isClicked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
