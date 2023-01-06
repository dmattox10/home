import { forwardRef } from "react"

const ContentResume = forwardRef(( props, ref ) => {

    return (
        <div ref={ref}>
            Resume
        </div>
    )
})

export default ContentResume