const TodoModel = require("../models/todoListModel");
const jwt = require("jsonwebtoken");

exports.createTodo = async (req, res) => {
  try {
    let reqBody = req.body;
    let TodoSubject = reqBody["TodoSubject"];
    let TodoDesc = reqBody["TodoDesc"];
    let userName = req.headers["userName"];
    let TodoStatus = "New";
    let TodoCreateDate = Date.now();
    let postBody = {
      userName: userName,
      TodoSubject: TodoSubject,
      TodoDesc: TodoDesc,
      TodoStatus: TodoStatus,
      TodoCreateDate: TodoCreateDate,
    };
    let result = await TodoModel.create(postBody, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e.toString() });
  }
};

exports.selectTodo = async (req, res) => {
  let userName = req.headers["userName"];
  try {
    let result = await TodoModel.find({ userName: userName }).exec();
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err.toString() });
  }
};

exports.updateTodo = async (req, res) => {
  let TodoSubject = req.body["TodoSubject"];
  let TodoDesc = req.body["TodoDesc"];
  let id = req.body["_id"];
  let newcreateDate = Date.now();
  let postBody = {
    TodoSubject: TodoSubject,
    TodoDesc: TodoDesc,
    id: id,
    newcreateDate: newcreateDate,
  };
  try {
    let result = await TodoModel.updateOne(
      { _id: id },
      { $set: postBody },
      { upset: true }
    );
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(404).json({ status: "fail", data: err.toString() });
  }
};

exports.updateStatusTodo = async (req, res) => {
  let TodoStatus = req.body["TodoStatus"];
  let id = req.body['_id']
  let postBody ={
    TodoStatus: TodoStatus
  }
  try{
    let result = await TodoModel.updateOne({_id: id}, {$set: postBody}, {upset: true})
    res.status(200).json({ status: "success", data: result });

  }catch(err) {
    res.status(404).json({ status: "fail", data: err.toString() });

  }
};

exports.DeleteTodo = async(req, res) =>{
    let id = req.body['_id']
    try{
        let result = await TodoModel.deleteMany({_id: id})
        // if (result.deleteCount > 0){
            res.status(200).json({status: "Success", message: result})
        // }else{
        //     res.status(404).json({ status: "Fail", message: "No matching documents found" });
        // }
    }catch(err) {
        res.status(404).json({status: "fail", message: err.toString()})

    }
}
