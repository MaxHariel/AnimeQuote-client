import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link 
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </head> 
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
      </main>
    )
  }

}

export default Application;