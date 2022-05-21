import React from 'react'
import "./Menu.css"

export const Menu = ({menuData}) => {


    return (
        <>  <div>
            {menuData.map((ele, index) => {
                return (
                   
                        <div id="container" key={index}>

                            <div className="product-details" >

                                <h1 >{ele.title}</h1><br />
                                <p className="information">
                                    {ele.desc}
                                </p>
                            </div>

                            <div className="product-image">

                                <img src={ele.image} alt="" />

                            </div>

                        </div>


               
                )
            })}
        </div>
        </>
    )
}
