function saveStaticDataToFile() {
  var blob = new Blob(["Welcome to Websparrow.org."],
                { type: "text/plain;charset=utf-8" });
            saveAs(blob, "static.txt");
}
