// Q:Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function downloadFile(url, funcCall){
    
    setTimeout(() => {
        console.log(`Download Complete: ${url}`)
        funcCall()
    }, 3000);
    
}

function funcCall(){
    console.log("CallBack Executed!")
}

downloadFile("https://files.access.com", funcCall)