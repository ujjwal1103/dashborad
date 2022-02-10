
import {
    
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
   
  } from "recharts";
  const data = [
    {
      name: "Mon",
      point: 10,
     
    },
    {
      name: "Tue",
      point: 30,
      
    },
    {
      name: "Web",
      point: 25,
      
    },
    {
      name: "Thus",
      point: 50,
      
    },
    {
      name: "Fri",
      point: 65,
      
    },
    {
      name: "Sat",
      point: 70,
      
    },
    {
      name: "Sun",
      point: 80,
      
    }
  ];
  function Chart() {
    return (
      <>
       
       <LineChart
        width={700}
        height={250}
        data={data}
        
        margin={{
          top: 20,
          right: 50,
          left: 10,
          bottom: 5
        }}
      >
        <CartesianGrid 
        strokeDasharray="0"
         vertical={false}
         />
        <XAxis dataKey="name" padding={{ left: 10, right: 20 }} width={100} />
        <YAxis dataKey ="point" 
        padding={{ bottom: 30 }}
        tickCount={25}
        domain={['85']}
        axisLine={false}
         interval={"preserveStartEnd"}
          height={100}
          minTickGap={0}/>
        
        {/* <Legend /> */}
        <Line
         dot={false}
          type="monotone"
          dataKey="point"
          stroke="#fd869f"
          strokeWidth={3}
        />
        
      </LineChart>
      
      </>
    );
  }
  
  export default Chart;