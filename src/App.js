import arrow from './images/Iconarrow.png'
import profile from './images/profile.jpeg'
import slack from './images/slackslack.png'
import github from './images/github.png'
import zuri from './images/zuri.png'
import intern from './images/good.png'
import three from './images/three.png'
import './App.css';

function App() {
  const windowx = window.screen.width
  console.log(windowx)
  return (
    <div className="App">
     <header>
      <center><img src={profile} alt="" id='profile_img'/></center>
      <p id='twitter'>@AlPHA_MHALE</p>
      {/* /*<span className='dummy'>haryor</span> */}
      { windowx >'500'?<img className='arrow' src={arrow} alt="" />:<img className='arrow' alt='' src={three}/>}
     </header>
     <main>
      <a className='link' href="https://twitter.com/alphamhale/">Twitter Link</a>
      <a className='link' id='btn_zuri' href="https://training.zuri.team/">Zuri Team</a>
      <a title='Get the best books on design and coding with illustration and code snippet for better comprehension' className='link' id='books' href="http://books.zuri.team">
        <span>Zuri Books</span>
      </a>
      <a title='All you need to become a better programmer in just one book' className='link' id='book_python' href="https://books.zuri.team/python-for-beginners?ref_id=<haryor>">
        <span>Python Books </span>
      </a>
      <a  title='Let our team help you run background checks on your codes' className='link' id='pitch' href="https://background.zuri.team">
        <span>Background  Check for coders</span>
      </a>
      <a title='Get Your Hands on the free design book offered by our team' className='link' id='book_design' href="https://books.zuri.team/design-rules">
        <span> Design Books</span>
      </a>
      <aside>
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </aside>
     </main>
     <footer>
      <img src={zuri} alt="" />
      <span>HNG Internship 9 Frontend Task</span>
      <img src={intern} alt="" />
     </footer>
    </div>
  );
}

export default App;
