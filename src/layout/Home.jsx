
import Brands from "../components/Brands";
import NewArrivals from "./NewArrivals";
import Browse from "./Browse";
import UserForm from "../components/UserForm";
import MainPart from "./MainPart";


export default function HomePage() {

    return (
        <div className="main pt-4">
            <MainPart />
            <Brands />
            <NewArrivals />
            <Browse />
            <UserForm />
        </div>
    )
}
