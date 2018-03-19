/* 
* @Author: Marte
* @Date:   2018-02-28 21:27:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-12 19:08:41
*/
var db = require('../db/db')

//此页面写前端接口
module.exports = {
	register:function(app){
		
//      
//      蛋糕前端接口
//      购物车接口
       app.get('/shopcar',function(req,res){
            
            
            
            var sql = `select * from carlist`;
            
                
            db.select(sql, function(data){
                

                
                res.send(data);
            })



        }) 
       //所有产品数据接口
        app.get('/detapage',function(req,res){
            
            
            
            var sql = `select * from cakelista`;
            
                
            db.select(sql, function(data){
                

                
                res.send(data);
            })



        })
        //根据id拿数据接口
        app.get('/detaid',function(req,res){
            var _id=req.query.id;
            console.log('是' + req.query,_id)
           var sql = `select * from cakelista where id="${_id}"`;
           db.select(sql, function(data){
             res.send(data);
            })
        })
        //根据phonenumber拿数据接口
        app.get('/phonenumber',function(req,res){
            var _phonenumber=req.query.phonenumber;
            console.log('是' +_phonenumber)
           var sql = `select * from user where phonenumber="${_phonenumber}"`;
           db.select(sql, function(data){
             res.send(data);
            })
        })

        //通过用户名获取对应用户信息
        app.get('/getinfo',function(req,res){
            var _phonenumber=req.query.username;
           var sql = `select * from user where phonenumber="${_phonenumber}"`;
           db.select(sql, function(data){
             res.send(data);
            })
        })
        //陈总拿changjing对应信息
         app.get('/changjing',function(req,res){
            var _changjing=req.query.type;

            var a='%'+_changjing+'%';
            console.log("情景",_changjing)
           var sql = `select * from cakelista where changjing like '${a}'`;
           db.select(sql, function(data){
             res.send(data);
             console.log(data)
            })
        })
         //周总拿orderlist
         app.get('/orderlist',function(req,res){
            
           var sql = `select * from orderlist where state="0"`;
           db.select(sql, function(data){
             res.send(data);
            })
        })
        //周总拿state为0的数据
        app.get('/unfinished',function(req,res){
           
           var sql = `select * from orderlist where state="0"`;
           db.select(sql, function(data){
             res.send(data);
            })
        })
        //周总拿state为1的数据
        app.get('/complete',function(req,res){
           
           var sql = `select * from orderlist where state="1"`;
           db.select(sql, function(data){
             res.send(data);
            })
        })

        //---------------------传username过来拿对应用户的地址---------------
        app.get('/getaddress',function(req,res){
            var _username = req.query.username;
            var sql = `select * from user where phonenumber="${_username}"`
            db.select(sql,function(data){
                res.send(data);
            })
        })


        //肖user根据id修改数据接口
        app.get('/idsearch',function(req,res){
            if(req.query.phonenumber){
                var _phonenumber=req.query.phonenumber;
                var _name=req.query.name;
                var _phone=req.query.phone;
                var _city=req.query.city;
                var _address=req.query.address;
                var _house=req.query.house;
            console.log("我", _phonenumber)
      
                var sql = `UPDATE user SET name = '${_name}',
                                        phone = '${_phone}',
                                        city = '${_city}',
                                        house = '${_house}',
                                        address = '${_address}'
                                        WHERE phonenumber = '${_phonenumber}'`;
                
                db.select(sql,function(data){
                    res.send(data);
                    console.log(data)
                })
                
            }
        })
        //周user根据username修改数据接口
        app.get('/changeuser',function(req,res){
            if(req.query.username){
                var _username=req.query.username;
                var _gender=req.query.gender;
                var _nickname=req.query.nickname;
                var _birthday=req.query.birthday;
                var _email=req.query.email;
                var _area=req.query.area;
                var _hobby=req.query.hobby;

            console.log("他", _username,req.query)
      
                var sql = `UPDATE user SET gender = '${_gender}',
                                        nickname = '${_nickname}',
                                        birthday = '${_birthday}',
           
                                       email = '${_email}',
                                        address = '${_area}',
                                        hobby = '${_hobby}'

                                        WHERE phonenumber = '${_username}'`;
                
                db.select(sql,function(data){
                    res.send(data);
                    // console.log(data)
                })
                
            }
        })
 //周根据修改order status数据接口为1
        app.get('/changestatus',function(req,res){
           
                var _id=req.query.orderid;

            // console.log("周", _id,req.query)
      
                var sql = `UPDATE orderlist SET state = '1'
                                       

                                        WHERE orderid= '${_id}'`;
                
                db.select(sql,function(data){
                    res.send(data);
                    // console.log(data)
                })
                
            
        })
        //肖根据修改qty
        app.get('/changeqty',function(req,res){
           
                var _id=req.query.carid;
                var _qty=req.query.qty;

             console.log("肖", _id,_qty)
      
                var sql = `UPDATE carlist SET qty = '${_qty}'
                                       

                                        WHERE carid= '${_id}'`;
                
                db.select(sql,function(data){
                    res.send(data);
                    console.log(data)
                })
                
            
        })
        //肖拿username数据
        app.get('/username',function(req,res){
             var _username=req.query.username;
            var sql = `select * from carlist where username="${_username}"`;
           db.select(sql, function(data){
              res.send(data);
            })



        })
        //周总删除orderlist
        app.get('/deleteorderlist',function(req,res){
           
                var _id=req.query.orderid;

            console.log("周", _id,req.query)
      
                var sql = `DELETE FROM orderlist WHERE orderid= '${_id}'`;
                
                db.select(sql,function(data){
                    res.send(data);
                    // console.log(data)
                })
                
            
        })
        // 肖总删除carlist
        app.get('/deletecarlist',function(req,res){
           
                var _id=req.query.carid;

            console.log("肖删", _id,req.query)
      
                var sql = `DELETE FROM carlist WHERE carid= '${_id}'`;
                
                db.select(sql,function(data){
                    res.send(data);
                    // console.log(data)
                })
                
            
        })
        //点击加入购物车
        app.get('/addcar',function(req,res){
           
                var _id=req.query.id;
                var _username=req.query.username;

            console.log(_id)
      
                var sqlA =`select * from cakelista where id='${_id}'`;
               
                
            db.select(sqlA,function(data){
                   
                    console.log("12344",data.data.results)
                var _chinaName=data.data.results[0].ChinaName;
                var _EnglishName=data.data.results[0].EnglishName;
                var _price=data.data.results[0].price;
                var _imgurl=data.data.results[0].imgurl;
                
                var sql=`insert into  carlist (
                     
                                chinaName,
                                EnglishName,
                                qty,
                                price,
                                sta,
                                imgurl,
                                username
                               
                            )
                            values
                            (
                               '${_chinaName}',
                               '${_EnglishName}',
                               '1',
                               '${_price}',
                               '1磅',
                               '${_imgurl}',
                               '${_username}'
                            )
                        `
                db.insert(sql,function(data){
                            res.send(data);
                            // console.log(data)
                })
                 
            })
         })
// 陈总传参写进购物车
     
app.post('/carlistadd',function(req,res){
            console.log(req.body);
            var _chinaName = req.body.chinaName;
            var _EnglishName = req.body.EnglishName;
            var _price = req.body.price;
            var _username=req.body.username;
            var _imgurl = req.body.imgurl;
            var _sta = req.body.sta;
           
                 var sql=`insert into  carlist (
                 
                    chinaName,
                    EnglishName,
                    username,
                    price,
                    sta,
                    imgurl
                   
                )
                values
                (
                   '${_chinaName}',
                   '${_EnglishName}',
                  '${_username}',
                   '${_price}',
                   '${_sta}',
                   '${_imgurl}'
                )
            `
      
            db.insert(sql,function(data){
                
                if(data.status==true){
                    res.send("ok")
                }else{ res.send("false")}
            })
        })
//肖总写进订单数据
        app.get('/orderlistadd',function(req,res){
            console.log("肖总写进订单数据",req.query.goods);
           
           if(req.query.delivertime&&req.query.total){
            var _delivertime = req.query.delivertime;
            var _total = req.query.total;
           }else{
            var _delivertime = null;
            var _total = null;
           }
           // var _goods = req.query.goods;
           
            var _goods=req.query.goods;
           console.log(_goods)
    
            var sql=`insert into  orderlist (
                     goods,
                   delivertime,
                    total
                  
                )
                values
                (
                   '${_goods}',
                   
                   '${_delivertime}',
                   
                  '${_total}'
                
                   
                )
            `
      
            db.insert(sql,function(data){
                res.send(data);
                console.log(data)
            })
        })

        //蛋糕接口
        app.get('/detadangao',function(req,res){
            var sql = `select * from cakelista where type="dangao"`;
           db.select(sql, function(data){
              res.send(data);
            })



        })
                //冰淇淋接口
        app.get('/detabinqilin',function(req,res){
           var sql = `select * from cakelista where type="binqilin"`;
          db.select(sql, function(data){
               res.send(data);
            })
        })
                //小切块接口
        app.get('/detaxiaoqiekuai',function(req,res){
           var sql = `select * from cakelista where type="xiaoqiekuai"`;
          db.select(sql, function(data){
              res.send(data);
            })



        })
                //咖啡接口
        app.get('/detacoffee',function(req,res){
          var sql = `select * from cakelista where type="coffee"`;
           db.select(sql, function(data){
              res.send(data);
            })



        })
                //常温接口
        app.get('/detachangwen',function(req,res){
           var sql = `select * from cakelista where type="changwen"`;
           db.select(sql, function(data){
              res.send(data);
            })
})
        //设计师接口
        app.get('/detashejishi',function(req,res){
            var sql = `select * from cakelista where type="shejishi"`;
           db.select(sql, function(data){
               res.send(data);
            })
 })
        //盘点用户名是否被占用
        app.get('/user',function(req,res){
            var _username = req.query.username;
        //          console.log(_username);
            var sql = `select * from user where phonenumber='${_username}'`;
            db.select(sql,function(data){
        //              console.log(data);
                if(data.data.results.length == 0){
                    var yes = {"type":"yes"};
                    res.send(yes)
                }else{
                    var no = {"type":"no"};
                    res.send(no)
                }
            })
        })

      
        app.get('/baocunuser',function(req,res){
            var _username = req.query.username;
            var _password = req.query.password;
            console.log("密码",_username,_password)
            var sql = `insert into user (phonenumber,password) values ('${_username}','${_password}')`;
            db.insert(sql,function(data){
                res.send(data);
            })
        })
        app.get('/checkuser',function(req,res){
            var _username = req.query.username;
            var _password = req.query.password;
            var sql = `select * from user where phonenumber='${_username}' and password='${_password}'`;
            db.select(sql,function(data){
                if(data.data.results.length == 0){
            var no = {"type":"0"};
                    res.send(no)
                }else{
            var yes = {"type":"1"};
                    res.send(yes)
                }
            })
        })


	}
}
