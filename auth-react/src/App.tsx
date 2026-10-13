import LoginPage from './pages/login-page/login-page';
import UserProfilePage from './pages/user-profile-page/user-profile-page';
import HeaderNav from './components/head-nav/header-nav';
import { useState } from 'react';
import { selectError, selectUser } from './store/slices/auth-slice';
import { useSelector } from 'react-redux';
import PostPage from './pages/post-page/post-page';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import Modal from './components/modal/modal';
import { ModalInfo } from './models/ModalInfo';
import { login } from './services/authentication-service';
import {getPostFromUserId} from './services/post-service';

function App() {
  const user = useSelector(selectUser);
  const isUserLogged = () => user != null; 

  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const handleClose = () => setDisplayLoginModal(false);
  const handleOpen = () => setDisplayLoginModal(true);

  const error = useSelector(selectError);
  const modalInfo: ModalInfo = {
    title: error ? 'Login failed' : 'Login successful',
    description: error ? JSON.stringify(error) : 'You have successfully logged in.',
    level: error ? 'error' : 'success'
  }
  
  return (
    <div className="App">
      <HeaderNav isUserLogged={isUserLogged()}/>
      { displayLoginModal && <Modal info={modalInfo} handleClose={handleClose} hideAfter={3} /> }
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={
          user ? 
          <Navigate to='/profile' replace /> :
          <LoginPage login={login} handleOpen={handleOpen} />
          } />
        <Route path='profile' element={
            user ? 
            <UserProfilePage user={user} /> :
            <Navigate to='/login' replace />
          } />
        <Route path='posts' element={
          user ? 
          <PostPage getPostById={getPostFromUserId} userId={user ? user.id : 0} /> :
          <Navigate to='/login' replace />
          } />
      </Routes>
    </div>
  );
}

export default App;
