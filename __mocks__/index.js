import author from './assets/author.png';
import featuredImage from './assets/featuredImage.png';
import user1 from './assets/man2.png';
import user2 from './assets/man3.png';

const ARTICLE_TITLE = 'How to learn nodejs in 2 minutes',
  ARTICLE_AUTHOR = 'By Mark Adeniran',
  ARTICLE_DATE = 'January 02, 2019',
  ARTICLE_READ_TIME = '3 Mins read';
const ARTICLE_CONTENT = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
dolor.Aenean massa strong.Cum sociis natoque penatibus et magnis dis parturient
montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu,
   pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo, fringilla vel,
      aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis
vitae, justo.Nullam dictum felis eu pede link mollis pretium.Integer tincidunt.Cras
dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo
ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus
   in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.
Quisque rutrum.Aenean imperdiet.Etiam ultricies nisi vel augue.Curabitur
ullamcorper ultricies nisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aenean commodo ligula eget dolor.Aenean massa strong.Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,
   pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo,
      fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet
a, venenatis vitae, justo.Nullam dictum felis eu pede link mollis pretium.Integer
tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend
tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam
lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut
metus varius laoreet.Quisque rutrum.Aenean imperdiet.Etiam ultricies nisi vel
augue.Curabitur ullamcorper ultricies nisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget
dolor.Aenean massa strong.Cum sociis natoque penatibus et magnis dis parturient
montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu,
   pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo, fringilla vel,
      aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis
vitae, justo.Nullam dictum felis eu pede link mollis pretium.Integer tincidunt.Cras
dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo
ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus
   in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.
Quisque rutrum.Aenean imperdiet.Etiam ultricies nisi vel augue.Curabitur
ullamcorper ultricies nisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aenean commodo ligula eget dolor.Aenean massa strong.Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,
   pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo,
      fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet
a, venenatis vitae, justo.Nullam dictum felis eu pede link mollis pretium.Integer
tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend
tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam
lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut
metus varius laoreet.Quisque rutrum.Aenean imperdiet.Etiam ultricies nisi vel
augue.Curabitur ullamcorper ultricies nisi.`;
const COMMENT_TEXT = 'This will be great for business reports. I will definitely download this.',
  NUMBER_OF_LIKES = '23',
  NUMBER_OF_DISLIKES = '12',
  COMMENT_TIME = '3 days ago',
  NUMBER_OF_THREADS = '20 threads';

const commentsArray = [
  {
    id: 1,
    commentText: COMMENT_TEXT,
    numberOfLikes: NUMBER_OF_LIKES,
    numberOfDisikes: NUMBER_OF_DISLIKES,
    commentTime: COMMENT_TIME,
    numberOfThreads: NUMBER_OF_THREADS,
    avatar: user1
  },
  {
    id: 2,
    commentText: COMMENT_TEXT,
    numberOfLikes: NUMBER_OF_LIKES,
    numberOfDisikes: NUMBER_OF_DISLIKES,
    commentTime: COMMENT_TIME,
    numberOfThreads: NUMBER_OF_THREADS,
    avatar: user2
  },
  {
    id: 3,
    commentText: COMMENT_TEXT,
    numberOfLikes: NUMBER_OF_LIKES,
    numberOfDisikes: NUMBER_OF_DISLIKES,
    commentTime: COMMENT_TIME,
    numberOfThreads: NUMBER_OF_THREADS,
    avatar: user1
  }
];

export {
  author,
  commentsArray,
  featuredImage,
  user1,
  user2,
  ARTICLE_TITLE,
  ARTICLE_AUTHOR,
  ARTICLE_DATE,
  ARTICLE_READ_TIME,
  ARTICLE_CONTENT
};
