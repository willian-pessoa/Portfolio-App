import "./topbar.scss"
import { Person, Mail, HomeIcon } from '@mui/icons-material';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Willian</a>
                    <div className="itemContainer" id="tel">
                        <Person className="icon" />
                        <span>+55 (11) 97012-9204</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>willianpessoadeabreu@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
