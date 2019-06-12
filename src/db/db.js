// let deleteRequest = indexedDB.deleteDatabase('baseStore)

const indexedDB   = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
    baseName 	  = "baseStore",
    storeName 	  = "filesStore";

function logerr(err){
    console.log(err);
}

function connectDB(f){
    const request = indexedDB.open(baseName, 1);
    request.onerror = logerr;
    request.onsuccess = function(){
        f(request.result);
    };
    request.onupgradeneeded = function(e){
        let db = request.result;
        if (!db.objectStoreNames.contains(storeName)) {
            e.currentTarget.result.createObjectStore(storeName, { keyPath: "id", autoIncrement: true});
        }
        connectDB(f);
    }
}

export function get(file, f){
    connectDB(function(db){
        var request = db.transaction([storeName], "readonly").objectStore(storeName).get(file);
        request.onerror = logerr;
        request.onsuccess = function(){
            f(request.result ? request.result : -1);
        }
    });
}

export function getAll(f){
    connectDB(function(db){
        var request = db.transaction([storeName], "readonly").objectStore(storeName).getAll();
        request.onerror = logerr;
        request.onsuccess = function(){
            f(request.result ? request.result : -1);
        }
    });
}

export function set(file){
    connectDB(function(db){
        var request = db.transaction([storeName], "readwrite").objectStore(storeName).put(file);
        request.onerror = logerr;
        request.onsuccess = function(){
            return request.result;
        }
    });
}

export function setByKey(file,key){
    connectDB(function(db){
        var request = db.transaction([storeName], "readwrite").objectStore(storeName).put(file, key);
        request.onerror = logerr;
        request.onsuccess = function(){
            return request.result;
        }
    });
}

export function del(file){
    connectDB(function(db){
        var request = db.transaction([storeName], "readwrite").objectStore(storeName).delete(file);
        request.onerror = logerr;
        request.onsuccess = function(){
            console.log("File delete from DB:", file);
        }
    });
}
