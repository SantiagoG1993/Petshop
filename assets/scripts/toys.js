let { createApp } = Vue

let app = createApp({
    data() {
        return {
            data: [],
            catJugueteria: [],
            searchInput: '',
            filtrados:[],
            agregadoCarrito:[],
            totalCarrito:'',
        }
    },
    created() {
        fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
            .then(res => res.json())
            .then(data => {
                this.data = data
                this.catFarmacia = this.data.filter(card => card.categoria == 'farmacia')
                this.catJugueteria = this.data.filter(card => card.categoria == 'jugueteria')
            }).catch(error => console.log(error))
            
            this.agregadoCarrito=this.getLocalStorage() ?? []
    },


    methods:{
            toggleCart(id){
             if(this.agregadoCarrito.find(prod => prod._id==id)) {
                this.agregadoCarrito=this.agregadoCarrito.filter(prod=>prod._id!=id)
             } else{
                const aux=this.data.find(prod => prod._id==id)
                this.agregadoCarrito.push(aux)
            }
            const jsonCarrito=JSON.stringify(this.agregadoCarrito)
            localStorage.setItem("agregado",jsonCarrito)
        },
        getLocalStorage(){
           return JSON.parse(localStorage.getItem("agregado"))
        },
        elminarDelCarraito(id){
            this.agregadoCarrito=this.agregadoCarrito.filter(prod=>prod._id!=id) 
            const jsonCarrito = JSON.stringify(this.agregadoCarrito);
            localStorage.setItem("agregado", jsonCarrito);
        },
        vaciarCarrito() {
            this.agregadoCarrito = [];
            const jsonCarrito = JSON.stringify(this.agregadoCarrito);
            localStorage.setItem("agregado", jsonCarrito);
        },
        agregarUnidad(id) {
            const producto = this.agregadoCarrito.find(prod => prod._id === id);
            if (producto.disponibles > 0) {
              producto.disponibles--;
            }
          }, 
          restarUnidad(id) {
            const producto = this.agregadoCarrito.find(prod => prod._id === id);
            if (producto.disponibles > 0 ) {
              producto.disponibles++;
            }     
    },
},
    computed:{
        filtroSearch(){
            this.filtrados = this.catJugueteria.filter(prod => prod.producto.toLowerCase().includes(this.searchInput.toLowerCase()))
        },
        total() {
            const sum = this.agregadoCarrito.reduce((total, producto) => {
              return total + producto.precio;
            }, 0);
            this.totalCarrito = sum;
            console.log(this.totalCarrito)
          }
          },
})
app.mount('#app')