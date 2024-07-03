// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import '../pages/About.css'; // Ensure the correct path to your CSS file

// function Images() {
//   const [firstRef, firstInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const [secondRef, secondInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   return (
//     <div className="relative border-2 border-orange-500 h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
//       <div className="absolute inset-0 border-2 border-black bg-black bg-opacity-50 flex flex-row  justify-center">
//         <div className="flex flex-col w-full border-2 border-yellow-400  md:space-x-4">
//             <div className='relative w-full h-full flex'>
//                 <div className="absolute h-28 sm:h-48 md:h-28 lg:h-48 w-full  bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
//                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">Name 1</div>
//                 </div>
//                 <div className="absolute h-28 sm:h-48 md:h-28 lg:h-48 w-full  bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
//                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">Name 2</div>
//                 </div>
//             </div>
//            <div className='relative w-full h-full flex'>
//                 <div className="absolute  h-28 sm:h-48 md:h-28 lg:h-48 w-full  bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
//                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">Name 3</div>
//                 </div>
//                 <div className="absolute  h-28 sm:h-48 md:h-28 lg:h-48 w-full  bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
//                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">Name 4</div>
//                 </div>
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Images;
