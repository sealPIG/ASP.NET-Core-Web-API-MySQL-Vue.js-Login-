using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;
using ThirdHW.Model;

namespace ThirdHW.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserrController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserrController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                        select UserrId,UserrPassword,UserrMod
                        from sealdb.Userr
            ";  //設定 Mysql 指令

            DataTable table = new DataTable();      //新增一個table來存放資料
            string sqlDataSource = _configuration.GetConnectionString("UserrConnection");     //設定連線
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();   //讀取資料庫
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult(table);       //將 table 以 Json 的形式顯示出來
        }

        [HttpGet("{userrid}")]
        public JsonResult GetId(int userrid)
        {
            string query = @"
                        select UserrId,UserrPassword,UserrMod
                        from sealdb.Userr
                        where UserrId = @UserrId
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("UserrConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@UserrId", userrid);     //將讀取到的 id 帶入

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Userr user)
        {
            string query = @"
                        insert into sealdb.Userr (UserrId,UserrPassword,UserrMod) 
                        values (@UserrId,@UserrPassword,@UserrMod);
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("UserrConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@UserrId", user.UserrId);        //將讀到的值寫進 myCommand 裡
                    myCommand.Parameters.AddWithValue("@UserrPassword", user.UserrPassword);
                    myCommand.Parameters.AddWithValue("@UserrMod", user.UserrMod);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Userr user)
        {
            string query = @"
                        update sealdb.Userr set 
                        UserrPassword = @UserrPassowrd,UserrMod = @UserrMod
                        where UserrId = @UserrId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("UserrConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@SensorId", user.UserrId);
                    myCommand.Parameters.AddWithValue("@SensorName", user.UserrPassword);
                    myCommand.Parameters.AddWithValue("@SensorValue", user.UserrMod);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{userid}")]
        public JsonResult Delete(int userid)
        {
            string query = @"
                        delete from sealdb.Userr 
                        where UserrId = @UserrId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("UserrConnection");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@UserrId", userid);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
