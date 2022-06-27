import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';

function App() {
    return (
        <div className={style.wrapper}>
            <header>
                <a href="/profile">Profile</a>
                <a href="/users">Users</a>
                <a href="/dialog">Dialog</a>
            </header>
            <main>
                <div className={style.profileWrapper}>
                    <div className={style.profile}>
                        <img src="https://avatars.githubusercontent.com/u/107566335?v=4" alt="avatar"/>
                        <div className={style.addPost}>
                            <input type="text"/>
                            <button>add post</button>
                        </div>
                            <h2>About me</h2>
                            <p>I am frontend developer</p>
                            <p>Study in it-karate</p>
                            <p>23 y.o</p>
                            <p>rakhymzhan.ff@gmail.com</p>
                    </div>
                    <div className={style.postsWrapper}>
                        <h2>Posts</h2>
                        <div className={style.posts}>
                            <div className={style.post}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                            <div className={style.post}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                            <div className={style.post}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                            <div className={style.post}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                it-karate 2022 The best school!
            </footer>
        </div>
    );
}

export default App;
