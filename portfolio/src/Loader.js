import { useFade } from "./hooks/useFade";
import { useTimeout } from "./hooks/useTimeout";
const Loader = (props) => {

  const { time } = props
  const halfTime = time / 2

  const [isVisible, setVisible, fadeProps] = useFade(true);

  useTimeout(() => {
    setVisible(false)
  }, halfTime)

  return (
    <div className='loader-container'>
      { isVisible && 
        <div {...fadeProps} className='dank-ass-loader'>
            <div className='loader-row'>
                <div className='arrow up outer outer-18' />
                <div className='arrow down outer outer-17' />
                <div className='arrow up outer outer-16' />
                <div className='arrow down outer outer-15' />
                <div className='arrow up outer outer-14' />
            </div>
            <div className='loader-row'>
                <div className='arrow up outer outer-1' />
                <div className='arrow down outer outer-2' />
                <div className='arrow up inner inner-6' />
                <div className='arrow down inner inner-5' />
                <div className='arrow up inner inner-4' />
                <div className='arrow down outer outer-13' />
                <div className='arrow up outer outer-12' />
            </div>
            <div className='loader-row'>
                <div className='arrow down outer outer-3' />
                <div className='arrow up outer outer-4' />
                <div className='arrow down inner inner-1' />
                <div className='arrow up inner inner-2' />
                <div className='arrow down inner inner-3' />
                <div className='arrow up outer outer-11' />
                <div className='arrow down outer outer-10' />
            </div>
            <div className='loader-row'>
                <div className='arrow down outer outer-5' />
                <div className='arrow up outer outer-6' />
                <div className='arrow down outer outer-7' />
                <div className='arrow up outer outer-8' />
                <div className='arrow down outer outer-9' />
            </div>
        </div>
      }
    </div>
  )
}

export default Loader
