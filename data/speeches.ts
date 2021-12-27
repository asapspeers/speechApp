import { ImageSourcePropType } from 'react-native'

export interface Speech {
  /* Unique id of the speech */
  id: string
  /* Title of the speech */
  title: string
  /* Description of the speech */
  subtitle: string
  /* How long is the speech in minutes */
  time: number
  /* The order of the speech in the list */
  order: number
  /* URL of the image to show */
  image: ImageSourcePropType
  /* URI of the audio file */
  uri: string
  /* Track ID from the back-end */
  track: number
}
export default interface SpeechItem {
  item: Speech
}

export const toprated: Speech[] = [
  {
    id  :   '4000'  ,
    order  : 1,
    title  :   'I Have Dream'  ,
    track  : 0,
    subtitle  :   'Martin Luther King Jr.'  ,
    time   : 17,
    uri  :   'https://ia600207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3'  ,
    image  :   require('../assets/images/mlk.jpg')  
},
{
    id  :   '4001'  ,
    order  : 2,
    title  :   'Inaugural Address'  ,
    track  : 1,
    subtitle  :   'John Fitzgerald Kennedy'  ,
    time   : 15,
    uri  :   'https://www.americanrhetoric.com/mp3clips/politicalspeeches/jfkinaugural2.mp3'  ,
    image  :   require('../assets/images/jfk1.jpg')  
},
{
    id  :   '4002'  ,
    order  : 3,
    title  :   '1st Inaugural Address'  ,
    track  : 2,
    subtitle  :   'Franklin Delano Roosevelt'  ,
    time   : 19,
    uri  :   'https://www.americanrhetoric.com/mp3clips/politicalspeeches/fdrfirstinaugural11223.mp3'  ,
    image  :   require('../assets/images/fdr1.jpg')  
},
{
    id  :   '4003'  ,
    order  : 4,
    title  :   'Pearl Harbor Address'  ,
    track  : 3,
    subtitle  :   'Franklin Delano Roosevelt'  ,
    time   : 8,
    uri  :   'https://www.americanrhetoric.com/mp3clips/politicalspeeches/fdrwarmessage344.mp3'  ,
    image  :   require('../assets/images/fdr2.jpg')  
},
{
    id  :   '4004'  ,
    order  : 5,
    title  :   '1976 DNC Keynote Address'  ,
    track  : 4,
    subtitle  :   'Barbara Charline Jordan'  ,
    time   : 19,
    uri  :   'https://www.americanrhetoric.com/mp3clips/politicalspeeches/barbarajordan1976dnc.mp3'  ,
    image  :   require('../assets/images/barbaracj.jpg')  
}
,
]

export const movies: Speech[] = [
  {
    id  :   '5000'  ,
    order  : 1,
    title  :   'Address to Scottish Army at Stirling'  ,
    track  : 0,
    subtitle  :   'Braveheart(1995)'  ,
    time   : 2,
    uri  :   'https://www.americanrhetoric.com/MovieSpeeches/specialengagements/moviespeechbraveheartfreedom.mp3'  ,
    image  :   require('../assets/images/braveheart.jpg')  
},
{
    id  :   '5001'  ,
    order  : 2,
    title  :   'Queen Elizabeth Addresses Rival Clergy on a Unified Church of England'  ,
    track  : 1,
    subtitle  :   'Elizabeth(1998)'  ,
    time   : 3,
    uri  :   'https://www.americanrhetoric.com/mp3clips/newmoviespeeches/moviespeechelizabeth.mp3'  ,
    image  :   require('../assets/images/qe.jpg')  
},
{
    id  :   '5002'  ,
    order  : 3,
    title  :   'Queen Gorgo Address the Spartan Apella'  ,
    track  : 2,
    subtitle  :   '300(2007)'  ,
    time   : 2,
    uri  :   'https://www.americanrhetoric.com/mp3clips/newmoviespeeches/moviespeech300queengorgo.mp3'  ,
    image  :   require('../assets/images/300q.jpg')  
},
{
    id  :   '5003'  ,
    order  : 4,
    title  :   'John Quincy Adams Addresses the Supreme Court of the United States of America'  ,
    track  : 3,
    subtitle  :   'Amistad(1997)'  ,
    time   : 10,
    uri  :   'https://www.americanrhetoric.com/mp3clips/newmoviespeeches/moviespeechamistadadams.mp3'  ,
    image  :   require('../assets/images/ah.jpg')  
},
{
    id  :   '5004'  ,
    order  : 5,
    title  :   'Principal Joe Clark Addresses Students: Welcome to the New Eastside High'  ,
    track  : 4,
    subtitle  :   'Lean on Me(2000)'  ,
    time   : 5,
    uri  :   'https://www.americanrhetoric.com/mp3clipsXE/newmoviespeeches/moviespeechleanonmeARXEambience.mp3'  ,
    image  :   require('../assets/images/mf.jpg')  
},
{
    id  :   '5005'  ,
    order  : 6,
    title  :   'President Thomas J. Whitmore Addresses to the U.S. Fighter Pilots'  ,
    track  : 5,
    subtitle  :   'Independence Day(1996)'  ,
    time   : 2,
    uri  :   'https://www.americanrhetoric.com/mp3clips/newmoviespeeches/moviespeechindependenceday3634964369.mp3'  ,
    image  :   require('../assets/images/id.jpg')  
},
{
    id  :   '5006'  ,
    order  : 7,
    title  :   'Elle Woods Delivers Student Address at Harvard Law School 2004 Graduation Ceremony'  ,
    track  : 6,
    subtitle  :   'Legally Blonde(2001)'  ,
    time   : 2,
    uri  :   'https://www.americanrhetoric.com/mp3clips/newmoviespeeches/moviespeechlegallyblonde.mp3'  ,
    image  :   require('../assets/images/lb.jpg')  
}

,
]

export const politics: Speech[] = [
  {
     id : '6000',
     order : 1,
     title :  'Democratic National Convention Keynote Speech' ,
     track : 0,
     subtitle :  'Barack Obama (2004)' ,
     time  : 16,
     uri :  'https://www.americanrhetoric.com/mp3clipsXE/barackobama/barackobama2004dncARXE.mp3' ,
     image :  require('../assets/images/obama.jpg') 
  },
  {
     id : '6001',
     order : 2,
     title :  '9/11 Address to the Nation' ,
     track : 1,
     subtitle :  'George W. Bush (2001)' ,
     time  : 4,
     uri :  'https://www.americanrhetoric.com/mp3clipsXE/911speeches/gwb9-11addressARXE.mp3' ,
     image :  require('../assets/images/gwb.jpg') 
  },
  {
     id : '6002',
     order : 3,
     title :  'Democratic National Convention Keynote Address' ,
     track : 2,
     subtitle :  'Hilary Clinton (2008)' ,
     time  : 23,
     uri :  'https://www.americanrhetoric.com/mp3clipsXE/politicalspeeches/hillaryclinton2008dncARXE.mp3' ,
     image :  require('../assets/images/hilary.jpg') 
  },
  {
     id : '6003',
     order : 4,
     title :  '2000 Presidential Concession Speech' ,
     track : 3,
     subtitle :  'Al Gore (2000)' ,
     time  : 7,
     uri :  'https://www.americanrhetoric.com/mp3clips/politicalspeeches/algore2000presidentialconcession.mp3' ,
     image :  require('../assets/images/algore.jpg') 
  }
]






export const speeches = {
  toprated,
  movies,
  politics,
}
