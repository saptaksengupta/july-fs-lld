import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {

    const {_id, name, description, posterUrl} = movie;
    const navigate = useNavigate();
    const goToDetailsPage = () => {
        navigate("/movies/"+ _id, {state: {movie: movie}});
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={posterUrl}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={goToDetailsPage}>Show Details</Button>
            </CardActions>
        </Card>
    );
}