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
                <li key={item.id}>
                  <SocialIcon url={item} key={item.id} bgColor='#5E81AC' fgColor='#D8DEE9' />
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
