import Link from 'next/link'
import MyHead from '../components/MyHead'
import styles from '../styles/apply.module.css'

export default function Home() {
  return (
    <>
      <MyHead
        title="HOME"
        description="Welcome to NVSBL Community, where we help you to choose the best creator for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main  className=" w-full min-h-screen flex flex-col justify-center items-center">

      <div className="container-home">
      <div className="text-home">
        <span style={{ '--i': 1 }}>N</span>
        <span style={{ '--i': 2 }}>V</span>
        <span style={{ '--i': 3 }}>S</span>
        <span style={{ '--i': 4 }}>B</span>
        <span style={{ '--i': 5 }}>L</span>
      </div>
      
    
    </div>
    


        {/* <h1 className='text-center'> Welcome to <br/><span className='text-indigo-600 font-semibold'>NextJS Featured Template</span></h1>
        <Link title='Notice the page loader' className='bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white' href="/apply">Link to a page</Link> */}
      </main>
    </>
  )
}
