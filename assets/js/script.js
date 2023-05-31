function Error(){
	const pass = prompt("Password");
	if (pass == 9924) {
		location.href="https://drive.google.com/drive/folders/1xIqvoxinORkp9aXYqBhrAqoCvLt1syT4?usp=sharing";
	}
	else {
			alert("용케도 이스터에그를 찾았지만 비번이 있지 ㅋㅋ");
	}
};

function PassHome() {
	const pass = prompt("Password (1234)");
	if (pass == 1234) {
		// var link = '../../drive.html';
		var link = 'https://drive.google.com/drive/folders/1OUuTZagsygaqKwS1329jdfCF0NnEccFV?usp=sharing';
		location.href=link;
	}
	else {
		alert("비밀번호가 틀렸습니다.")
	}
	
}
