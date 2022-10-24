import { SocialIcon } from 'react-social-icons'
const LColumn = (props) => {
  const { socials } = props
  return (

    <div id='primary' className=''>
      <div className='left'>
        <ul>
          {
            socials.map((item) => {
              return (
                <li>
                  <SocialIcon url={item} bgColor='#5E81AC' fgColor='#D8DEE9' key={item.id} />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default LColumn
