//''跟``有區別，''這個不能換行辨別字串，但是``這個可以
const Sensor = { template: `
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#AddModal"
v-if="UserMod == 1"
@click="AddClick()">
 Add Sensor
</button>


<table class="table table-striped">
    <!--thead要看成t head-->
    <!--標題橫幅-->
    <thead>
        <tr>
            <th>
                SensorId
            </th>
            <th>
                SensorName
            </th>
            <th>
                SensorValue
            </th>
            <th>
                Options
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="sen in sensors">
        <!--需告一個變數來承接sensors-->
            <td>{{sen.SensorId}}</td>
            <td>{{sen.SensorName}}</td>
            <td>{{sen.SensorValue}}</td>
            <!--輸出-->
            <td>
                <button type="button"
                class="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#EditModal"
                v-if="UserMod == 3"
                @click="EditClick(sen)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>
                <button type="button" @click="DeleteClick(sen.SensorId)" 
                v-if="UserMod == 2"
                class="btn btn-light mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
            </td>
        </tr>
    </tbody>
</table>

<div class="modal fade" id="AddModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            <!--Add Sensor按鈕裡的內容-->
            <div class="modal-body">
                <!--輸入框-->
                <div class="input-group mb-3">
                    <span class="input-group-text">Sensor Id</span>
                    <input type="text" class="form-control" v-model="SensorId">
                    <!--這裡要把v-model="SensorId"改成sensors可以讀取的參數-->
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Sensor Name</span>
                    <input type="text" class="form-control" v-model="SensorName">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Sensor Value</span>
                    <input type="text" class="form-control" v-model="SensorValue">
                </div>

                <!--按鈕-->
                <button type="button" @click="CreateClick()"
                class="btn btn-primary">
                Create
                </button>

            </div>

        </div>
    </div>
</div>
<div class="modal fade" id="EditModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <!--id為辨別這個小視窗的名字-->
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            <!--Add Sensor按鈕裡的內容-->
            <div class="modal-body">
                <!--輸入框-->
                <div class="input-group mb-3">
                    <span class="input-group-text">Sensor Name</span>
                    <input type="text" class="form-control" v-model="SensorName">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Sensor Value</span>
                    <input type="text" class="form-control" v-model="SensorValue">
                </div>

                <!--按鈕-->
                <button type="button" @click="UpdateClick()"
                class="btn btn-primary">
                Update
                </button>

            </div>

        </div>
    </div>
</div>
`,
data(){
    return{
        sensors: [],
        modalTitle:"",
        SensorId:0,
        SensorName:"",
        SensorValue:0,
        MaxId:0,
        UserMod: 0,
    }
},
methods:{
    RefreshData(){
        axios.get(Variable.API_URL+"Sensor")
        .then((response)=>{
            this.sensors=response.data;
            MaxId = this.sensors.length;
            //取得sensors的大小，用來避免id重複的情況
            //雖然id可能會不是連續的，但是以現在的情況可以先要求使用者將id設成連續的
            //自動編號的部分可以再MySQL裡設定，現在我的程式是先把id看成另一個value
            console.log(MaxId);
        })  //如果連線成功則執行
        //將讀到的Data放進sensors
        .catch((error) => { console.error(error) })     //如果失敗則執行
        //.finally(() => { console.log("Send command") })       //不管怎樣都會執行
    },
    //console.log 普通訊息
    //console.error 錯誤訊息
    AddClick(){
        this.modalTitle="Add Sensor";
        this.SensorId=0;
        this.SensorName="";
        this.SensorValue=0;
    },
    EditClick(sensors){
        this.modalTitle="Edit Sensor";
        this.SensorId=sensors.SensorId;
        this.SensorName=sensors.SensorName;
        this.SensorValue=sensors.SensorValue;
    },
    CreateClick(){      //post
        if(this.SensorId<=MaxId){
            !confirm("SensorId has been taken");
            return;
        }
        axios.post(Variable.API_URL+"Sensor",{  //Json格式
            SensorId:this.SensorId,
            SensorName:this.SensorName,
            SensorValue:this.SensorValue
        })
        .then((response)=>{
            console.log("Create Data");     //test
            this.RefreshData();
            alert(response.data);
        })
        .catch((error) => { console.error(error) })     //如果失敗則執行
    },
    UpdateClick(){      //put
        axios.put(Variable.API_URL+"Sensor",{
            SensorId:this.SensorId,
            SensorName:this.SensorName,
            SensorValue:this.SensorValue
        })
        .then((response)=>{
            console.log("Update Data");     //test
            this.RefreshData();
            alert(response.data);
        })
        .catch((error) => { console.error(error) })     //如果失敗則執行
    },
    DeleteClick(id){    //delete
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(Variable.API_URL+"Sensor/"+id)
        .then((response)=>{
            console.log("Delete Data");     //test
            this.RefreshData();
            alert(response.data);
        })
        .catch((error) => { console.error(error) })     //如果失敗則執行
    }
},
mounted:function(){
    console.log("Enter Sensor")  //test
    this.UserMod = this.$route.params.UserMod;
    console.log(this.UserMod)  //test
    this.RefreshData()
}

}