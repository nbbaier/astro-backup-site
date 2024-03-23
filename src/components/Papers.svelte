<script>
  import listOfPapers from "../data/papers.json";

  function split(arg) {
    return arg.join(" and ");
  }

  const formatCoauthorLinks = (a) =>
    a.map((obj) => `<a target="_blank" href=${obj.url}>${obj.name}</a>`);
</script>

<!-- TODO work on the papers formatting  -->

{#each listOfPapers as paper}
  <div class="mt-2">
    <details>
      <summary>
        <div class="flex">
          <div>{paper.title}</div>
          <div class="ml-auto">
            <a href={paper.path} target="_blank" rel="noopener noreferrer"
              >file</a
            >
          </div>
        </div>
        <div>
          <div class="text-sm">
            {paper.author[0].given}
            {paper.author[0].family}
            {#if paper.coauthors.length > 0}
              | with {@html split(formatCoauthorLinks(paper.coauthors))}{/if}
          </div>
        </div>
      </summary>
      <div class="text-sm">abstract</div>
    </details>
  </div>
{/each}

<style lang="scss">
  details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: /* y */ 0.5em /* x */ 0.5em;
  }

  details[open] {
    padding: /* y */ 0.5em /* x */ 0.5em;
  }

  summary {
    margin: -0.5em -0.5em -0.5em;
    padding: /* y */ 0.5em /* x */ 0.5em;
    list-style-type: none;
  }

  details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
    background-color: white;
    padding: 0.5em;
  }
</style>
