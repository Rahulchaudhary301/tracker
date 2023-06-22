const cheerio = require("cheerio");
const request = require("request");
const puppeteer = require("puppeteer");
const { urlencoded } = require("express");




let rahul='a'





const SrcbeData = async (req, res) => {

  

  try {
    const name = req.body.headers.name;
    console.log(name)


    const Data1 = [];
    const Data2 = [];
    const Data3 = []
    const BrowerOpenPromise = puppeteer.launch({ headless: true });
    let page;

    BrowerOpenPromise.then((browser) => {
      return browser.pages();
    })
      .then((browserPage) => {
        page = browserPage[0];
        page.setViewport({ width: 1080, height: 1024 });
        return page.goto("https://www.google.com/");
      })
      .then(() => {
        let data = page.waitForSelector("textarea", { visible: true });
        return data;
      })
      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.type("textarea", "flipcart");
        return keyWillSentPromise;
      })
      .then(() => {
        return page.keyboard.press("Enter");
      })
      .then(() => {
        let data = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
             visible: true,
        });
        return data;
      })
      .then(() => {
        return page.click("h3.LC20lb.MBeuO.DKV0Md" );
      })
      .then(() => {
        let data = page.waitForSelector("._2KpZ6l._2doB4z", { visible: true });
        return data;
      })
      .then(() => {
        return page.click("._2KpZ6l._2doB4z");
      })

      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.waitForSelector("._3704LK", {
          visible: true,
        });
        return keyWillSentPromise;
      })
      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.type("._3704LK", `${name}`);
        return keyWillSentPromise;
      })

      .then(() => {
        return page.keyboard.press("Enter");
      })

      .then(async () => {
        const url = await page.url();

        request(url, function (error, response, html) {
          if (error) {
            console.log(error);
          }
          handle(html);
        });

        await page.close();
        // await BrowerOpenPromise.close();



        const handle = (html) => {

          const $ = cheerio.load(html);
          const price = $("._4ddWXP ._30jeq3");
          const name = $("._4ddWXP .s1Q9rs");
          const img = $(".CXW8mj ._396cs4");
          const lii = $("._4ddWXP ._2rpwqI");

          const pri = $("._2kHMtA ._30jeq3");
          const na = $("._2kHMtA ._4rR01T");
          const im = $('.CXW8mj img')
          const li = $('._2kHMtA ._1fQZEK')

          const p = $("._1xHGtK._373qXS ._30jeq3");
          const n = $("._1xHGtK._373qXS ._2WkVRV");
          const ii = $('._1xHGtK._373qXS ._2r_T1I');
          const link = $("._1xHGtK._373qXS ._2UzuFa");

          //const price=$('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2)>._1AtVbE.col-12-12 ._30jeq3')


          for (let i = 0; i < 30; i++) {
            let b = $(img[i]).attr('src')
            let l = $(lii[i]).attr('href')
            let pp = parseFloat($(price[i]).text().replace(/[^\d.]/g, ""));
            //let ppp=parseFloat(pp.replace(",", ""));
            const x = {
              Name: $(name[i]).text(),
              price: pp,
              Image: b,
              link: l
            };
            Data1.push(x);
          }

          for (let i = 0; i < 30; i++) {
            let c = $(im[i]).attr('src')
            let l = $(li[i]).attr('href')
            let pp = parseFloat($(pri[i]).text().replace(/[^\d.]/g, ""));
            const y = {
              Name: $(na[i]).text(),
              price: pp,
              Image: c,
              link: l
            };

            Data2.push(y);
          }




          for (let i = 0; i < 30; i++) {
            let c = $(ii[i]).attr('src')
            let l = $(link[i]).attr('href')
            let pp = parseFloat($(p[i]).text().replace(/[^\d.]/g, ""));
            const z = {
              Name: $(n[i]).text(),
              price: pp,
              Image: c,
              link: l
            };

            Data3.push(z);
          }



          if (Data1[0].Name != "") {
            console.log({ From1: Data1, total: Data1.length })
            
            return res.status(201).send({ status: true, data: Data1 })
          }


          if (Data2[0].Name != "") {
            console.log({ From2: Data2, total: Data2.length })
            // res.send({msg:"fetch sucessfully",data:Data2})
            return res.status(201).send({ status: true, data: Data2 })
          }

          if (Data3[0].Name != "") {
            console.log({ From3: Data3, total: Data3.length })

            // let sortData= Data3.sort((a, b) => a.price - b.price);

            return res.status(200).send({ status: true, data: Data3 })

          }

           res.status(200).send({ status: true, data:[1]})

        };
      });
  }


  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }

}























