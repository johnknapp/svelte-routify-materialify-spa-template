<script>
  import { Chip } from 'svelte-materialify';
  import {url} from '@roxi/routify'
</script>

<h1>i m index</h1>

<a href={$url('/pizza')}>Go for pizza</a>

<Chip class="ml-6 primary-color">You can call me chip</Chip>