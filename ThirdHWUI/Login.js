
const Login = { template: `
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
        <!--Title-->
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Log In</h5>
        </div>

        <!--TextBox-->
        
        <div class="modal-body">
            <div class="input-group mb-3">
                <span class="input-group-text">帳號</span>
                <input type="text" class="form-control" v-model="UserId">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">密碼</span>
                <input type="password" class="form-control" v-model="UserPassword">
            </div>

            
            <!--Button-->
            <button type="button" @click="LoginClick(UserId)"
            class="btn btn-primary">
            Log In
            </button>
        
        
            <router-link class="btn btn-light btn-outline-primary"
            v-if="UserMod == 1" to="/Sensor/1">Enter Sensor</router-link>
            
            <router-link class="btn btn-light btn-outline-primary"
            v-if="UserMod == 2" to="/Sensor/2">Enter Sensor</router-link>

            <router-link class="btn btn-light btn-outline-primary"
            v-if="UserMod == 3" to="/Sensor/3">Enter Sensor</router-link>
        
        </div>
    </div>
  </div>
`,
data(){
    return{
        User: [],
        UserId: "",
        UserPassword:"",
        UserMod:0
    }
},
methods:{
    LoginClick(UserId){
        if(this.UserId == "" || this.UserPassword == ""){
            alert("請先輸入帳號密碼");
            return;
        }

        axios.get(Variable.API_URL+"Userr/"+UserId)
        .then((response)=>{
            this.User = response.data;
            this.UserMod = this.User[0].UserrMod;
            console.log(this.User[0].UserrMod);
            switch(this.UserMod){
                case 1:
                    alert("使用者權限：新增");
                    break;
                case 2:
                    alert("使用者權限：刪除");
                    break;
                case 3:
                    alert("使用者權限：修改");
                    break;
            }
        })
        .catch((error) => { console.error(error) }) 
    },
},
mounted:function(){

}
}