import React from 'react';
import './Login.css';

// imports icons
import iconGoogle from './../../assets/icons/icon-google.svg';
import iconApple from './../../assets/icons/icon-apple.svg';
import iconFacebook from './../../assets/icons/icon-facebook.svg';

const url = '#';

function Login() {
  return (
    <div className='page-login h-screen bg-blue-500'>
      <nav className='navbar w-full px-6 py-5'>
        <h1 className='nav-logo text-white font-semibold text-lg line leading-7'>Your Logo</h1>
      </nav>

      <main className='main-content max-w-screen-md bg-white mx-6 rounded-3xl'>
        <div className='card-login  px-5'>
          <div className='card-header py-14 flex justify-between'>
            <div className='card-title'>
              <p className='text-black font-normal text-base line leading-6'>Welcome to <span className='text-blue-500 font-semibold'>LOREM</span></p>
              <h1 className='text-black font-medium text-4xl leading-relaxed'>Sign in</h1>
            </div>
            <div className='card-text'>
              <p className='text-gray-500 font-normal text-sm leading-5'>No Account?</p>
              <a href={url} className='text-blue-500 font-normal text-sm leading-5' >Sign up</a>
            </div>
          </div>

          <div className='card-body'>
            <div className='btn-group flex flex-wrap'>
              <div className='w-8/12 pr-1'>
                <button className='w-full bg-blue-100 text-xs rounded-xl inline-flex justify-center items-center  py-5 px-4'>
                  <img src={iconGoogle} className='mr-3' alt='Icon Google' /> Sign in with Google
                </button>
              </div>

              <div className='w-2/12 px-1'>
                <button className='w-full bg-gray-100 rounded-xl inline-flex justify-center items-center py-5 px-2'>
                  <img src={iconFacebook} alt='Icon Facebook' />
                </button>
              </div>

              <div className='w-2/12 pl-1'>
                <button className='w-full bg-gray-100 rounded-xl inline-flex justify-center items-center py-5 px-2'>
                  <img src={iconApple} alt='Icon Apple' />
                </button>
              </div>
            </div>

            <form className='my-12'>
              <div className='flex flex-wrap'>
                <div className='input-group w-full flex flex-col gap-4 mb-9'>
                  <label htmlFor='usernameOrEmail' className='text-sm leading-5'>Enter your username or email address</label>
                  <input type='text' className='w-full py-5 px-4 border rounded-xl placeholder:text-sm placeholder:font-light placeholder:leading-5' id='usernameOrEmail' placeholder='Username or email address' />
                </div>

                <div className='input-group w-full flex flex-col'>
                  <label htmlFor='password' className='text-sm leading-5'>Enter your Password</label>
                  <input type='text' id='password' className='w-full py-5 px-4 border rounded-xl placeholder:text-sm placeholder:font-light placeholder:leading-5' placeholder='Password' />
                </div>

                <a href={url} className='text-blue-500 w-full text-xs text-right underline underline-offset-4 leading-4 mt-3'>Forgot Password</a>

                <button className='btn btn-primary text-white bg-blue-500 w-full py-4 border rounded-xl mt-12 mb-20'>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;