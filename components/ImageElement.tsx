import React from 'react'

const ImageElement = (props) => {
  return (
      <div>
          <img {...props.attributes} src={props.element.url} alt={ "alt img" } />
    </div>
  )
}

export default ImageElement