<template>
    <span>
        <hello-world></hello-world>
        <home-details></home-details>
        <home-plans></home-plans>
    </span>
</template>
<script>
import HelloWorld from '@/components/HelloWorld';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

export default {
    name: 'Home',
    components: {
        HelloWorld,
        HomeDetails,
        HomePlans,
    },
};
</script>
