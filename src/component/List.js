        import React from 'react'
        import logo from '../images/logo.jpg';
        import SearchIcon from '@mui/icons-material/Search';
        import PersonIcon from '@mui/icons-material/Person';
        import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
        import { Link, NavLink } from 'react-router-dom';
        import '../Css/ListStyle.css';

        const List = () => {
        return (
            <>
               <header>
                    <div className='container container-flex'>
                        <div className='logoContainer'>
                            <img src={logo} alt={logo} className='logo' />
                        </div>
                        <nav>
                            <div className='list'>
                                <NavLink to="/" className="listItem" >Home</NavLink>
                                <NavLink to="/policy" className="listItem" >Policy</NavLink>
                                <NavLink to="/services" className="listItem" >Services</NavLink>
                                <NavLink to="/contact" className="listItem" >Contact</NavLink>
                                <NavLink to="/about" className="listItem" >About</NavLink>
                            </div>
                        </nav>
                        <div className='icons'>
                            <SearchIcon className='icon'/>
                            <PersonIcon className='icon'/>
                            <StayCurrentPortraitIcon className='icon'/>
                        </div>
                    </div>
               </header>
            </>
        )
        }

        export default List
