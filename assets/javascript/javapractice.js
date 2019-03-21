function vowel_list(words) {
  var vowels = 'aeiouAEIOU';
  var count = 0;
  
  for(var i = 0; i < words.length ; i++)
  {
    if (vowels.indexOf(words[i]) === -1)
    {
      count += 1;
    }
  
  }
  return count;
}
console.log(vowel_list(" Count all of the vowels"));