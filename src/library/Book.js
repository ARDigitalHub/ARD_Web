import React from 'react'

const Book = ({ img, title, author }) => {
  const handler = () => {
    return alert("You just clicked image");
  };
  return (
    <section
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt={title} onClick={handler} />
      <h3
        onClick={() => {
          return alert("You just clicked title");
        }}
      >
        {title}
      </h3>
      <h4>{author}</h4>
      <br />
    </section>
  );
};
//CODE **alternat way**
// const bookDetails = bookData.map((bit) => {
//   return (
//     <article className="book">
//       <img src={bit.img} alt="" />
//       <h3>{bit.title}</h3>
//       <h4>{bit.author}</h4>
//     </article>
//   );
// });
// function Booklist() {
//   return (
//     <setion className="booklist">{bookDetails}</setion>
//   )};

//CODE MY Program **
// function Booklist() {
//   return (
//     <setion className="booklist">
//       {bookData.map((bit) => {
//         const {img,title,author,id}=bit;//altenate way for this is in above example
//         return (
//           <article className="book">
//             <img src={img} alt="" />
//             <h3>{title}</h3>
//             <h4>{author}</h4>
//           </article>
//         );
//       })};
//     </setion>
//   );
// };

export default Book
