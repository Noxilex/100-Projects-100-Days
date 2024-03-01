<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
  <template>
    <div id="app">
      <div class="description">
        <h1>{{title}}</h1>
        <i v-html="description"></i>
      </div>
      <div class="project">
        <div class="splashscreen">
          <button @click="handleRequest">Request</button>
          <div class="search-area">
            <select name="" id="" class="homeCountries" >
              <option value="" v-for="(country, index) in homeCountries" :key="index">{{ country }}</option>
            </select>
            <select name="" id="" class="servingCountries" >
              <option value="" v-for="(country, index) in servingCountries" :key="index">{{ country }}</option>
            </select>
          </div>
          <div class="card-list">
          <b-card
            :title="project.name"
            :img-src="project.thumbnailUrl"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            v-for="(project, index) in projects" :key="index"
          >
            <b-card-text class="description">
              {{limitText(project.description)}}
            </b-card-text>

            <b-button :href="project.infoPage" target="_blank" variant="primary">Get more infos</b-button>
          </b-card>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  const API_KEY = "64670cfb-3121-473e-8155-7b73fb37b74c"
  export default {
    data() {
      return {
        title: 'Charity Finder',
        description: 'Utilize the <a href="https://www.globalgiving.org/" target="_blank">Global Giving</a> organizations API to provide your users with a list of global charities',
        organization: {},
        projects: [],
        homeCountries: ["France", "Angleterre", "Allemagne"],
        servingCountries: ["France", "Angleterre", "Allemagne"],
        nextProjectId: null
      };
    },
    methods: {
      limitText(text){
        if(text.length < 200){
          return text
        }else{
          return text.substr(0, 200) + "..."
        }
      },
      handleRequest(){
        let url = new URL("https://api.globalgiving.org/api/public/projectservice/countries/fr/projects/active")
        let nextProjectId = ""
        this.projects = []
        console.log(this.nextProjectId)
        if(this.nextProjectId){
          nextProjectId = this.nextProjectId
          this.nextProjectId = null
        }
        let params = new URLSearchParams({
          api_key: API_KEY,
          nextProjectId
        })
        // Append parameters to the URL manually
        for (const [key, value] of params) {
          url.searchParams.append(key, value);
        }
        
        this.fetchXML(url, (xmlDoc) => {
          console.log(xmlDoc)
          nextProjectId = xmlDoc.querySelector("nextProjectId")
          if(nextProjectId){
            this.nextProjectId = nextProjectId.textContent
          }
          
          let p = new Map();
          Array.from(xmlDoc.querySelectorAll("project")).forEach(el => {
            let id = el.querySelector("organization > id").textContent
            let imageNode = el.querySelector('organization > logoUrl')
            let description = el.querySelector('organization > mission')
            let infoPage = el.querySelector('organization > url')
            console.log(id)
            p.set(id,{
              id: id ? id : "",
              name: el.querySelector("organization > name").textContent,
              thumbnailUrl: imageNode ? imageNode.textContent : "",
              description: description ? description.textContent : "",
              infoPage: infoPage ? infoPage.textContent : ""
            })
          });
          this.projects = Array.from(p.values())

          console.log(this.projects)
        } )
      },
      async getThemes(){
        
      },
      fetchXML(url, callback){
        fetch(url).then(res => res.text()).then(xmlString => {
          // Parse the XML string to a DOM object
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

          callback(xmlDoc)
        })

      }
      
    },
    created(){
    }
  };
  </script>
  
  <!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
  <style scoped>
#app {
    margin: 0;
    padding: 0;
    border: 0;
    min-height: 100vh;
    max-width: 100vw;
    font-family: Tahoma;
    background: radial-gradient(#232323, #111);
    color: white;
    display: grid;
    place-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    padding: 20px;
    text-align: center;
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 10px;
  }
.card-text {
  text-align: justify;
  }
  
  </style>