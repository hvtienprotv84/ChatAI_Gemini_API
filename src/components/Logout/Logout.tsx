import { useDispatch } from 'react-redux'
import { clearUser } from '../../store/user/userSlice'
import Button from '../Button'

function Logout () {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(clearUser())
    }
    return (
        <Button onClick={handleLogout}>Đăng Xuất</Button>
    )
}

export default Logout
