import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import HolderRender from './components/render/HolderRender';
import LikeImageRender from './components/render/LikeImageRender';
import LikePostRender from './components/render/LikePostRender';

function App() {
  return (
    <div>
      <h3>HOC</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <div>
      <h3>Render</h3>
        <HolderRender render={(counter,Count)=>{
          return <LikePostRender counter={counter} Count={Count}/>
        }}/>
         <HolderRender render={(counter,Count)=>{
          return <LikeImageRender counter={counter} Count={Count}/>
        }}/>
      </div>
    </div>
  );
}

export default App;
