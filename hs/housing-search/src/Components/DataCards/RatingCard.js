import { Card, CardContent, Typography, CardMedia, IconButton } from "@material-ui/core";
import styles from './RatingCard.css';

const RatingCard = ({ hospital_rating = 0, school_rating = 0, restaurant_rating = 0, park_rating = 0, gym_rating = 0 }) => {
    let avg = (hospital_rating + school_rating + restaurant_rating + park_rating + gym_rating) / 5
    return (
        <Card className='rating-card'>
            <CardContent>
                <h3>Accumulative Rating</h3>
                <p className='hr'>{`Hospital: ${hospital_rating.toFixed(1)}`}</p>
                <p className='sr'>{`School: ${school_rating.toFixed(1)}`}</p>
                <p className='rr'>{`Restaurant: ${restaurant_rating.toFixed(1)}`}</p>
                <p className='pr'>{`Park: ${park_rating.toFixed(1)}`}</p>
                <p className='gr'>{`Gym: ${gym_rating.toFixed(1)}`}</p>
                <h4>{`On Average: ${avg.toFixed(1)}`}</h4>
            </CardContent>
        </Card>
    )
}

export default RatingCard;