<template>
  <div>
	<h1>My Vue Web Component</h1>

    <h2>{{ title }}</h2>

	<p>{{ msg }}</p>

    <fieldset>
        <legend>The component slot data</legend>
        
        <slot></slot>
    </fieldset>
  </div>
</template>

<script>
  export default {
    props: ['msg', 'title'],
    data() {
        return {
            title: this.title || "Default title"
        }
    }
  }
</script>