import Profile from "./Contact"
import { About } from "./Contact"
import Comp1, { Comp2, Comp3 } from "./Multiple"

function Main() {
    return (
        <div>
            {/* <Profile />
            <About /> */}
            <Comp1 />
            <Comp2 />
            <Comp3 />
        </div>
    )
}

export default Main;