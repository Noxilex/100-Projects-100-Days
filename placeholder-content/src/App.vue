<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
  <template>
    <div id="app">
      
      <div class="project flex-r gap centered wrap">
        <div v-for="card in cards">
          <div class="card flex-c" v-if="card && !card.loading">
            <img :src="card.image" alt="Card image" class="card-image"  :class="{placeholder: loading}"></img>
            <div class="card-content flex-c gap">
              <div class="title" :class="{placeholder: loading}">
                {{limitText(card.title, 25)}}
              </div>
              <div class="description" :class="{placeholder: loading}">
                {{limitText(card.description, 200)}}
              </div>
              <div class="user-profile flex-r gap">
                <img :src="card.user.profilePicture" alt="user profile picture" class="user-profile-pic" :class="{placeholder: loading}">
                <div class="user-content flex-c">
                  <div class="user-name" :class="{placeholder: loading}">
                    {{card.user.name}}
                  </div>
                  <div class="date" :class="{placeholder: loading}">
                    {{new Date(card.user.registrationDate).toLocaleDateString("fr-FR", dateOptions)}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card flex-c" v-else>
            <div src="" alt="" class="card-image placeholder-image">
            </div>
            <div class="card-content flex-c gap">
              <div class="title placeholder">
              </div>
              <div class="description placeholder">
              </div>
              <div class="user-profile flex-r gap">
                <div src="" alt="" class="user-profile-pic placeholder-image"></div>
                <div class="user-content flex-c">
                  <div class="user-name placeholder">
                  </div>
                  <div class="date placeholder">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="sim-btn" @click="sim3G">Simulate 3G Loading</button>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        title: 'Project title',
        description: 'Project description',
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et orci nec nulla dignissim fringilla non sit amet justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu laoreet lectus. Curabitur sed semper lectus. Ut ornare malesuada nunc, ut dictum magna dictum sit amet. Mauris sagittis gravida libero, non rhoncus orci condimentum a. Praesent elementum felis aliquam nulla semper, id varius dolor vestibulum. Ut lobortis nec lorem dapibus tincidunt. Phasellus ultrices massa id vehicula accumsan. Nunc quis tincidunt ipsum. Sed vel ipsum vitae felis viverra pulvinar et vitae purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer molestie ipsum vitae magna suscipit, a efficitur libero maximus. Suspendisse vestibulum cursus dui. Sed posuere enim quam, at ultrices libero blandit non.',
        cards: [],
         dateOptions: {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
        },
        iterator: 0
        
      };
    },
    methods: {
      limitText(text, nbChar){
        return text.length < nbChar ? text : text.substring(0,nbChar) + "..."
      },
      getRandomUser(){
        return fetch("https://randomuser.me/api/").then(res => res.json()).then(json => {
          const user = json.results[0]
          return {
            name: user.name.first + " " + user.name.last,
            profilePicture: user.picture.thumbnail,
            registrationDate: user.registered.date
          }
        })
      },
      loadImage(url){
        return new Promise((success, error) => {
          const image = new Image();
          image.src = url;
          image.onload = success
          image.onerror = error
        })
      },
      reloadCards(cards){
        cards.forEach(card => {
          let promise1 = this.loadImage(card.image)
          let promise2 = this.loadImage(card.user.profilePicture)
          let allPromise = Promise.all([promise1, promise2])
          allPromise.then(values => {
            card.loading = false;
          }).catch(errors => {
            console.error(errors)
          })
        })
      },
      async loadNewCards(nbCards){
        for(let i = 0; i < nbCards; i++){
          let card = {
            loading: true,
            user: {
              name: "",
              profilePicture: ""
            },
            date: new Date(),
            title: this.lorem,
            description: this.lorem,
            image: "https://source.unsplash.com/random/1600x900?a=" + ++this.iterator
          }        
          let promise1 = this.loadImage(card.image)
          // let promise2 = this.loadImage(card.user.profilePicture)
          let allPromise = Promise.all([promise1, this.getRandomUser()])
          allPromise.then(values => {
            let user = values[1];
            card.user = user;
            this.loadImage(user.profilePicture).then(() => {
              card.loading = false;
            })
          }).catch(errors => {
            console.error(errors)
          })
          
          this.cards.push(card)
        }
      },
      reset(){
        this.cards.forEach(card => {card.loading = true})
        
      },
      sim3G(){
        this.reset();
        setTimeout(() => {
          this.reloadCards(this.cards)
        }, 2500)
      }
    },
    async created(){
      // this.loadCards(this.cards)
      this.loadNewCards(5)
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
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  }
    .project {
      width: 100%;
      padding: 20px;
    }
  
    .card {
      max-width: 400px;
      min-width: min-content;
      border-radius: 20px;
      box-shadow: 0px 3px 10px white;
      overflow: hidden;
      
    }
    .card-image {
      min-height: 200px;
      height: 250px;
      width: 100%;
      object-fit: cover;
    }
    .card-content {
      padding: 20px;
      text-align: left;
      min-height: 100px;
      
      .title {
        font-size: x-large;
        font-weight: bold;
        min-height: 30px;
      }
      .description {
        min-height: 100px;
        width: 100%;
      }
    }
    .user-profile {
      margin-top: 10px;
      .user-profile-pic {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        object-fit: fit;
      }
      .user-content {
        justify-content: space-evenly;
        .user-name {
          font-weight: bold;
          letter-spacing: 1px;
          min-height: 20px;
          min-width: 100px;
        }
        .date {
          font-size: small;
          color: grey;
          min-height: 20px;
          min-width: 100px;
        }
      }
    }
    .placeholder-image,.placeholder {
      background-size: 200% 100%;
      background-image: linear-gradient(0.25turn, lightgrey, grey, lightgrey);
      animation: bgAnim 1s linear infinite ;
    }
    .placeholder {
      border-radius: 10px;
    }
    .flex-r {
      display: flex;
      flex-flow: row nowrap;
    }
    .wrap {
      flex-wrap: wrap;
    }
    .flex-c {
      display: flex;
      flex-flow: column nowrap;
    }
    .gap {
      gap: 20px;
    }
    .centered {
      justify-content: center;
      align-items: center;
    }
    * {
      box-sizing: border-box;
    }
    @keyframes bgAnim {
      0% {
        background-position: 50% 0;
      }
      100% {
        background-position: -150% 0;
      }
    }
  </style>