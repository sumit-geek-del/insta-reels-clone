
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      <div className='app__top'>
        <img
          className='app__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
          alt='Instagram Logo'
        />

      <h1>Reels</h1>
      </div>

      <div className='app__videos'>
      <VideoCard
        channel='sumit.4945'
        avatarSrc='"https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/308553186_830723911279879_2195818556153427849_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=d5vvnu65qmwAX_ScjUb&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB1QtoPCoO-5ojjd-CTJf7T8f-9cmlSuiifXaJqdGyuCQ&oe=6364111D&_nc_sid=8fd12b"'
        song = 'Test Song -sssssangha'
        url='https://www.instagram.com/reel/CkVibrRDLB5/?utm_source=ig_web_button_share_sheet'
        likes={950}
        shares={30}

      />
      </div>
    </div>
  );
}

export default App;
