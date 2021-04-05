<script>
  // must import from /src to enable style overrides
  import { MaterialApp } from "svelte-materialify/src";
</script>

<MaterialApp>
  <main>
    <slot />
  </main>
</MaterialApp>