const AmonZone = async (req, res) => {


  try {


    console.log(rahul)

    const name = req.body.headers.name;




    const Data1 = [];
    const Data2 = [];
    const Data3 = []
    const BrowerOpenPromise = puppeteer.launch({ headless: true });
    let page;



    BrowerOpenPromise.then((browser) => {
      return browser.pages();
    })
      .then((browserPage) => {
        page = browserPage[0];
        page.setViewport({ width: 1080, height: 1024 });
        return page.goto("https://www.google.com/");
      })
      .then(() => {
        let data = page.waitForSelector("textarea", { visible: true });
        return data;
      })
      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.type("textarea", "amazone");
        return keyWillSentPromise;
      })
      .then(() => {
        return page.keyboard.press("Enter");
      })
      .then(() => {
        let data = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
          visible: true,
        });
        return data;
      })
      .then(() => {
        return page.click("h3.LC20lb.MBeuO.DKV0Md");
      })
      //   .then(() => {
      //     let data = page.waitForSelector("#twotabsearchtextbox", { visible: true });
      //     return data;
      //   })
      //   .then(() => {
      //     return page.click("#twotabsearchtextbox");
      //   })

      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.waitForSelector("#twotabsearchtextbox", {
          visible: true,
        });
        return keyWillSentPromise;
      })
      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.type("#twotabsearchtextbox", `${name}`);
        return keyWillSentPromise;
      })

      .then(() => {
        return page.keyboard.press("Enter");

      })
      .then(() => {
        let data = page.waitForSelector("#twotabsearchtextbox", { visible: true });
        return data;
      })


      .then(async () => {

        const url = await page.url();

        //console.log(url)

        request(url, function (error, response, html) {

          if (error) {
            console.log(error);
          }



          handle(html);


        });

        await page.close();
        // await BrowerOpenPromise.close();



        const handle = (html) => {



          const $ = cheerio.load(html);
          const price = $(".s-card-container .a-price-whole");
          const name = $(".s-card-container .a-size-mini.s-line-clamp-1 span");
          const img = $(".s-card-container .s-image-tall-aspect img");
          const link = $(".s-card-container .a-link-normal.s-no-outline");

          const pri = $(".s-card-container .a-price-whole");
          const na = $(".s-card-container .a-size-medium");
          const im = $('.s-card-container img')
          const lin = $('.s-card-container .a-link-normal.s-no-outline')

          const p = $("._1xHGtK._373qXS ._30jeq3");
          const n = $("._1xHGtK._373qXS ._2WkVRV");
          const ii = $('._1xHGtK._373qXS ._2r_T1I')
          const li = ''

          //const price=$('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2)>._1AtVbE.col-12-12 ._30jeq3')


          for (let i = 0; i < 30; i++) {
            let b = $(img[i]).attr('src')
            let l = $(link[i]).attr('href')
            let pp = parseFloat($(price[i]).text().replace(",", ""));
            const x = {
              Name: $(name[i]).text(),
              price: pp,
              Image: b,
              link: l
            };
            Data1.push(x);
          }

          for (let i = 0; i < 30; i++) {
            let c = $(im[i]).attr('src')
            let l = $(lin[i]).attr('href')
            let pp = parseFloat($(pri[i]).text().replace(",", ""));
            const y = {
              Name: $(na[i]).text(),
              price: parseInt(pp),
              Image: c,
              link: l
            };

            Data2.push(y);
          }




          for (let i = 0; i < 30; i++) {
            let c = $(ii[i]).attr('src')
            let pp = parseFloat($(p[i]).text().replace(",", ""));
            const z = {
              Name: $(n[i]).text(),
              price: parseInt(pp),
              Image: c
            };

            Data3.push(z);
          }



          if (Data1[0].Name != "") {
            console.log({ From1: Data1, total: Data1.length })

            //res.send({msg:"fetch sucessfully",data:Data1})
            return res.status(201).send({ status: true, data: Data1 })
          }


          if (Data2[0].Name != "") {
            console.log({ From2: Data2, total: Data2.length })
            // res.send({msg:"fetch sucessfully",data:Data2})
            res.status(201).send({ status: true, data: Data2 })
          }

          if (Data3[0].Name != "") {
            console.log({ From3: Data3, total: Data3.length })
            res.status(201).send({ status: true, data: Data3 })
            //res.send({msg:"fetch sucessfully",data:Data3})
          }

          return res.status(201).send({ status: true, data: [1] })
        };
      });
  }


  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }



}

















