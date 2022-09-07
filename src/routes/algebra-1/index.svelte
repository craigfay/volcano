<script lang="ts">
  import courseInfo from './index.json';

  type CourseInfo = {
    title: String,
    slug: String,
    shortDescription: String,
    longDescription: String,
    sections: CourseSection[],
  }

  type CourseSection = {
    title: String,
    slug: String,   
  }

</script>

<!-- Course Title And Description -->
<div class="bg-gray-100 p-5 pt-10">
  <h1 class="text-5xl font-bold mb-10">{courseInfo.title}</h1>
  <p class="text-2xl text-gray-700 mb-10">{courseInfo.shortDescription}</p>

  {#each courseInfo.longDescription.split('\n') as line}
    <p class="text-xl text-gray-500 mb-5">{line}</p>
  {/each}
</div>


<!-- Course Sections -->
{#each courseInfo.sections as section, idx}

<div class="p-5 pt-10">

  <!-- Title -->
  <div class="flex items-center mb-4">
    <div class="bg-red-300 text-xl text-red-700 w-5 h-5 flex p-5 mr-5 rounded-full justify-center items-center">{idx + 1}</div>
    <h2 class="text-4xl font-bold">{section.title}</h2>
  </div>

  <p class="text-xl text-gray-500 mb-10">{section.shortDescription}</p>

  {#each section.chapters as chapter}
    <a href={`/${courseInfo.slug}/${chapter.slug}`} class="flex flex-col mb-5">
      <div class="w-full aspect-video bg-gray-200 mb-5"></div>
      <h2 class="text-2xl">{chapter.title}</h2>
      <h2 class="text-gray-500">{chapter.shortDescription}</h2>
    </a>
  {/each}
</div>

{/each}