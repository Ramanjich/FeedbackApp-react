import './index.css'

const Responsecom = props => {
  const {imageUrl} = props
  console.log(imageUrl)
  return (
    <div className="love-response-con">
      <div className="love-card">
        <div>
          <img src={imageUrl} className="love-image" alt="love emoji" />
        </div>
        <h1>Thank You</h1>
      </div>
      <p>
        We will use your feedback to improve our customer support perfomance.
      </p>
    </div>
  )
}

export default Responsecom
