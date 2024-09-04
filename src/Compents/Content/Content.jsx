import React from 'react'
import project_1 from '../../assets/project_1.svg'
import project_2 from '../../assets/project_2.svg'
import project_3 from '../../assets/project_3.svg'
import project_4 from '../../assets/project_4.svg'
import project_5 from '../../assets/project_5.svg'
import project_6 from '../../assets/project_6.svg'


function Content() {
  return (
    <div className='md:py-16 py-10' id='projects'>
          <div className='container mx-auto px-8 md:px-16 lg:px-24'>
              <h2 className='text-4xl font-bold mb-12 text-center '>My Projects</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  <div>
                      <img src={project_1} alt="" />
                  </div>
                   <div>
                      <img src={project_2} alt="" />
                  </div>
                   <div>
                      <img src={project_3} alt="" />
                  </div>
                   <div>
                      <img src={project_4} alt="" />
                  </div>
                   <div>
                      <img src={project_5} alt="" />
                  </div>
                   <div>
                      <img src={project_6} alt="" />
                  </div>

              </div>
          </div>
      </div>
  )
}

export default Content
