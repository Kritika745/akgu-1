import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons';

function BachelorCards() {
  return (
    <div className="  w-5/6 h-auto flex flex-wrap flex-row items-center justify-center bg-customWhite">

<div className="sm:w-3/4 md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro2.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold text-customblue">Bachelor of Arts</h3>
        <p className='text-customblue mb-2 text-xs'>(Tourism Administration)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
   
   <div className="sm:w-3/4 md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className="overflow-hidden">
      <img className="h-[250px] w-full object-cover  " src="../../Images/pro1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue"> Computer Applications</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>

  <div className="sm:w-3/4 md:w-1/3 lg:w-1/4 w-full  p-4  m-3 bg-white">
    <div className="overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/download_1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Bachelor of Business Administration</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
    
  
     
  <div className="sm:w-3/4 md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro3.jpeg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Bachelor of Commerce</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
     
  <div className="sm:w-3/4 md:w-1/3 lg:w-1/4 w-full p-4 m-3 bg-white">
    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro4.avif" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold  text-customblue">Bachelor of Arts</h3>
        <p className='text-customblue mb-2 text-xs'>(Journalism And Mass Comminication)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
    
  <div className="sm:w-3/4 md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className="overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro5.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Bachelor of Arts</h3>
        <p className='text-customblue mb-2 text-xs'>( Mass Communication)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
     
 
  </div> 
  

  )
}

export default BachelorCards



