<template>
  <div class="app">
    <div class="blog">
      <div class="blog-part is-menu">
        <a href="https://www.instagram.com/scp_hank/" class="blog-menu">
          IG
          <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-arrow-up-right" viewBox="0 0 24 24">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
        <a href="https://github.com/24626982" class="blog-menu">GitHub</a>
        <a href="https://www.linkedin.com/in/scphank0108" class="blog-menu">Linkedin</a>
        <a href="https://www.youtube.com/@SCP-RED" class="blog-menu">YouTube</a>
        <a href="#" class="blog-menu mention">@PersonalBlog</a>
        <a href="mailto:hank50380@gmail.com" class="blog-menu subscribe">Email</a>
      </div>
      <div class="blog-header blog-is-sticky">
        <div class="blog-article header-article">
          <div class="blog-big__title">SCP</div>
          <div class="blog-menu rounded small-title">Daily complaints</div>
        </div>
        <div class="blog-article daily-complaints">
          連會議記錄都不做，就在一旁耍白癡，還以為自己很重要，真的很可悲
        </div>
        <div class="blog-article page-number">
          NO. 00
        </div>
      </div>
      <div class="blog-header-container">
        <div class="blog-header">
          <div class="blog-article header-article">
            <div class="blog-big__title">Hank</div>
            <div class="blog-menu small-title date">{{ fromtime }}</div>
          </div>
          <div class="blog-article">
            <img
              src="https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="">
            <h2>Sharing The <span>Widespread</span> Acclaim About Motivation</h2>
            <div class="blog-detail">
              <span>By Hank</span>
              <span>5 Min Read</span>
            </div>
            <p>Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's
              unconventional</p>
            <a href="https://tw.manhuagui.com/list/japan/update.html"> <!--待修改-->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right"
                viewBox="0 0 24 24">
                <path d="M15 10l5 5-5 5" />
                <path d="M4 4v7a4 4 0 004 4h12" />
              </svg>
              See More
            </a>
          </div>
        </div>
        <div class="blog-header">
          <div class="blog-article header-article">
            <div class="blog-big__title">Control</div>
            <div class="blog-menu small-title date">{{ fromtime }}</div>
          </div>
          <div class="blog-article">
            <img
              src="https://images.unsplash.com/photo-1616248249518-b16013cd4e42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="">
            <h2>How 2020 Changed <span>Understanding</span> Of Mental Health</h2>
            <div class="blog-detail">
              <span>By Scarlett Witch</span>
              <span>5 Min Read</span>
            </div>
            <p>Time is defines ad the indefinete continued progress, with critics praising Ocean's introspective lyrics
              and the album's</p>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-right"
                viewBox="0 0 24 24">
                <path d="M15 10l5 5-5 5" />
                <path d="M4 4v7a4 4 0 004 4h12" />
              </svg>
              See More
            </a>
          </div>
        </div>
      </div>
      <div class="blog-part right-blog">
        <marquee width="100%" direction="left">
          <span>People call 'love', is just a chemical reaction that compels animal to breed. It hits hard, then it
            slowly fades, leaving you stranded in a filling marriage.</span>
          <span>To live is to risk it all. Otherwise, you are just an inert chunk of randomly assembled molecules,
            drifting wherever the universe blows you</span>
          <span>No union built on running from your problems lasts more than five years, seven tops</span>
        </marquee>
        <div class="blog-right-title-container">
          <div class="blog-right-title">
            Featured Articles
          </div>
          <div class="blog-menu rounded">See All</div>
        </div>
        <div class="blog-right">
          <div class="blog-right-container">
            <div class="blog-title-date">
              <div class="blog-right-page">1</div>
              <div class="date">12.06.2021</div>
            </div>
            <div class="blog-right-page-title">Blonde - Widespread Acclaim</div>
            <div class="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's
              introspective lyrics and the album's</div>
          </div>
          <div class="blog-right-container">
            <div class="blog-title-date">
              <div class="blog-right-page">2</div>
              <div class="date">12.06.2021</div>
            </div>
            <div class="blog-right-page-title">Introspective Lyrics and Beats</div>
            <div class="blog-right-page-subtitle">When we toured Scotland we stopped at several selft-sealing hpuses
              because hotels would</div>
          </div>
          <div class="blog-right-container">
            <div class="blog-title-date">
              <div class="blog-right-page">3</div>
              <div class="date">12.06.2021</div>
            </div>
            <div class="blog-right-page-title">The Language Of Gris: Comples Beauty Of Monochrome</div>
            <div class="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne
              Holtrop who cleverly emulated</div>
          </div>
          <div class="blog-right-container">
            <div class="blog-title-date">
              <div class="blog-right-page">4</div>
              <div class="date">12.06.2021</div>
            </div>
            <div class="blog-right-page-title">A24 IS LAUNCHING ITS OWN BEAUTY BRAND</div>
            <div class="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's
              introspective lyrics and the album's</div>
          </div>
          <div class="blog-right-container">
            <div class="blog-title-date">
              <div class="blog-right-page">5</div>
              <div class="date">12.06.2021</div>
            </div>
            <div class="blog-right-page-title">Elon Musk's SpaceX is launching a moon satellite</div>
            <div class="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne
              Holtrop who cleverly emulated</div>
          </div>
          <div class="blog-right-container">
            <div class="blog-title-date">
              <div class="blog-right-page">6</div>
              <div class="date">12.06.2021</div>
            </div>
            <div class="blog-right-page-title">What Happens When You Leave Your Old life Behind</div>
            <div class="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne
              Holtrop who cleverly emulated</div>
          </div>
          <div class="circle">
            <div class="circle-title">Leave Your Old Life Behind</div>
            <div class="circle-subtitle">Don't try to be like someone else, be yourself. Be secure with yourself.</div>
            <div class="circle-footer">Explore</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  setup() {
    let today_Date: Date = new Date();
    let fromtime: string = today_Date.toLocaleString();
    return { fromtime }
  },
  methods: {

  },

})
</script>

<style></style>
