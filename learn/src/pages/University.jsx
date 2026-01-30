import React from 'react'

const University = () => {
  return (
    <div className='univers'>
      <h1>Universities & Courses</h1>

      <div className='university'>

      <section className='university1'>
        <h2>Partner Universities</h2>
        <ul>
          <li>University of London</li>
          <li>Harvard University</li>
          <li>University of Toronto</li>
        </ul>
      </section>

      <section className='university2'>
        <h2>Popular Courses</h2>
        <ul>
          <li>Computer Science</li>
          <li>Business Administration</li>
          <li>Medicine</li>
          <li>Engineering</li>
        </ul>
      </section>
      </div>
    </div>
  );
}


export default University;
