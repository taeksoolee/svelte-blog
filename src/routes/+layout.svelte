<script lang="ts">
  
</script>

<div>
  <section>
    <nav class="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li>
          <a href="/develop">Develop</a>
          <ul>
            <li>
              <a href="/develop/react">React</a>
              <ul>
                <li><a href="/develop/react/getting-start">Getting Start</a></li>
              </ul>
            </li>
            <li>
              <a href="/develop/nextjs">NestJS</a>
              <ul>
                <li><a href="/develop/nextjs/getting-start">Getting Start</a></li>
              </ul>
            </li>
            <li>
              <a href="/develop/svelte">Svelte</a>
              <ul>
                <li><a href="/develop/svelte/getting-start">Getting Start</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="/tech-review">Thch Review</a>
          <ul>
            <li>
              <a href="/tech-review/anker">Anker</a>
              <ul>
                <li><a href="/tech-review/anker/q45">Space Q45</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </section>

  <main>
    <slot></slot>
  </main>
</div>

<style>
  .navigation {

  }
</style>