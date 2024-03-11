<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
  <template>
    <div id="app">
      <div class="project">
        <h1>Infinite Scroll</h1>
        <div class="infinite">
          <div v-for="(post, index) in posts" :key="index" class="post">
            <h1>{{post.title}}</h1>
            <i>{{randomDate()}}</i>
            <p>{{post.text}}</p>
          </div>
        </div>
        <div class="container" v-if="loading">
          <div class="progress">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Project title',
        description: 'Project description',
        posts: [],
        loading: true,
        content: [
          {
            title: 'Fusce ipsum neque, semper eget.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus sollicitudin quam, at blandit libero interdum sit amet. Suspendisse suscipit, mi ut pharetra vehicula, mauris magna imperdiet purus, nec hendrerit lacus lectus at sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vitae nisl tempor, luctus tortor eget, tincidunt arcu. Nulla ex libero, commodo at rutrum ac, euismod et mi. Nulla facilisi. Pellentesque nulla elit, eleifend ac justo sed, volutpat dapibus eros. Nullam congue ante eu elit viverra efficitur. Vestibulum tincidunt libero a tristique lobortis.'
          },
          {
            title: 'Suspendisse consectetur bibendum dapibus. In.',
            text: 'Sed vel purus purus. Integer sollicitudin massa sagittis, mollis dolor ut, suscipit nisl. Ut consectetur sollicitudin vulputate. Donec placerat tempor dolor eget cursus. Duis hendrerit consectetur fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vitae scelerisque sapien, in dictum nunc. Proin hendrerit molestie malesuada. Vivamus ut faucibus magna, non consectetur nulla. Pellentesque augue odio, faucibus quis vehicula et, mattis non metus. Donec pharetra diam quis augue dignissim placerat. Sed convallis eget mauris non tempor. Duis sit amet dui sit amet neque rutrum pulvinar.'
          },
          {
            title: 'Nunc a egestas nibh, malesuada.',
            text: 'Etiam consequat imperdiet ipsum, quis vulputate lorem tincidunt sit amet. Sed molestie neque vel quam aliquam, sit amet venenatis ante sagittis. Curabitur elementum tortor non arcu vestibulum ultrices. Aliquam erat volutpat. Duis auctor nisi ut euismod ullamcorper. Cras metus purus, tempor et vehicula a, mollis ut tellus. Integer euismod viverra lorem, ultricies elementum est egestas ut. Nam vitae mi tempus neque molestie sollicitudin. Nunc suscipit velit quis porta hendrerit. Phasellus eget quam sagittis, euismod magna nec, tincidunt massa. Sed aliquet rhoncus nisl, et vehicula diam tincidunt id.'
          },
          {
            title: 'Sed felis velit, sollicitudin at.',
            text: 'Maecenas a consectetur ipsum. Ut egestas justo vitae libero aliquet cursus. Etiam pulvinar magna id tempor mattis. Donec in commodo justo, ac aliquam ex. Etiam consectetur magna non venenatis interdum. Sed sed metus dolor. Phasellus suscipit fringilla venenatis. Duis eget enim imperdiet, bibendum ante quis, malesuada turpis. Morbi suscipit orci neque, a ultrices libero interdum nec. Nam ut ornare velit. Donec ut augue ex. Nunc fringilla hendrerit est quis mattis.'
          },
          {
            title: 'Integer volutpat tincidunt consequat. Donec.',
            text: 'Integer ac leo lectus. Vestibulum eu cursus urna. Duis porta blandit mi sit amet blandit. Ut urna mi, maximus id tempor ut, fringilla a erat. Cras vel facilisis enim. Nunc pellentesque sed tellus at consectetur. Etiam eu enim tincidunt, eleifend risus vulputate, feugiat nunc. Morbi eu rutrum augue. Vestibulum nunc elit, feugiat eget massa in, feugiat volutpat eros. Mauris tincidunt vel ipsum ac hendrerit. Phasellus nec diam et ex tristique malesuada. Morbi ut est mattis, ullamcorper lectus ac, porttitor est. Nullam aliquet vehicula tempus. Nulla id tellus rhoncus, dapibus tortor nec, lobortis velit. Quisque dapibus elementum metus, at ultricies orci fermentum vel.'
          }        
        ]
      };
    },
    methods: {
      handleScroll(event){
        console.log(event)
      },
      randomDate(){
        let date = new Date();
        return date.toLocaleString()
      },
      loadMoreProjects(nb, delay){
        this.loading = true;
        setTimeout(() => {
          for(let i = 0; i < nb; i++){
            let randomItem = this.content[Math.floor(Math.random()*this.content.length)]
            this.posts.push(
              randomItem
            )
          }
          this.loading = false;
        }, delay)
      }
    },
    created(){
      this.loadMoreProjects(5, 0)
      document.addEventListener('scroll', (e) => {
        //Only add more project if we scroll to the bottom & we're not already loading
        if (e.target.scrollingElement.scrollTop + e.target.scrollingElement.clientHeight === e.target.scrollingElement.scrollHeight && !this.loading) {
          this.loadMoreProjects(3, 600)
        }
      })
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
    align-items: center;
    height: 100%;
    text-align: center;
    padding: 20px;
    overflow: auto;
  }

  .project {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .infinite {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
  }
    
    .post {
      width: 800px;
      max-width: 100%;
      background-color: wheat;
      color: black;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5); /* Set the shadow properties */
      padding: 20px;
      text-align: justify;

      h1 {
        text-align: center;
      }
    }

    .container {
      width: 100%;
      display: grid;
      place-items: center;
      padding: 20px;
    }
    .progress {
      display: flex;
      justify-content: space-evenly;
      width: 200px;
      max-width: 100%;
      margin-top: 20px;

      .dot {
        height: 5px;
        width: 5px;
        border-radius: 100%;
        background-color: white;
        animation: 0.3s linear 0.3s alternate infinite jump;
      }

      .dot:nth-child(1){
        animation-delay: 100ms;
      }
      .dot:nth-child(2){
        animation-delay: 200ms;
      }
    }

    @keyframes jump {
      from {
        transform: translateY(0px);
      }

      to {
        transform: translateY(-20px);
      }
    }
  
  </style>