import Emojissymbols from '../Emojissymbols'

import './index.css'

const Emojiscon = props => {
  const {emojis, onRespone} = props

  const onImageclick = () => {
    onRespone()
  }
  return (
    <div className="emoji-card-con">
      <h1>How satisfied are you with our customer support performance?</h1>
      <ul className="emojis-images">
        {emojis.map(eachOne => (
          <Emojissymbols
            eachOne={eachOne}
            key={eachOne.id}
            onImageclick={onImageclick}
          />
        ))}
      </ul>
    </div>
  )
}

export default Emojiscon
