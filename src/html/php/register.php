<?php
	include 'DBHelper.php';
	include 'format.php';

	//判断当前 email 是否已存在数据表中  loshi1610:表名
	$emailCheck = format("select * from loshi1610 where email='{0}'", $_POST["email"]);
	$result = query($emailCheck);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = format("insert into loshi1610(email, password, phone) values('{0}', '{1}', '{2}')", $_POST["email"], $_POST["password"], $_POST["phone"]);
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'email 已被注册！！！'}";
	}
?>