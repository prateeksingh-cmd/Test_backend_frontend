import { Router, Request, Response } from "express";

interface Part {
    id: number;
    name: string;
    category: "pipe" | "valve" | "flange" | "elbow";
    material: string;
    diameter: number;
}

const router = Router();

let parts: Part[] = [
    { id: 1, name: "Pipe", category: "pipe", material: "Plastic", diameter: 43 },
    { id: 2, name: "Valve", category: "valve", material: "Rubber", diameter: 34 },
    { id: 3, name: "Elbow Bend", category: "elbow", material: "Copper", diameter: 49 },
    { id: 4, name: "C Flange", category: "flange", material: "Steel", diameter: 43 }
];

// get all
router.get("/", (req: Request, res: Response) => {
    res.status(200).json(parts);
});

// add new part
router.post("/", (req: Request, res: Response) => {
    const { id, name, category, material, diameter } = req.body;

    if (!id || !name || !category || !material || diameter === "") {
        return res.status(400).json({ message: "Missed Something check and fill again" });
    }

    const newPart: Part = {
        id: Number(id),  // use the ID given by user
        name,
        category,
        material,
        diameter: Number(diameter)
    };

    parts.push(newPart);

    res.status(201).json(newPart);
});

// delete part
router.delete("/:id", (req: Request, res: Response) => {
    const partId = Number(req.params.id);
    const partIndex = parts.findIndex(p => p.id === partId);

    if (partIndex === -1) {
        return res.status(404).json({ message: "part is not present" });
    }

    parts.splice(partIndex, 1);
    res.status(200).json({ message: "part deleted successfully" });
});

export default router;
