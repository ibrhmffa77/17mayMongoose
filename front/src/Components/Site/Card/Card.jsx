import React, { useEffect, useState } from 'react'
import './Card.scss'
import axios from 'axios'
const Card = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/Products").then((res)=>{
      setData(res.data)
    })
  })
  return (
    <div>
        <div className="card">
         {
          data.map((item, index)=>{
            return(
              <div className="card__item">
              <div className="card__item__img">
                <img src={item.image} alt="" />
              </div>
              <div className="card__item__title">
                     <p><strong>{item.name}</strong> <span>-{item.date}</span></p>
                     <h2>{item.title}</h2>
                     <p>{item.content}</p>
              </div>
            </div>
            )
          })
         }
          
        </div>

    </div>
  )
}

export default Card