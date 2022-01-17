import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/satoosan/">
                        <div className="dsmovie-contact-conteiner">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/satoosan</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;