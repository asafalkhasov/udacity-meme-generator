<template>
    <div class="my-codes">
        <h1>My Meme</h1>
        <div v-for="item in codes" :key="item.codeId">
            <code-item
                @deleteItem="deleteCode"
                :myCode="true"
                :code="item"
            ></code-item>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CodeItemComponent from "@/components/CodeItem.vue";
import { CodeItem } from "@/models/CodeItem";

@Component({
    components: { codeItem: CodeItemComponent },
})
export default class MyCodes extends Vue {
    mounted() {
        if (this.$store.state.accessToken == "") {
            this.$store.subscribe((mutation) => {
                if (mutation.type == "setAccessToken") {
                    this.$store.dispatch("getUserCodes");
                }
            });
        } else {
            this.$store.dispatch("getUserCodes");
        }
        if (this.$route.query.uploaded) {
            this.$bvToast.toast(
                `The code item was successfully added. Wait for a little while, until the image is being generated`,
                {
                    title: "Added",
                    autoHideDelay: 5000,
                }
            );
        }
    }

    get codes() {
        return this.$store.state.userCodes as CodeItem[];
    }
    deleteCode(code: CodeItem) {
        this.$store.dispatch("deleteCode", code.codeId).then(() => {
            const newCodes = this.codes.filter(
                (item) => item.codeId != code.codeId
            );
            this.$store.commit("setUserCodes", newCodes);
        });
    }
}
</script>
