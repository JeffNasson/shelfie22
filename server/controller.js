

module.exports={
    getInventory:(req,res)=>{
       const dbInstance=req.app.get('db')

       dbInstance.get_inventory()
       .then(products=>res.status(200).send(products))
       .catch(err=>{
           res.status(500).send({errorMessage:'Oops you suck. Letting the engineers know.'})
           console.log(err);
       })
    },
    postProducts:(req,res)=>{
        const dbInstance=req.app.get('db')
        const {name,price,image_url} = req.body

        dbInstance.create_product([name,price,image_url])
            .then((products)=>res.send(products))
            .catch(err=>{
                res.status(500).send({errorMessage:'Oops you really suck. Letting the engineers know.'})
                console.log(err);
            })
    },

    delete:(req,res)=>{
        const dbInstance=req.app.get('db');
        const {id}=req.params;

        dbInstance.delete_product([id])
            .then(()=>res.sendStatus(200))
            .catch(err=>{
                res.status(500).send({errorMessage:'Oops something went wrong. Engineering has been informed.'})
                console.log(err)
            })
    },
}