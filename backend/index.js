const express = require('express');
const fs = require('fs')
const app = express();
const cors = require('cors')


//Server listening
app.listen(3000, () => {
   console.log(`Servidor corriendo en el puerto ${3000}`);
});

//Middlewares
app.use(express.json());
app.use(cors());

//HTTP Methods
app.post('*',(req, res)=>{
  const urlArchivo = './guardado.txt'
  const contenido = fs.readFileSync(urlArchivo) + ',' + JSON.stringify(req.body)
  fs.writeFileSync(urlArchivo, contenido)
   res.status(200).json({
      ok:true,
      message:"json saved"
   })
})
dd