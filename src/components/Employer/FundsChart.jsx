import React,{ useState } from "react";

import Pie from 'react-apexcharts'

const FundsChart = () => {
    const [options]= useState({
        series: [70],
        options: {
          chart: {
            height: 400,
            type: 'radialBar',
            
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
                
              },
              dataLabels: {
                name: {
                  offsetY: -10,
                  color: "#000000",
                  fontSize:"24px",
                  fontWeight:800,
                  formatter: function () {
                    return ["$7,000", "$15,000"];
                  }
                },
                value: {
                  color: "#000000",
                  fontSize:"24px",
                  fontWeight:800,
                  
                  
                  show:false
                }
              }
            },
            
          },
          
          fill:{
            colors:["#44B5AE"]
          } , labels:["$7,000","$15,000"]       },
         
       })

    return(
        <>
        <div className="">
        <Pie options={options.options} series={options.series} type="radialBar" labels={options.options.labels} height={250}/>
        </div>
        </>
    )
}

export default FundsChart