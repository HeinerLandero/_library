import './App.css';
import { ListMovies } from './components/ListMovies';
import { SearchFiles } from './components/SearchFiles';
import { UploaderFiles } from './components/UploaderFiles';
function App() {
  return (
    
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/* Barra de navegación* */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* Movie list */}
        <section id="content" className="content">
          <ListMovies/>
        </section>

          {/* aside */}
        <aside className="lateral">
            <SearchFiles/>
            <UploaderFiles/>
        </aside>

        {/* Footer */}
        <footer className="footer">
            &copy; Library-Files - <a href="https://github.com/HeinerLandero/">HeinerLandero</a>
        </footer>
    </div>
  );
}

export default App;
