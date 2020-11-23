// 定義したコンポーネントを登録
const vm = new Vue({
    el: "#main-component",
    components: {
        "modal-component": modal_component,
    },
    template: `
        <div>
            <button class="btn btn-primary" v-on:click="open()">開く</button>
            <modal-component ref="modal">
                <div slot="header">
                    <div>PWA</div>
                </div>
                <div slot="body">
                    <div>Hello, PWA World!</div>
                </div>
                <div slot="footer">
                    <button class="btn btn-primary" v-on:click="close()">閉じる</button>
                </div>
            </modal-component>
        </div>
        `,
    methods: {
        open: function () {
            this.$refs.modal.show_modal();
        },
        close: function () {
            this.$refs.modal.hide_modal();
        },
    },
});
