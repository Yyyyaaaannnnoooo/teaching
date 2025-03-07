/**
 * Based on
 * Listing files in directories and subdirectories
 * by Daniel Shiffman.  
 * change the path to the location of your fb messages
 */

import java.util.Date;
JSONArray messages;
void setup() {
  String result = "";
  // set th epath to point to where your messages are stored
  String path = "/Users/yannpatrickmartins/Documents/IXDM/TEACHING/2019/FS/FB_data/JSON/facebook-yano1428/messages/inbox";

  /*
  
  IGNORE EVERYTHING BELOW HERE!
  
  */
  
  
  ArrayList<File> allFiles = listFilesRecursive(path);

  for (File f : allFiles) {
    messages = loadJSONObject(f.getAbsolutePath()).getJSONArray("messages");
    for (int i = 0; i < messages.size(); i++) {
      JSONObject message = messages.getJSONObject(i);
      String sender = message.getString("sender_name");
      String content = message.getString("content");
      if(sender == null){
        println(message);
        continue;
      }
      if(sent_by_me(sender)){
        result += content + "\n";
      };
    }
  }
  
  String [] save_str = split(result, '\n');
  saveStrings("fb_messages.txt", save_str);
  noLoop();
  exit();
}

boolean sent_by_me(String name) {
  CharSequence comparison = "Ya No";
  return name.contains(comparison);
}

// This function returns all the files in a directory as an array of Strings  
String[] listFileNames(String dir) {
  File file = new File(dir);
  if (file.isDirectory()) {
    String names[] = file.list();
    return names;
  } else {
    // If it's not a directory
    return null;
  }
}

// This function returns all the files in a directory as an array of File objects
// This is useful if you want more info about the file
File[] listFiles(String dir) {
  File file = new File(dir);
  if (file.isDirectory()) {
    File[] files = file.listFiles();
    return files;
  } else {
    // If it's not a directory
    return null;
  }
}

// Function to get a list of all files in a directory and all subdirectories
ArrayList<File> listFilesRecursive(String dir) {
  ArrayList<File> fileList = new ArrayList<File>(); 
  recurseDir(fileList, dir);
  return fileList;
}

// Recursive function to traverse subdirectories
void recurseDir(ArrayList<File> a, String dir) {
  File file = new File(dir);
  if (file.isDirectory()) {
    // If you want to include directories in the list
    //a.add(file);  
    File[] subfiles = file.listFiles();
    for (int i = 0; i < subfiles.length; i++) {
      // Call this function on all files in this directory
      recurseDir(a, subfiles[i].getAbsolutePath());
    }
  } else {
    // here we should check if it is a message or a image
    if (isMessage(file.getName()))a.add(file);
  }
}

boolean isMessage(String file_name) {
  boolean result = false;
  CharSequence json = ".json";
  result = file_name.contains(json);
  return result;
}
