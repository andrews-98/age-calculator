import './App.css';
import { useState } from "react";
import { Form } from "./components/Form/Form";


function App() {
  const [calculatedDate, setCalculatedDate] = useState({
    day: '',
    month: '',
    year: ''
  })


  const ageCalculation = (dobDate) => {
    let daysAge;
    let monthAge;
    let yearAge;

    const currentDate = {
      currentDay: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    }

    yearAge = currentDate.currentYear - dobDate.year

    if (currentDate.currentMonth > dobDate.month) {
      if (currentDate.currentMonth === dobDate.month) {
        monthAge = 11
      }
      monthAge = currentDate.currentMonth - dobDate.month
    } else {
      yearAge--
      monthAge = 12 + (currentDate.currentMonth - dobDate.month)
    }



    if (currentDate.currentDay >= dobDate.day) {
      daysAge = currentDate.currentDay - dobDate.day
    } else {
      if (monthAge !== 0) {
        monthAge--
      }
      daysAge = 31 + currentDate.currentDay - dobDate.day
    }

    return [daysAge, monthAge, yearAge]
  }

  const handleSubmit = (data) => {
    const [day, month, year] = ageCalculation(data)

    setCalculatedDate({
      ...calculatedDate,
      day,
      month,
      year
    })
  }




  return (
    <div className="w-11/12 mobile:w-1/2 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg mobile:px-11 mobile:py-11 px-5 py-7">
      <Form onSubmit={handleSubmit} />

      <div className="text-6xl">
        <h1><span className='result-date'>{calculatedDate.year >= 0 && calculatedDate.year !== '' ? calculatedDate.year : '--'}</span> years</h1>
        <h1><span className='result-date'>{calculatedDate.month === 0 || calculatedDate.month ? calculatedDate.month : '--'}</span> months</h1>
        <h1><span className='result-date'>{calculatedDate.day === 0 || calculatedDate.day ? calculatedDate.day : '--'}</span> days</h1>
      </div>
    </div>
  );
}

export default App;
