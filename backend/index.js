const express = require('express');
const { connect,Schema,mongoose} = require('mongoose');
const connectTomongo= require('./db');
const app = express();
const cors=require('cors');

connectTomongo();
app.listen(4000,() => {
  console.log("Started on PORT 4000");
  })
const questionSchema = new Schema({
  id:Number,
  problem: String,
  hints:{
    hc:Boolean,
    hq:Boolean,
    he:Boolean,
    hs:Boolean
  },
  hc:{
    
        concept1:String,
        concept2:String,
        options1: String,
        options2: String,
        options3: String,
        options4: String,
    
    ul:{
      
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
  },
  al:{
    
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
}
  },
  hq:{
    
        concept1:String,
        concept2:String,
        options1: String,
        options2: String,
        options3: String,
        options4: String,
    
    ul:{
      
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
  },
  al:{
   
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
}},
he:{
  
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
 
  ul:{
    
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
},
al:{
  
  concept1:String,
  concept2:String,
  options1: String,
  options2: String,
  options3: String,
  options4: String,
}},
hs:{
  
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
  },
  ul:{
    
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
},
al:{
  
  concept1:String,
  concept2:String,
  options1: String,
  options2: String,
  options3: String,
  options4: String,
},
  
  Scs:String,
  
});

const qs = mongoose.model('questions', questionSchema);

const q1=new qs({
    id:3,
    problem: 'D_x (3x)^4-5+sinx-5 cosx )',
  hints:{
    hc:true,
    hq:false,
    he:true,
    hs:true
  },
  hc:{
        concept1:'The given expression is a sum of  terms involving powers of x and trigonometric functions',
        concept2:'Sum rule D_x (u+v)= D_x (u)+D_x (v) and the Multiplication rule D_x (ku)=kD_u (x) ; D_x (x^n )= nx^(n-1), D_x (sinx )=cosx and D_x (cosx )=-sinx',
        options1: "Exit conversion",
        options2: "Next problem",
        options3: "Hint Suggestion",
        options4: "Hint Example"
     },
  he:{
        concept1:"Find D_x (x^2+2 cos(x)",
        concept2:"solution:D_x (x^2+2 co(x)=D_x (x^2 )+D_x (2 cosx )=2x+2D_x (cosx)=2x+2(-sinx )=2x-2 sinx",
        options1: "Exit conversion",
        options2: "Hint suggestion",
        options3: "Next problem",
        options4: "Show complete Solution",
  },
  hs:{
        concept1:'The given expression is a sum of four terms involving powers of x and trigonometric functions',
        concept2:'Apply the sum rule D_x (u+v)= D_x (u)+D_x (v) and the Multiplication rule D_x (ku)=kD_u (x); D_x (x^4 )= 4x^3, D_x (sinx )=cosx and D_x (cosx )=-sinx',
        options1: "Exit conversion",
        options2: "Next problem",
        options3: "Show complete Solution",
     },
  Scs:" D_x (3x)^4-5+sinx-5 cosx )=D_x((3x)^4 )-D_x (5)+D_x (sinx )-D_x (5 cosx )=3D_x (x^4 )-0+cosx-5D_x (cosx)=3(4x^3 )+cosx-5(-sinx )=12x^3+cosx+5 sinx"
   
});

// q1.save();

app.use(cors());
app.get('/fetch',(req,res)=>{
  qs.find((err,val)=>{
    if(err){
      console.log("error");
    }
    else{
    res.json(val);
  }
  })
})
