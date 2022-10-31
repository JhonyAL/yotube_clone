import './Header.css'
import { FaUserCircle } from 'react-icons/fa'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { BsKeyboard } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { MdKeyboardVoice } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import youtube from '../../images/Youtube.png'

export default function Header () {
    return (
        <header className='header' id='header'>
            <div className="header-content">
                <div className="header-left">
                    <HiOutlineBars3 />
                    <img src={youtube} alt="YouTube-BR Logo" title='Página inicial do Youtube' />
                </div>
                <div className="header-center">
                    <div className="search">
                        <input type="text" placeholder='Pesquisar'/>
                        <BsKeyboard />
                        <div className="search-icon">
                            <BiSearch />
                        </div>
                    </div>
                    <MdKeyboardVoice className='voice'/>
                </div>
                <div className="header-right">
                <SlOptionsVertical />
                <div className="perfil">
                    <FaUserCircle />
                    <span>Fazer login</span>
                </div>
                </div>
            </div>
            
        </header>
    )
}