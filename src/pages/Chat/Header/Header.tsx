import { Icon } from '@iconify/react'
import { useSelector } from 'react-redux'
import './Header.scss'
import Logout from '../../../components/Logout/Logout'
import { RootState } from '../../../store/index'
import { useDispatch } from 'react-redux'
import { clearChat } from '../../../store/user/userSlice'
import ThemeToggle from '../../../components/ThemeToggle'

function Header() {
    const { name } = useSelector((state: RootState) => state.user)

    const dispatch = useDispatch()

    const openGithub = () => {
        window.open('https://github.com/hvtienprotv84')
    }

    return (
        <div className='header'>
            <span>Xin Chào, <span style={{fontWeight: "bold"}}>{name}</span></span>
            <div className='header-buttons'>
            <Icon className='github-icon' icon='mdi:github' height={28} onClick={openGithub} />
            <Icon className='clear-icon' icon='mdi:trashcan-outline' height={28} onClick={() => dispatch(clearChat())} />
            <ThemeToggle />
            <Logout />
            </div>
        </div>
    )
}

export default Header
