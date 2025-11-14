import express from "express";
import cors from "cors";
import cadPartsRoutes from "./routes/cadparts";



const app = express();
const port = 3008;  
app.use(cors());
app.use(express.json());

//  view parts 

app.use("/api/parts", cadPartsRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
