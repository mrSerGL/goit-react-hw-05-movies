import  translate  from  "translate" ;

translate.engine  =  "google" ;  // "google", "yandex", "libre", "deepl" 
// translate.key  =  process.env.DEEPL_KEY ;


 const translateText = async (text)=> {

    try {
        const  translatedText  =  await translate( text, "uk" )
        return translatedText
    } catch (error) {
        
    }
   
    }

  export default translateText