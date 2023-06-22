const cheerio = require("cheerio");
const request = require("request");
const puppeteer = require("puppeteer");





const Products = async (req, res) => {


  try {


     
    const url = req.body.headers.url
    const Data1 = [];

    if(!url) return   res.status(500).send({ status: false, msg:"product not found for tracking"})

    request(url,function (error, response, html) {
        if(error){
            console.log(error)
        }
        
        handle(html)
        
      })
   
   
      const handle= async(html)=>{
   
         
         const $ =  cheerio.load(html)
          const price=  $('._30jeq3._16Jk6d')
          const img=  $('._2r_T1I._396QI4')
          const name=  $('.B_NuCI')
          const rating=  $('._3LWZlK._138NNC')
   
          const d=$(price).text()
          let x=$(img).attr('src')
          const r=$(rating).text()
          const n=$(name).text()
          const obg={
            price:d,
            img:x,
            rating:r,
            name:n,
            link:url
          }
         
          Data1.push(obg)
         
         // res.send({status:true,msg:"data fetch successfuly"})
         res.status(200).send({ status: true, data:Data1})

      }


    


  }

  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }

}



module.exports={Products}
