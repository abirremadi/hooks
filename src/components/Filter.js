
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Form} from 'react-bootstrap';

const Filter = ({HandleTitle, HandleRate}) => {
    return (
        <div>
       <Form style={{marginLeft : '1000px'}}>
         <Form.Group> 
         <Form.Control  onChange ={(e)=>HandleTitle(e.target.value) } type="text" placeholder="Search" />
         <StarRatingComponent 
          name="rate1" 
          starCount={10}
          onStarClick={(value)=> HandleRate(value)}
        
          
        />
         </Form.Group>
        </Form>
        </div>
    )
}
export default Filter
