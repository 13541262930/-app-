
<script>
export default {
    onLaunch: function () {
		this.$store.commit('initUser')
		this.$store.commit('initHospital')
		this.$store.commit('initIndex')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    }
}
</script>

<style lang="scss">
/*主体颜色 */
// @import "/common/main_colors.scss";
/* 图标库 */
@import "/common/iconfont.css";
/* app公共样式 */
@import "/common/app.scss";
</style>