// const Myntra= async(req,res)=>{


//     try{

//         const name=req.body.name;




//             const Data1 = [];
//             const Data2 = [];
//             const Data3=[]
//             const BrowerOpenPromise = puppeteer.launch({headless:true});
//             let page;

//             BrowerOpenPromise.then((browser) => {
//               return browser.pages();
//             })
//               .then((browserPage) => {
//                 page = browserPage[0];
//                 page.setViewport({ width: 1080, height: 1024 });
//                 return page.goto("https://www.google.com/");
//               })
//               .then(() => {
//                 let data = page.waitForSelector("textarea", { visible: true });
//                 return data;
//               })
//               .then(() => {
//                 // console.log('Reached google home page')
//                 let keyWillSentPromise = page.type("textarea", "alibaba");
//                 return keyWillSentPromise;
//               })
//               .then(() => {
//                 return page.keyboard.press("Enter");
//               })
//               .then(() => {
//                 let data = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
//                   visible: true,
//                 });
//                 return data;
//               })
//               .then(() => {
//                 return page.click("h3.LC20lb.MBeuO.DKV0Md");
//               })





//               .then(() => {
//                 // console.log('Reached google home page')
//                 let keyWillSentPromise = page.waitForSelector(".fy23-icbu-search-bar-inner input", {
//                   visible: true,
//                 });
//                 return keyWillSentPromise;
//               })

//               .then(() => {
//                 // console.log('Reached google home page')
//                 let keyWillSentPromise =  page.type(".fy23-icbu-search-bar-inner input", 'module');
//                 return keyWillSentPromise;
//               })

//               .then(() => {
//                 return page.keyboard.press("Enter");

//               })

//                 .then(() => {
//                 let data = page.waitForSelector(".fy23-icbu-search-bar-inner input", { visible: true });
//                 return data;
//               })

//              // await page.setDefaultNavigationTimeout(1000)
//               .then(async () => {

//                 const url =  page.url();

//                 console.log(url)


//                   request(url,timeout=5, function (error, response, html) {

//                   if (error) {
//                     console.log(error);
//                   }
//                   handle(html);
//                 });

//                await page.close();
//               // await BrowerOpenPromise.close();



//                 const handle = (html) => {

//                   const $ = cheerio.load(html);
//                   const price = $(".component-offer-product-gallery .price-number");
//                   const name = $(".component-offer-product-gallery .product-title");
//                   const img = $(".component-offer-product-gallery .product-image img");

//                   const pri = $(".list-no-v2-outter .elements-offer-price-normal__price");
//                   const na = $(".list-no-v2-outter .elements-title-normal__content.large");
//                   const im = $('.list-no-v2-outter .seb-img-switcher__imgs img')

//                   const p = $("._1xHGtK._373qXS ._30jeq3");
//                   const n = $("._1xHGtK._373qXS ._2WkVRV");
//                   const ii = $('._1xHGtK._373qXS ._2r_T1I')

//                   //const price=$('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2)>._1AtVbE.col-12-12 ._30jeq3')


//                   for (let i = 0; i <price.length; i++) {
//                     let b=$(img[i]).attr('src')
//                     const x = {
//                       Name: $(name[i]).text(),
//                       price: $(price[i]).text(),
//                       Image: b
//                     };
//                     Data1.push(x);
//                   }

//                   for (let i = 0; i <pri.length; i++) {
//                     let c=$(im[i]).attr('src')
//                     const y = {
//                       Name: $(na[i]).text(),
//                       price: $(pri[i]).text(),
//                       Image: c
//                     };

