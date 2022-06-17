
function doRequest(){
    debugger
    let xhr=new XMLHttpRequest ();
    let url = new URL('https://google.com/search');
    xhr.onload(()=>print("I'M ON LOADED"));
    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
          alert(`Received ${event.loaded} of ${event.total} bytes`);
        } else {
          alert(`Received ${event.loaded} bytes`); // no Content-Length
        }
      
      };
      xhr.onerror = function() {
        alert("Request failed");
      };
    xhr.open("GET",url);
    xhr.send();
}