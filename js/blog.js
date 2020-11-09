// ----------------BLOG--------------------->

const blogContent = [
  {
  text : "Many people tend to overcomplicate this concept, because they apply normal function behaviour model. But closures do not work like a normal function. First, we need to keep in mind that when you execute a function, all the variables inside are first initialized, used and then... destroyed!",
  tech: "JavaScript",
  title: "Closures",
  date: "30th october 2020",
  id: "closures"
},
{
  text : "It is the object that is executing the current function, so without any context, this refers to the global object which in a browser is the window. It means, it refers to the root – the global scope.",
  tech: "JavaScript",
  title: "This",
  date: "29th october 2020",
  id: "this"
},
{
  text : "Scope will make your code stand up and reduce errors, so it is very important to grass this concept.This is about security. Scoping parts of your code helps to improve efficiency, solves naming problems, track bugs and reduce them. We can define this as the lifetime and...",
  tech: "JavaScript",
  title: "Scope",
  date: "29th october 2020",
  id: "closures"
}
]

  // FUNCTION TO DISPLAY CONTENT
  function displayNews() {
    const blogs = document.querySelector(".blog_flex");
    let blogHTML = "";
    blogContent.forEach((blog, i) => {
      blogHTML += `
      
      <div class="blog_content" data-index="${i}">
        <p>${blog.text} <a class="blog_link" id="${blog.id}" href="blog/${blog.id}.html"><i>Continue reading....</i></a></p>
          <div class="paragraphs">
            <p class="blog_title"><b>${blog.title}</b> <span class="blog_tech"><i>/${blog.tech}</i></span></p>
            <p class="blog_date">${blog.date}</p>
          </div>
      </div>
      `;
    });
    // making the projects visible
    blogs.innerHTML = blogHTML;
  }
  displayNews();