//                     Data2.push(y);
//                   }




//                   for (let i = 0; i <20; i++) {
//                     let c=$(ii[i]).attr('src')
//                     const z = {
//                       Name: $(n[i]).text(),
//                       price:$(p[i]).text(),
//                       Image: c
//                     };

//                     Data3.push(z);
//                   }



//         // if(Data1[0].Name !=""){
//         //   console.log({From1:Data1,total:Data1.length})

//         //   res.send({msg:"fetch sucessfully",data:Data1})
//         // }
//         console.log({From2:Data2,total:Data2.length})

//           res.send({msg:"fetch sucessfully",data:Data2})

//         // if(Data2[0].Name !=""){
//         //   console.log({From2:Data2,total:Data2.length})
//         //   res.send({msg:"fetch sucessfully",data:Data2})
//         // }

//         // if(Data3[0].Name !=""){
//         //   console.log({From3:Data3,total:Data3.length})

//         //   res.send({msg:"fetch sucessfully",data:Data3})
//         // }




//                 };


//               });


//           }




//         catch(err){
//             res.send({status:false,msg:err.message})
//         }




// }

































const Ebay = async (req, res) => {


  try {

    const name = req.body.headers.name;
    console.log('Rahul', name)



    const Data1 = [];
    const Data2 = [];
    const Data3 = []
    const BrowerOpenPromise = puppeteer.launch({ headless: true });
    let page;



    BrowerOpenPromise.then((browser) => {
      return browser.pages();
    })
      .then((browserPage) => {
        page = browserPage[0];
        page.setViewport({ width: 1080, height: 1024 });
        return page.goto("https://www.google.com/");
      })
      .then(() => {
        let data = page.waitForSelector("textarea", { visible: true });
        return data;
      })
      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.type("textarea", "ebay");
        return keyWillSentPromise;
      })
      .then(() => {
        return page.keyboard.press("Enter");
      })
      .then(() => {
        let data = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
          visible: true,
        });
        return data;
      })
      .then(() => {
        return page.click("h3.LC20lb.MBeuO.DKV0Md");
      })
      //   .then(() => {
      //     let data = page.waitForSelector("#twotabsearchtextbox", { visible: true });
      //     return data;
      //   })
      //   .then(() => {
      //     return page.click("#twotabsearchtextbox");
      //   })

      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.waitForSelector(".gh-tb.ui-autocomplete-input", {
          visible: true,
        });
        return keyWillSentPromise;
      })
      .then(() => {
        // console.log('Reached google home page')
        let keyWillSentPromise = page.type(".gh-tb.ui-autocomplete-input", `${name}`);
        return keyWillSentPromise;
      })

      .then(() => {
        return page.keyboard.press("Enter");

      })
      .then(() => {
        let data = page.waitForSelector(".gh-tb.ui-autocomplete-input", { visible: true });
        return data;
      })


      .then(async () => {

        const url = await page.url();

        //console.log(url)

        request(url, function (error, response, html) {

          if (error) {
            console.log(error);
          }



          handle(html);


        });

        await page.close();
        // await BrowerOpenPromise.close();



        const handle = (html) => {


          const $ = cheerio.load(html);
          const price = $(".s-item.s-item__pl-on-bottom .s-item__price");
          const name = $(".s-item.s-item__pl-on-bottom .s-item__title");
          const img = $(".s-item__image-wrapper.image-treatment img");
          const lin = $(".s-item .s-item__image a");

        
          for (let i = 1; i < 31; i++) {
            let b = $(img[i]).attr('src')
            let l = $(lin[i]).attr('href')
            let p = parseFloat($(price[i]).text().replace("$", ""));

            let d = 81.91
            let number = p * d
            const x = {
              Name: $(name[i]).text(),
              price: parseFloat(number.toFixed(2)),
              Image: b,
              link: l
            };
            Data1.push(x);
          }



          
        
          console.log({ From1: Data1, total: Data1.length })

          //res.send({msg:"fetch sucessfully",data:Data1})
           res.status(201).send({ status: true, data: Data1 })
         
         
         
        };
      });
  }


  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }



}









































module.exports = { SrcbeData, AmonZone, Ebay }