
let themes = []
let organizations = []

const API_URL = new URL("https://api.globalgiving.org/api/public/projectservice/countries/fr/projects/active")
const API_KEY = "64670cfb-3121-473e-8155-7b73fb37b74c"
export default {

    getOrganizations(){
        let response = "";
        let params = new URLSearchParams({
            api_key:
        })
        this.fetchXML(API_URL, params)
        return response
    },

    getThemes(){

    },

    getCountries(){

    },

    search(searchString, start, filters){

    },

    fetchXML(url, params, successCb, errorCb){
        for (const [key, value] of params) {
            url.searchParams.append(key, value);
          }
        fetch(url).then(res => res.text()).then(xmlString => {
            // Parse the XML string to a DOM object
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

            successCb(xmlDoc)
        }).catch(error => {
            errorCb(error)
        })

      }


}