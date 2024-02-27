<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
  <template>
    <div id="app">
      <div class="description">
        <h1>{{title}}</h1>
        <i v-html="description"></i>
      </div>
      <div class="project">
        <div class="splashscreen">

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Charity Finder',
        description: 'Utilize the <a href="https://www.globalgiving.org/" target="_blank">Global Giving</a> organizations API to provide your users with a list of global charities',
        organization: {}
      };
    },
    methods: {
      fetchXML(url, callback){
        fetch(url).then(res => res.text()).then(xmlString => {
          console.log(xmlString)
          // Parse the XML string to a DOM object
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

          callback(xmlDoc)
        })

      }
      
    },
    created(){
      this.fetchXML('./data.xml', (document) => {
        let address = document.querySelector('organization > addressLine1').textContent
        this.organization = {
          id: 0,
          name: document.querySelector('organization > name').textContent,
          address,
          logo: document.querySelector('')
        }
      });
    }
  };
  </script>
  
  <!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
  <style>
    body {
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
  }
  
  #app {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    padding: 20px;
    text-align: center;
  }
  
  </style>