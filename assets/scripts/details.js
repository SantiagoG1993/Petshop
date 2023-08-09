let { createApp } = Vue

let app = createApp({
    data() {
        return {
            prod: [],
            queryId: undefined
        }
    },
    created() {
        fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
            .then(res => res.json())
            .then(data => {
                this.prod = data
                let urlParams = new URLSearchParams(location.search)
                this.queryId = urlParams.get('_id')
                console.log(this.prod)
            }).catch(error => console.log(error))
    },
    computed: {
        cardFiltradaPorId(){
            return this.prod.filter(card => card._id == this.queryId)
        }
    }
})
app.mount('#app')