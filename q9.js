const longestWord = (sentence)=>
{ 
    let longest = '';
    let clean_word = '';
    let max_len = 0;
    let count = 0;
    const splitted_words = sentence.split(" ");
    for(let i=0; i<splitted_words.length; i++)
    {
        for(let j=0; j<splitted_words[i].length; j++)
        {
            if(splitted_words[i][j].toLowerCase() !== splitted_words[i][j].toUpperCase())
            count++;
        }
        if (count > max_len)
        {
            longest = splitted_words[i];
            max_len = count;
        }
        count = 0;
    }
    clean_word = longest;
    for(let k=0; k<longest.length; k++)
    {
       if(longest[k].toLowerCase() === longest[k].toUpperCase())
       clean_word = longest.replace(longest[k],'');
    }
    return clean_word;
}

