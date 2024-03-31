// Write your code here
import React, {useState} from 'react'
import {Description, Button} from './styledComponents'

const ReadMoreReadLess = ({reactHooksDescription}) => {
  const [isFullDescription, setIsFullDescription] = useState(false)

  const toggleDescription = () => {
    setIsFullDescription(!isFullDescription)
  }

  return (
    <div>
      <Description>
        {isFullDescription
          ? reactHooksDescription
          : reactHooksDescription.slice(0, 170)}
      </Description>
      <Button onClick={toggleDescription}>
        {isFullDescription ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  )
}

export default ReadMoreReadLess
