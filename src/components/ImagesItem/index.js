import './index.css'

const ImagesItem = props => {
  const {projectDetails} = props
  const {id, imageURL, thumbnail, category} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item${id}`}
        />
        <div className="project-item-details-container">
          <img src={thumbnail} alt="thumbnail" />
          <p className="project-item-description">{category}</p>
        </div>
      </li>
    </>
  )
}

export default ImagesItem
