import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ErrorPage from "./pages/ErrorPage/ErrorPage"


function App() {

  const employees = [
    {
        id: 1,
        fullName: "Ana Janković",
        email: "ana.jankovic@email.com",
        phoneNumber: "+381631234567",
        dateOfBirth: "1990-01-01",
        department: "Sales",
        monthlySalary: 5000
      },
      {
        id: 2,
        fullName: "Nikola Petrović",
        email: "nikola.petrovic@email.com",
        phoneNumber: "+381631234568",
        dateOfBirth: "1985-02-15",
        department: "Marketing",
        monthlySalary: 6000
      },
      {
        id: 3,
        fullName: "Dragan Milenković",
        email: "dragan.milenkovic@email.com",
        phoneNumber: "+381631234569",
        dateOfBirth: "1975-03-31",
        department: "Engineering",
        monthlySalary: 7000
      },
      {
        id: 4,
        fullName: "Milica Stanković",
        email: "milica.stankovic@email.com",
        phoneNumber: "+381631234570",
        dateOfBirth: "1990-04-17",
        department: "HR",
        monthlySalary: 5500
      },
      {
        id: 5,
        fullName: "Vladan Petrović",
        email: "vladan.petrovic@email.com",
        phoneNumber: "+381631234571",
        dateOfBirth: "1982-05-22",
        department: "Finance",
        monthlySalary: 6500
      },
      {
        id: 6,
        fullName: "Jelena Kovačević",
        email: "jelena.kovacevic@email.com",
        phoneNumber: "+381631234572",
        dateOfBirth: "1989-06-08",
        department: "Marketing",
        monthlySalary: 5500
      },
      {
        id: 7,
        fullName: "Stefan Đorđević",
        email: "stefan.djordjevic@email.com",
        phoneNumber: "+381631234573",
        dateOfBirth: "1987-07-14",
        department: "Engineering",
        monthlySalary: 8000
      },
      {
        id: 8,
        fullName: "Tatjana Milosavljević",
        email: "tatjana.milosavljevic@email.com",
        phoneNumber: "+381631234574",
        dateOfBirth: "1984-08-29",
        department: "HR",
        monthlySalary: 6000
      },
      {
        id: 9,
        fullName: "Luka Jovanović",
        email: "luka.jovanovic@email.com",
        phoneNumber: "+381631234575",
        dateOfBirth: "1992-09-13",
        department: "Sales",
        monthlySalary: 5500
      },
      {
        id: 10,
        fullName: "Jovana Marković",
        email: "jovana.markovic@email.com",
        phoneNumber: "+381631234576",
        dateOfBirth: "1983-10-27",
        department: "Finance",
        monthlySalary: 7000
      },
      {
        id: 11,
        fullName: "Ivana Novaković",
        email: "ivana.novakovic@email.com",
        phoneNumber: "+381631234577",
        dateOfBirth: "1991-01-10",
        department: "IT",
        monthlySalary: 7500
      },
      {
        id: 12,
        fullName: "Marko Stojanović",
        email: "marko.stojanovic@email.com",
        phoneNumber: "+381631234578",
        dateOfBirth: "1986-02-22",
        department: "Sales",
        monthlySalary: 6000
      },
      {
        id: 13,
        fullName: "Jasna Mladenović",
        email: "jasna.mladenovic@email.com",
        phoneNumber: "+381631234579",
        dateOfBirth: "1978-03-07",
        department: "Marketing",
        monthlySalary: 6500
      },
      {
        id: 14,
        fullName: "Nenad Popović",
        email: "nenad.popovic@email.com",
        phoneNumber: "+381631234580",
        dateOfBirth: "1993-04-15",
        department: "Engineering",
        monthlySalary: 7000
      },
      {
        id: 15,
        fullName: "Jana Petrović",
        email: "jana.petrovic@email.com",
        phoneNumber: "+381631234581",
        dateOfBirth: "1984-05-20",
        department: "HR",
        monthlySalary: 5500
      },
      {
        id: 16,
        fullName: "Dušan Marković",
        email: "dusan.markovic@email.com",
        phoneNumber: "+381631234582",
        dateOfBirth: "1988-06-14",
        department: "IT",
        monthlySalary: 8000
      },
      {
        id: 17,
        fullName: "Sofija Janković",
        email: "sofija.jankovic@email.com",
        phoneNumber: "+381631234583",
        dateOfBirth: "1990-07-25",
        department: "Sales",
        monthlySalary: 5500
      },
      {
        id: 18,
        fullName: "Aleksandar Mitić",
        email: "aleksandar.mitic@email.com",
        phoneNumber: "+381631234584",
        dateOfBirth: "1983-08-31",
        department: "Marketing",
        monthlySalary: 7000
      },
      {
        id: 19,
        fullName: "Mila Petrović",
        email: "mila.petrovic@email.com",
        phoneNumber: "+381631234585",
        dateOfBirth: "1995-09-02",
        department: "Engineering",
        monthlySalary: 7500
      },
      {
        id: 20,
        fullName: "Nikola Janković",
        email: "nikola.jankovic@email.com",
        phoneNumber: "+381631234586",
        dateOfBirth: "1982-10-13",
        department: "IT",
        monthlySalary: 8500
      }
    ];
    
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
