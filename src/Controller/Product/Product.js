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










    const scrapeLogic = async (req,res) => {
      console.log("rahul")
      const browser = await puppeteer.launch({
       
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
        executablePath:
          process.env.NODE_ENV === "production"
            ? "/user/bin/google-chrome-stable"
            : puppeteer.executablePath(),
      });
      try {
        const page = await browser.newPage();
    
        await page.goto("https://www.flipkart.com/");
    
        // Set screen size
        await page.setViewport({ width: 1080, height: 1024 });
    
        // Type into search box
        await page.type("._3704LK", "bra");
    
        await page.keyboard.press("Enter");

        await page.click("._2KpZ6l._2doB4z");

        // Wait and click on first result
        await page.click("._3704LK");

        // const searchResultSelector = "._3704LK";

        // await page.waitForSelector(searchResultSelector);
        // await page.click(searchResultSelector);
    
        const url =  page.url()
        
       console.log(url)



      // await page.close();




        // // Locate the full title with a unique string
        // const textSelector = await page.waitForSelector(
        //   "text/Customize and automate"
        // );
        // const fullTitle = await textSelector.evaluate((el) => el.textContent);
    
        // // Print the full title
        // const logStatement = `The title of this blog post is ${fullTitle}`;
        // console.log(logStatement);

       res.status(200).send({ status: true, data:url})
     
      } catch (e) {
        console.error(e);
        res.send(`Something went wrong while running Puppeteer: ${e}`);
      } finally {
        await browser.close();
      }
    };


































module.exports={Products ,scrapeLogic}
