
// let themes = []
// let organizations = []

import { Theme } from "@/models/theme";

const API_BASE_URL = "https://api.globalgiving.org/api/public"
const API_KEY = process.env.VUE_APP_API_KEY

const api = {

    getOrganizations(){
        let response = "";

        let params = new URLSearchParams({
            api_key: API_KEY
        })
        this.fetchXML(API_BASE_URL, params)
        return response
    },

    async getThemes(){
        let endPoint = "/projectservice/themes"
        let params = new URLSearchParams({
            api_key: API_KEY
        })
        let xmlData = await this.fetchXML(new URL(API_BASE_URL+endPoint), params)
        return Array.from(xmlData.querySelectorAll("theme")).map(el => {
            return new Theme(el.querySelector('id').textContent, el.querySelector('name').textContent)
        })
    },

    getCountries(){

    },

    // search(searchString, start, filters){

    // },

    fetchXML(url, params){
        for (const [key, value] of params) {
            url.searchParams.append(key, value);
          }
        return fetch(url).then(res => res.text()).then(xmlString => {
            // Parse the XML string to a DOM object
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
            return xmlDoc
        })

      }


}

export default api;