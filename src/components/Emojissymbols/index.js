import './index.css'

const Emojissymbols = props => {
  const {eachOne, onImageclick} = props
  const {name, imageUrl} = eachOne

  const onEmojieclick = () => {
    onImageclick()
  }
  return (
    <li className="items">
      <div className="emojis-1">
        <button type="submit" className="button" onClick={onEmojieclick}>
          <img src={imageUrl} className="sad-style" alt={name} />
        </button>
        <p>{name}</p>
      </div>
    </li>
  )
}

export default Emojissymbols
