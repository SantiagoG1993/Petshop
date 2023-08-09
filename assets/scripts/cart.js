let { createApp } = Vue

let app = createApp({
    data() {
        return {
            /* data: [],
            catJugueteria: [],
            searchInput: '',
            filtrados:[],
            agregadoCarrito:[] */
        }
    },
    created() {
/*         fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
            .then(res => res.json())
            .then(data => {
                this.data = data
                this.catFarmacia = this.data.filter(card => card.categoria == 'farmacia')
                this.catJugueteria = this.data.filter(card => card.categoria == 'jugueteria')
            }).catch(error => console.log(error)) */
/*             
            this.agregadoCarrito=this.getLocalStorage() ?? [] */
    },


    methods:{
          /*   toggleCart(id){
             if(this.agregadoCarrito.find(prod => prod._id==id)) {
                console.log(`ya esta`)
             } else{
                const aux=this.data.find(prod => prod._id==id)
                this.agregadoCarrito.push(aux)
            }
            const jsonCarrito=JSON.stringify(this.agregadoCarrito)
            localStorage.setItem("agregado",jsonCarrito)
        },
        getLocalStorage(){
           return JSON.parse(localStorage.getItem("agregado"))
        } */
        
        
    },
    

    computed:{
    }
})
app.mount('#app')