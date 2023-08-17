import UserHeader from '../../components/UserHeader'
import React, {useState, useEffect, useContext} from 'react'
import {toast} from 'react-toastify'

const links = () => {
  const [links, setLinks] = useState([{url: '', title: ''}]);
  const [title, setTitle] = useState('');

  const handleLinkChange = (index, field, value) =>{
    const updatedLinks = [...links];
    const linkToUpdate = { ...updatedLinks[index], [field]: value};
    updatedLinks[index] = linkToUpdate;
    setLinks(updatedLinks);
  }

  const handleAddLink = () =>{
    setLinks([...links, {url: '', title: ''}]);
  }

  const handleRemoveLink = (index)=>{
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  }

  const saveLinks = (e) =>{
    e.preventDefault();
    const linksArray = Object.values(links);
    const titlesArray = Object.values(title);
    const linksData = linksArray.map((link, index)=>({
      link,
      title: titlesArray[index]
    }))

    fetch(`http://localhost:8080/save/links`,{
      method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            tokenMail: localStorage.getItem('LinkTreeToken'),
            links: linksData
        })
    }).then(res=>res.json()).then(data=>{
      if(data.status==='error') return toast.error(data.error);
      toast.success('Links saved successfully');
    }).catch(err=>{ toast.error(err.message)});
  }

  useEffect(()=>{
    if(!localStorage.getItem('LinkTreeToken')) return router.push('/login');
    fetch(`http://localhost:8080/load/links`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            tokenMail: localStorage.getItem('LinkTreeToken')
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.status==="error") return toast.error(data.error);
        setLinks(data.links);
    })
  }, [])

  return (
    <>
      <div>
        <UserHeader/>
        <main>
          <section>
            <h1 className='text-center font-bold text-xl text-gray-600'>Add or Customize your Links</h1>
            <div>
              <form onSubmit={saveLinks} >
                {links.map((link, index)=>(
                  <div className='flex flex-row justify-center my-6 ' key={index}>
                    <div>
                    <label>
                      <h4 className='text-white px-6 pt-3'>URL</h4>
                      <input className='input-per-link flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type="text" value={link.url} onChange={e=>handleLinkChange(index, 'url', e.target.value)} />
                    </label>
                    <label>
                    <h4 className='text-white px-6 pt-3'>Title</h4>
                      <input className='input-per-2 flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type="text" value={link.title} onChange={e=>handleLinkChange(index, 'title', e.target.value)} />
                    </label>
                    </div>
                    <button className=' my-10 mx-6 p-6' type='button' onClick={()=>{handleRemoveLink(index)}}>
                    <img className='w-9 cursor-pointer' src="/svg/trash.svg" alt="" />
                    </button>
                  </div>
                ))}
                <div className='buttons flex flex-row gap-5 my-1'>
                  <button className='bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm w-full' type="button" onClick={handleAddLink}>
                    Add link
                  </button>
                  <button className='bg-green-500 text-white px-4 py-2 rounded-md shadow-sm w-full' type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>

          </section>
        </main>
      </div>
    </>
  )
}

export default links