import React from 'react';
import "./Nav.css";

export default function Nav({ filterItem }) {
      return (
            <>
                  <div className="header">
                        <div className="logo">HEALTHY FOODS</div>
                        <nav className="navbar">
                              <div className="btn-group">
                                    <button className="btn-group__item" onClick={() => filterItem("MG")} >Muscle Gain</button>
                                    <button className="btn-group__item" onClick={() => filterItem("WL")}>Weight Loss</button>
                                    <button className="btn-group__item" onClick={() => filterItem("WG")}>Weight Gain</button>

                              </div>
                        </nav>
                  </div>
            </>
      )
}