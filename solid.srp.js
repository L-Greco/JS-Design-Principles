const fs = require('fs');
// Το σενάριο εδώ είναι η κλάσση να μην κάνει πολλά πράγματα 
// αλλά ένα τη φορά , εδώ στην αρχή φτιάχνει την κλάση Journal
// και θέλει να προσθέτει και να αφαιρεί entries και να τις 
// μετατρέπει σε strings 
// Στην συνέχεια όμως θέλει να βάλει και εξτρα functionalities
// όπως να γράφονται τοπικά στον δίσκο, το να το βάλει στην αρχική κλάσση 
// είναι bad practise οπότε ξεκινάει μια καινούργια
class Journal
{
  constructor() {
    this.entries = {};
  }

  addEntry(text)
  {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index)
  {
    delete this.entries[index];
  }

  toString()
  {
    return Object.values(this.entries).join('\n');
  }

  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}
Journal.count = 0;

class PersistenceManager
{
  preprocess(j)
  {
    //
  }

  saveToFile(journal, filename)
  {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let p =new PersistenceManager();
let filename = 'c:/temp/journal.txt';
// p.saveToFile(j, filename);

// separation of concerns