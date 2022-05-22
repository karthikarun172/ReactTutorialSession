import logo from './logo.svg';
import './App.css';
import NewPage from './Components/NewPage';
import { useState } from 'react';
import Counter from './Components/Counter';
import Card from './Components/Card';

function App() {

  const Swiggy = [
    { hotel_Name: "vasant Bhavan", cuisine: "Indian", rating: "4", distance: "4km" },
    { hotel_Name: "A2B", cuisine: "Indian", rating: "3", distance: "3km" },
    { hotel_Name: "Saravana Bhavan", cuisine: "Indian", rating: "4", distance: "4km" },
    { hotel_Name: "Dominos", cuisine: "American", rating: "4", distance: "3km" },
    { hotel_Name: "Taco bell", cuisine: "Mexican", rating: "3", distance: "14km" },
    { hotel_Name: "KFC", cuisine: "American", rating: "2", distance: "24km" },
  ]
  const [data, SetData] = useState(Swiggy)



  return (
    <div style={{ display: "flex", flexWrap: 'wrap' }} >
      {data.map(v => (
        <Card hotel_Name={v.hotel_Name} rating={v.rating} key={v.hotel_Name} cusinie={v.cuisine} distance={v.distance} />
      ))}
    </div>
  );
}

export default App;
