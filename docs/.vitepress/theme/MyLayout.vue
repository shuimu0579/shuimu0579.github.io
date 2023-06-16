<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-ads-before>
      <!-- <a
        href="https://twitter.com/shuimu19"
        target="_blank"
        class="advertising"
      >
        <span> 联系我 </span>
      </a> -->
    </template>
  </Layout>
</template>

<style>
.advertising {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  padding: 6px;
  border-radius: 40px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
  background-color: #999;
  cursor: pointer;
  animation: buildingWarningMarker 1.5s infinite ease-in-out;
}

@keyframes buildingWarningMarker {
  0% {
    background-color: hsl(126, 41%, 10%);
    color: hsl(126, 41%, 30%);
  }
  50% {
    background-color: hsl(126, 41%, 30%);
    color: hsl(126, 41%, 80%);
  }
  100% {
    background-color: hsl(126, 41%, 10%);
    color: hsl(126, 41%, 30%);
  }
}
</style>
