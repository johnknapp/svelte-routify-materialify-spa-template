<script>
  import { MaterialApp } from "svelte-materialify";
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<MaterialApp>
  <Router {routes} />
</MaterialApp>