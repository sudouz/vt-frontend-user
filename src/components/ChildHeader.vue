<template>
    <aside >
        <nav>
            <div class="container mx-auto px-5">
                <ul>
                    <li>
                        <router-link to="/1">Barchasi</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script setup>
import { useNavStore } from '@/stores/toggle';
const navbar = useNavStore()
</script>

<style lang="scss" scoped></style>