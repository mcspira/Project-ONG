import React from 'react'
import { useState, useEffect } from 'react'
import "./Content.css"

function Content() {
  const [ data, setData ] = useState([])
  const [ entry, setEntry ] = useState(0)
  const [ exit, setExit ] = useState(0)

  useEffect(() => {
    (async () => {
        const response = await fetch('https://grupocpb.org/api/transparencia')
        const data = await response.json()     
        setData(data) 
    })()
}, [])

  useEffect(() => {
    (() => {
      let total = 0
      data.forEach(function(list){
        if(list.operacao === "entrada"){
        let number = parseFloat(list.valor)
        total+=number
        setEntry(total)
      }})
    })()
  }, [data])

  useEffect(() => {
    (() => {
      let total = 0
      data.forEach(function(data){
        if(data.operacao === "saida"){
          let number = parseFloat(data.valor)
          total+=number
          setExit(total)
        }
      })
    })()
  })

  console.log()
  return (
    <article className="content">
      <div className="content__container">  
        <div className="content__cardsStart">   
          <h1 className="content__tableTitle">Entradas</h1>
            <>
            { data.map( dado => (dado.operacao === "entrada" ? 
            <table className="content__table"> 
              <tr>
                <tr> Doador: { dado.empresa } </tr>
              </tr>
              <tr>
                <td> Valor: { dado.valor } </td>
              </tr>
              
            </table> : ''))}
            </>
            <h2 className="content__totalValue">Valor Total: { entry }</h2>
        </div>

        <div className="content__cardsEnd">
          <h1 className="content__tableTitle"> Saidas </h1>
          <>
            { data.map(dado => (dado.operacao === "saida" ? 
            <table className="content__table">
              <tr>
                <td>  { dado.empresa } </td>
              </tr>
              <tr>
                <td> Valor: { dado.valor } </td>
              </tr>
            </table> : ''))}
            <h2 className="content__totalValue">Valor Total: { exit }</h2>
          </>
        </div>
      </div>
    </article>
  )
}

export default Content
