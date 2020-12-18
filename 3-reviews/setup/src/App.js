import React from 'react';
import Review from './Review';
// import { FaGithubSquare } from 'react-icons/fa'
// inside the return statement, you can invoke the icon
{/* <FaGithubSquare className="icon"/> */}

function App() {
  return (
    <main>
      <section className='container'>
        <h2>our reviews</h2>
        <div className='underline'>

        </div>
        <Review />
      </section>
    </main>
  )
}

export default App;
