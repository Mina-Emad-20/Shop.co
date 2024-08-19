import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function TopHeader() {
    return (
        <div className='top_header align-baseline d-flex justify-content-between'>
            <p className='m-auto'>Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a> </p>
            <FontAwesomeIcon icon={faXmark} className='exit_icon px-4 me-0' />
        </div>
    )
}
