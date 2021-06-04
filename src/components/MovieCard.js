import React from 'react'
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movieCard}) => {
    return (
        <div>
            <Card style={{ width: '18rem'}}>
  <Card.Body>
  <Card.Img style={{height:'400px'}} variant="top" src={movieCard.posterUrl} />
    <Card.Title>{movieCard.title}</Card.Title>
    <Card.Text>
      {movieCard.description}
    </Card.Text>
    <Button variant="primary">Download</Button>
    <StarRatingComponent 
          starCount={8}
          value={movieCard.rate}
        />
  </Card.Body>
</Card>
        </div>
    )
}
export default MovieCard
