import React from 'react'

function Input({label,value,name,type,obj,setObj}) {
  const changeFunc = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,
    });
    console.log(obj);
  };
  return (
    <div className='inp'>
      <label htmlFor="">{label}</label>
      <input type={type} value={value} name={name} onChange={changeFunc} />
    </div>
  )
}

export default Input
