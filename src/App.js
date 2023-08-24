import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

export const App = () => {
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            width:"100vw",
            height:"100vh",
            justifyContent:"center",
            alignItems:"center"

        }}>
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    )
} 