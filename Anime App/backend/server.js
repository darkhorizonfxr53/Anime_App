const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.get("/api/anime/:id", async (req, res) => {
    const animeId = req.params.id;
    try{
        const response = await axios.get(`https://api.jikan.moe/v3/anime/${animeId}`)
        const animeData = response.data
        res.json(animeData)
    } catch (error){
        console.error(error)
        res.status(500).json({ error: "Internal server error "})
    }
})
 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})