document.getElementById("button1").onclick = function(){
	var nama = document.getElementById("name").value.trim();
	var kelas = document.getElementById("grade").value.trim();
	var waktu = "";
	var radios = document.getElementsByName("timework");
	var cca = "";
	var checkboxes = document.getElementsByName("sports");
	
	if (nama === ""){
		nama = "(Nama harus diisi)";
	}
	
	if (kelas === ""){
		kelas = "(Kelas harus diisi)";
	}
	
	for (var i = 0; i < checkboxes.length; i++){
		if (checkboxes[i].checked){
			cca = checkboxes[i].value;
			break;
		}
	}
	
	for (var i = 0; i < radios.length; i++){
		if (radios[i].checked){
			waktu = radios[i].value;
			break;
		}
	}
	
	var resultshow = "Nama: " + nama + "\nKelas: " + kelas + "\nExtrakurrikuler: " + cca + "\nJadwal: " + waktu;
	
	document.getElementById("result").innerText = resultshow;
}

document.getElementById("button2").onclick = function(){
	document.getElementById("result").innerText = "Form telah direset. Silakan isi ulang data pendaftaran."
}