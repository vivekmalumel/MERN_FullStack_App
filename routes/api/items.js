const router=require('express').Router();
const Item=require('../../models/Item');


//@route GET api/items
//@desc Get All Items
//@access Public

router.get('/',async (req,res)=>{
    try {
        const items=await Item.find().sort({date:-1});
        res.status(200).json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

//@route POST api/items
//@desc Create new Item
//@access Public

router.post('/',async (req,res)=>{
    const newItem=new Item({
        name:req.body.name
    });
    try {
        item=await newItem.save();
        res.status(201).json({message:"Item Created",item});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

//@route DELETE api/items/:id
//@desc DELETE an Item
//@access Public

router.delete('/:id',async (req,res)=>{
    try {
        item=await Item.findByIdAndDelete(req.params.id);
        if(item)
             res.status(200).json({message:"Item Removed",item});
        else
        res.status(404).json({message:"Item with the given ID does not exist."});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

//@route GET api/items/:id
//@desc Get an Item by id
//@access Public

router.get('/:id',async (req,res)=>{
    try {
        item=await Item.findById(req.params.id);
        if(item)
             res.status(200).json(item);
        else
            res.status(404).json({message:"The Item with the given ID does not exist."})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})





module.exports=router;

