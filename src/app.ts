import bootstrap from "./server";
import dotenv from 'dotenv'
dotenv.config()

const { PORT } = process.env


const App = () => {
    bootstrap().listen(PORT, () => {
        console.log('Server is running at port: ', PORT)
    })
}

export default App;
