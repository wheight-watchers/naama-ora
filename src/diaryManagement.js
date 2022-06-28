function getDiaryForCurrentuser(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    alert("user id: "+id);
}