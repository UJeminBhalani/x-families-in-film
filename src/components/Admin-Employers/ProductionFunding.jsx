import React,{useState} from 'react'
import RadialBar from "react-apexcharts"
import { useTranslation} from 'react-i18next'


const ProductionFunding = () => {
    const {t}=useTranslation();
    const [options]= useState({
      series: [70],
      options: {
        chart: {
          height: 350,
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
    return (
      <>
        <h3 className="title_h4_line">{t('Employee.Dashboard.Current_funding')}</h3>
      
        <div className="row">
          <div className="col-xl-6 d-flex justify-content-center">
  <div>
  <RadialBar options={options.options} series={options.series} type="radialBar" width={500} height={320} labels={options.options.labels} />
  </div>
            
  
  
  
          </div>
          <div className="col-xl-6">
            <div className="d-flex flex-column justify-content-center mt-5">
              <button type="button" className="btn btn-info h52 w100">{t('Union.Dashboard.Spent')}: $7,000</button>
              <button type="button" className="btn btn-outline-info h52 w100 mt-3">{t('Union.Dashboard.Remaining')}: $8,000</button>
            </div>
          </div>
  
        </div>
      </>
    )
}

export default ProductionFunding